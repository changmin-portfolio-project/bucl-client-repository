import React from 'react';
import { Cookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rwdUseAmtAtom } from '../../../../states/rewardAtom';
import {
  ORD_TOT_AMT,
  SHP_FEE,
  TOT_PROCT_AMT,
} from '../../../../const/CookieVars';

const OrderPaymentAmt: React.FC = () => {
  const cookies = new Cookies();
  const rwdUseAmt = useRecoilValue(rwdUseAmtAtom);
  return (
    <StyledOrdPymtAmtCont>
      <PymtTtlAmtCont>
        <PymtTtlAmtTtlItem>총 결제 금액</PymtTtlAmtTtlItem>
        <PymtTtlAmtItem>
          {(cookies.get(ORD_TOT_AMT) - rwdUseAmt)?.toLocaleString()}원
        </PymtTtlAmtItem>
      </PymtTtlAmtCont>
      <PymtSubAmtCont>
        <PaymentBody2>총 상품 금액</PaymentBody2>
        <PaymentBody2>
          {cookies.get(TOT_PROCT_AMT)?.toLocaleString()}원
        </PaymentBody2>
      </PymtSubAmtCont>
      <PymtSubAmtCont>
        <PaymentBody2>상품 할인</PaymentBody2>
        <PaymentBody2>
          -
          {(
            cookies.get(TOT_PROCT_AMT) - cookies.get(ORD_TOT_AMT)
          )?.toLocaleString()}
          원
        </PaymentBody2>
      </PymtSubAmtCont>
      <PymtSubAmtCont>
        <PaymentBody2>포인트 할인</PaymentBody2>
        <PaymentBody2>-{rwdUseAmt?.toLocaleString()}원</PaymentBody2>
      </PymtSubAmtCont>
      <PymtSubAmtCont>
        <PaymentBody2>배송비</PaymentBody2>
        <PaymentBody2>{cookies.get(SHP_FEE)?.toLocaleString()}원</PaymentBody2>
      </PymtSubAmtCont>
    </StyledOrdPymtAmtCont>
  );
};

const StyledOrdPymtAmtCont = styled.div`
  padding: 0 20px 20px 20px;
  border-bottom: 10px solid #eaecef;
`;

const PymtTtlAmtCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 9px 0 13px 0;
`;

const PymtSubAmtCont = styled.div`
  color: var(--grey-5, #acb5bd);
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const PymtTtlAmtTtlItem = styled.div`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

const PymtTtlAmtItem = styled.div`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

const PaymentBody2 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding-bottom: 2px;
`;

export default OrderPaymentAmt;
