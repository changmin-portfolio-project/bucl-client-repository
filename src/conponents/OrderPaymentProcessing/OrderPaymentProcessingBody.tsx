import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  ADDR,
  ADDR_DETAIL,
  ADDR_NOM,
  CNTCT_NUM,
  IS_NEW_ADDR,
  MEMO_CNT,
  MERCHANT_UID,
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
import { getMobilePgTid, paymentVerifyUtil } from '../../utils/PaymentUtil';
import { TRUE_STRING } from '../../const/SessionStorageVars';
import { EMPTY_VALUE } from '../../const/ValueVar';
import {
  ERROR_MSG_NAME,
  IMP_SUCCESS_NAME,
  IMP_UID_NAME,
} from '../../const/IamportVars';

const OrderPaymentProcessingBody: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const impUid = searchParams.get(IMP_UID_NAME);
  const success: boolean =
    searchParams.get(IMP_SUCCESS_NAME) === TRUE_STRING ? true : false;
  const error_msg: string =
    searchParams.get(ERROR_MSG_NAME) || '오류가 발생했습니다.';
  const pgTid: string = getMobilePgTid();

  const rwdUseAmt: number = Number(searchParams.get(RWD_USE_AMT));
  const pgCode: string = searchParams.get(PG_PROVIDER) || EMPTY_VALUE;
  const memoCnt: string = searchParams.get(MEMO_CNT) || EMPTY_VALUE;
  const addrDetail: string = searchParams.get(ADDR_DETAIL) || EMPTY_VALUE;

  const isNewAddr: boolean =
    searchParams.get(IS_NEW_ADDR) === TRUE_STRING ? true : false;

  const proctCode: number = Number(searchParams.get(PROCT_CODE));
  const proctNom: string = searchParams.get(PROCT_NOM) || EMPTY_VALUE;
  const proctBrn: string = searchParams.get(PROCT_BRN) || EMPTY_VALUE;
  const skuCode: number = Number(searchParams.get(SKU_CODE));
  const proctOptAmt: number = Number(searchParams.get(PROCT_OPT_AMT));
  const proctOptQty: number = Number(searchParams.get(PROCT_OPT_QTY));
  const proctOptNom: string = searchParams.get(PROCT_OPT_NOM) || EMPTY_VALUE;
  const rcpntNom: string = searchParams.get(RCPNT_NOM) || EMPTY_VALUE;
  const cntctNum: string = searchParams.get(CNTCT_NUM) || EMPTY_VALUE;
  const addr: string = searchParams.get(ADDR) || EMPTY_VALUE;
  const zipCode: string = searchParams.get(ZIP_CODE) || EMPTY_VALUE;
  const shippingAddressName: string = searchParams.get(ADDR_NOM) || EMPTY_VALUE;
  const shpFee: number = Number(searchParams.get(SHP_FEE));

  const totalAmount: number = Number(searchParams.get(TOT_AMOUNT));
  const spentAmount: number = Number(searchParams.get(SPENT_AMOUNT));

  const merchantUid: string = searchParams.get(MERCHANT_UID) || EMPTY_VALUE;

  useEffect(() => {
    paymentVerifyUtil(
      navigate,
      impUid,
      success,
      error_msg || '',
      pgTid,
      merchantUid,
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
