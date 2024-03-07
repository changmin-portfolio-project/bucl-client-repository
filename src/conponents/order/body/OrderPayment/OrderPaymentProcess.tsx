import React from 'react';
import styled from 'styled-components';
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
  ADDR_NOM,
  RWD_USE_AMT,
  PG_PROVIDER,
  MEMO_CNT,
  ADDR_DETAIL,
  IS_NEW_ADDR,
  TOT_AMOUNT,
  SPENT_AMOUNT,
} from '../../../../const/CookieVars';
import { IMP_CODE } from '../../../../const/IamportVars';
import { postPaymentPreparation } from '../../../../services/payment/postPayment';
import { RequestPayResponse } from 'iamport-typings';
import { PAY_METHOD, VERIFICATION_URL } from '../../../../const/Payment';
import { useNavigate } from 'react-router-dom';
import { paymentVerifyUtil } from '../../../../utils/PaymentUtil';
import { TRUE_STRING } from '../../../../const/SessionStorageVars';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import { useRecoilValue } from 'recoil';
import { ordPayDataAtom } from '../../../../states/orderAtom';

const OrderPaymentProcess: React.FC = () => {
  /** 변경 */

  const ordPayDataState: OrderPaymentType = useRecoilValue(ordPayDataAtom);

  const navigate = useNavigate();
  const rwdUseAmt = ordPayDataState.rwdUseAmt;
  const pgCode = ordPayDataState.pgCode;
  const memoCnt = ordPayDataState.memoCnt;
  const addrDetail = ordPayDataState.addrDetail;

  const isNewAddr = ordPayDataState.isNewAddr;

  const proctCode: number = ordPayDataState.proctCode;
  const proctNom: string = ordPayDataState.proctNom;
  const proctBrn: string = ordPayDataState.proctBrn;
  const skuCode: number = ordPayDataState.skuCode;
  const proctOptAmt: number = ordPayDataState.proctOptAmt;
  const proctOptQty: number = ordPayDataState.proctOptQty;
  const proctOptNom: string = ordPayDataState.proctOptNom;
  const rcpntNom: string = ordPayDataState.rcpntNom;
  const cntctNum: string = ordPayDataState.cntctNum;
  const addr: string = ordPayDataState.addr;
  const zipCode: string = ordPayDataState.zipCode;
  const shippingAddressName = ordPayDataState.shippingAddressName;
  const shpFee: number = ordPayDataState.shpFee;

  const totalAmount = proctOptAmt * proctOptQty + shpFee;
  const spentAmount = totalAmount - rwdUseAmt;

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
      m_redirect_url:
        VERIFICATION_URL +
        '?' +
        `${RCPNT_NOM}=${rcpntNom}&` +
        `${CNTCT_NUM}=${cntctNum}&` +
        `${ZIP_CODE}=${zipCode}&` +
        `${ADDR}=${addr}&` +
        `${ADDR_DETAIL}=${addrDetail}&` +
        `${IS_NEW_ADDR}=${isNewAddr}&` +
        `${ADDR_NOM}=${shippingAddressName}&` +
        `${MEMO_CNT}=${memoCnt}&` +
        `${PROCT_CODE}=${proctCode}&` +
        `${PROCT_NOM}=${proctNom}&` +
        `${PROCT_BRN}=${proctBrn}&` +
        `${RWD_USE_AMT}=${rwdUseAmt}&` +
        `${SHP_FEE}=${shpFee}&` +
        `${PG_PROVIDER}=${pgCode}&` +
        `${SKU_CODE}=${skuCode}&` +
        `${PROCT_OPT_AMT}=${proctOptAmt}&` +
        `${PROCT_OPT_QTY}=${proctOptQty}&` +
        `${PROCT_OPT_NOM}=${proctOptNom}&` +
        `${TOT_AMOUNT}=${totalAmount}&` +
        `${SPENT_AMOUNT}=${spentAmount}&`,
    };

    IMP.request_pay(data, callback);
  }

  async function callback(rsp: RequestPayResponse) {
    const { success, error_msg } = rsp;

    const impUid = rsp.imp_uid;
    const pgTid = rsp.pg_tid || '';

    paymentVerifyUtil(
      navigate,
      impUid,
      success,
      error_msg || '',
      pgTid,
      spentAmount,
      totalAmount,
      rwdUseAmt,
      pgCode,
      shpFee,
      proctCode,
      proctNom,
      proctBrn,
      skuCode,
      proctOptAmt,
      proctOptQty,
      proctOptNom,
      rcpntNom,
      cntctNum,
      addr,
      addrDetail,
      zipCode,
      memoCnt,
      isNewAddr === TRUE_STRING ? true : false,
      shippingAddressName,
    );
  }

  return (
    <div>
      {memoCnt !== '' && addrDetail !== '' && pgCode !== '' ? (
        <PaymentBtn onClick={requestPay}>
          {spentAmount?.toLocaleString()}원 결제하기{' '}
        </PaymentBtn>
      ) : (
        <NonePaymentBtn>
          {spentAmount?.toLocaleString()}원 결제하기{' '}
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
