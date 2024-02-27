import React from 'react';
import { Cookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rwdUseAmtAtom } from '../../../../states/rewardAtom';
import {
  ADDR,
  CNTCT_NUM,
  PROCT_BRN,
  PROCT_CODE,
  PROCT_NOM,
  PROCT_OPT_NOM,
  PROCT_OPT_AMT,
  PROCT_OPT_QTY,
  RCPNT_NOM,
  SHP_FEE,
  SKU_CODE,
  ZIP_CODE,
} from '../../../../const/CookieVars';
import { IMP_CODE } from '../../../../const/IamportVars';
import {
  postPaymentPreparation,
  postPaymentVerification,
} from '../../../../services/payment/postPayment';
import { RequestPayResponse } from 'iamport-typings';
import { PAY_METHOD, VERIFICATION_URL } from '../../../../const/Payment';
import { pgCodeAtom } from '../../../../states/paymentAtom';
import { addrDetailAtom, memoCntAtom } from '../../../../states/orderAtom';
import { useNavigate } from 'react-router-dom';

const OrderPaymentProcess: React.FC = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const rwdUseAmt = useRecoilValue(rwdUseAmtAtom);
  const pgCode = useRecoilValue(pgCodeAtom);
  const memoCnt = useRecoilValue(memoCntAtom);
  const addrDetail = useRecoilValue(addrDetailAtom);

  const proctCode: number = cookies.get(PROCT_CODE);
  const proctNom: string = cookies.get(PROCT_NOM);
  const proctBrn: string = cookies.get(PROCT_BRN);
  const skuCode: number = cookies.get(SKU_CODE);
  const proctOptAmt: number = cookies.get(PROCT_OPT_AMT);
  const proctOptQty: number = cookies.get(PROCT_OPT_QTY);
  const proctOptNom: string = cookies.get(PROCT_OPT_NOM);
  const rcpntNom: string = cookies.get(RCPNT_NOM);
  const cntctNum: string = cookies.get(CNTCT_NUM);
  const addr: string = cookies.get(ADDR);
  const zipCode: string = cookies.get(ZIP_CODE);
  const shpFee: number = cookies.get(SHP_FEE);

  const totalAmount = proctOptAmt * proctOptQty + shpFee;
  const spentAmount = totalAmount - rwdUseAmt;

  type ProductOption = {
    [key: string]: number | string;
  };

  interface PaymentReqData {
    [key: string]: number | string | ProductOption;
  }

  async function requestPay() {
    const { IMP } = window;
    if (!window.IMP || IMP === undefined) return;
    IMP.init(IMP_CODE);
    const merchant_uid = `mid_${new Date().getTime()}`;

    await postPaymentPreparation(
      spentAmount,
      proctCode,
      skuCode,
      proctOptAmt,
      proctOptQty,
      proctOptNom,
    );

    const data = {
      pg: pgCode, // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
      pay_method: PAY_METHOD, // 결제수단
      merchant_uid: merchant_uid, // 주문번호
      amount: spentAmount, // 결제금액
      name: proctNom + ' ' + proctOptNom, // 상품명
      buyer_name: rcpntNom, // 구매자 이름
      buyer_tel: cntctNum, // 구매자 전화번호
      buyer_email: 'example@example.com', // 구매자 이메일
      buyer_addr: addr, // 구매자 주소
      buyer_postcode: zipCode, // 구매자 우편번호
      m_redirect_url: VERIFICATION_URL,
    };

    IMP.request_pay(data, callback);
  }

  async function callback(rsp: RequestPayResponse) {
    const { success, error_msg } = rsp;

    const impUid = rsp.imp_uid;
    const pgTid = rsp.pg_tid;

    if (impUid === null || pgTid === undefined) {
      return;
    }

    if (success) {
      try {
        const jsonData: PaymentReqData = {
          ordCode: impUid,
          impUid: impUid,
          amount: spentAmount,
          recipientName: rcpntNom,
          contactNum: cntctNum,
          zipCode: zipCode,
          addr: addr,
          addrDetail: addrDetail,
          memoCnt: memoCnt,
          productCode: proctCode,
          productName: proctNom,
          brandName: proctBrn,

          productOption: {
            skuCode: skuCode,
            productOrderAmt: proctOptAmt,
            productOrderQty: proctOptQty,
            productOptVal: proctOptNom,
          },
          rewardAmt: rwdUseAmt,
          shpFee: shpFee,
          totalOrdAmt: totalAmount,
          pgProvider: pgCode,
          payMethod: PAY_METHOD,
          pgTid: pgTid,
        };

        const formData = new FormData();
        for (const [key, value] of Object.entries(jsonData)) {
          if (typeof value === 'object') {
            for (const [subKey, subValue] of Object.entries(jsonData[key])) {
              formData.append(key + '.' + subKey, subValue);
            }
          } else {
            if (typeof value === 'number') {
              formData.append(key, value.toString());
            } else if (typeof value === 'string') {
              formData.append(key, value);
            }
          }
        }

        await postPaymentVerification(formData)
          .then(() => {
            navigate('/order-complete');
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      } catch (error) {
        console.error('Error while verifying payment:', error);
        alert(error);
        throw error;
      }
    } else {
      alert(error_msg);
      console.log('Error msg:', error_msg);
      alert(error_msg);
      throw error_msg;
    }
  }

  return (
    <div>
      {memoCnt !== '' && addrDetail !== '' && pgCode !== '' ? (
        <PaymentBtn onClick={requestPay}>
          {spentAmount?.toLocaleString()}원 결제하기
        </PaymentBtn>
      ) : (
        <NonePaymentBtn>
          {spentAmount?.toLocaleString()}원 결제하기
        </NonePaymentBtn>
      )}
    </div>
  );
};

const PaymentBtn = styled.div`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: #fff;
  flex-shrink: 0;
  background: ${({ theme }) => theme.mainColor.Orange5};
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0 9.4px 0;
  margin: 8.8px 20px 0 20px;
`;

const NonePaymentBtn = styled.div`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: #fff;
  flex-shrink: 0;
  background: ${({ theme }) => theme.grey.Grey2};
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0 9.4px 0;
  margin: 8.8px 20px 0 20px;
`;

export default OrderPaymentProcess;
