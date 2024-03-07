import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  ADDR,
  ADDR_DETAIL,
  ADDR_NOM,
  CNTCT_NUM,
  IS_NEW_ADDR,
  MEMO_CNT,
  PG_PROVIDER,
  PROCT_BRN,
  PROCT_CODE,
  PROCT_NOM,
  PROCT_OPT_AMT,
  PROCT_OPT_NOM,
  PROCT_OPT_QTY,
  RCPNT_NOM,
  RWD_USE_AMT,
  SHP_FEE,
  SKU_CODE,
  SPENT_AMOUNT,
  TOT_AMOUNT,
  ZIP_CODE,
} from '../../const/CookieVars';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { paymentVerifyUtil } from '../../utils/PaymentUtil';

const OrderPaymentProcessingBody: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const impUid = searchParams.get('imp_uid');
  const success: boolean =
    searchParams.get('imp_success') === 'true' ? true : false;
  const error_msg: string = searchParams.get('errorMsg') || '{}';
  const pgTid: string = 'mobile-merchant';

  const rwdUseAmt: number = Number(searchParams.get(RWD_USE_AMT));
  const pgCode: string = searchParams.get(PG_PROVIDER) || '{}';
  const memoCnt: string = searchParams.get(MEMO_CNT) || '{}';
  const addrDetail: string = searchParams.get(ADDR_DETAIL) || '{}';

  const isNewAddr: boolean =
    searchParams.get(IS_NEW_ADDR) === 'true' ? true : false;

  const proctCode: number = Number(searchParams.get(PROCT_CODE));
  const proctNom: string = searchParams.get(PROCT_NOM) || '{}';
  const proctBrn: string = searchParams.get(PROCT_BRN) || '{}';
  const skuCode: number = Number(searchParams.get(SKU_CODE));
  const proctOptAmt: number = Number(searchParams.get(PROCT_OPT_AMT));
  const proctOptQty: number = Number(searchParams.get(PROCT_OPT_QTY));
  const proctOptNom: string = searchParams.get(PROCT_OPT_NOM) || '{}';
  const rcpntNom: string = searchParams.get(RCPNT_NOM) || '{}';
  const cntctNum: string = searchParams.get(CNTCT_NUM) || '{}';
  const addr: string = searchParams.get(ADDR) || '{}';
  const zipCode: string = searchParams.get(ZIP_CODE) || '{}';
  const shippingAddressName: string = searchParams.get(ADDR_NOM) || '{}';
  const shpFee: number = Number(searchParams.get(SHP_FEE));

  const totalAmount: number = Number(searchParams.get(TOT_AMOUNT));
  const spentAmount: number = Number(searchParams.get(SPENT_AMOUNT));

  useEffect(() => {
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
      isNewAddr,
      shippingAddressName,
    );
  }, []);
  return <PaymentTitle>결제 처리중...</PaymentTitle>;
};

const PaymentTitle = styled.div`
  font: ${({ theme }) => theme.fontSizes.Display1};
  position: fixed;
  top: 43%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export default OrderPaymentProcessingBody;
