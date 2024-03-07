import React from 'react';
import styled from 'styled-components';
import { ORD_PAY_DATA } from '../../../../const/SessionStorageVars';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import { useRecoilValue } from 'recoil';
import { rwdUseAmtAtom } from '../../../../states/rewardAtom';

const OrderPaymentAmt: React.FC = () => {
  /** 바꿈 */
  const orderPaymentData: OrderPaymentType = JSON.parse(
    sessionStorage.getItem(ORD_PAY_DATA) || '{}',
  );

  const rwdUseAmt = useRecoilValue(rwdUseAmtAtom);

  return (
    <StyledOrdPymtAmtCont>
      <PymtTtlAmtCont>
        <PymtTtlAmtTtlItem>총 결제 금액</PymtTtlAmtTtlItem>
        <PymtTtlAmtItem>
          {(orderPaymentData.ordTotAmt - rwdUseAmt)?.toLocaleString()}원
        </PymtTtlAmtItem>
      </PymtTtlAmtCont>
      <PymtSubAmtCont>
        <PaymentBody2>총 상품 금액</PaymentBody2>
        <PaymentBody2>
          {orderPaymentData.totProcAmt?.toLocaleString()}원
        </PaymentBody2>
      </PymtSubAmtCont>
      <PymtSubAmtCont>
        <PaymentBody2>상품 할인</PaymentBody2>
        <PaymentBody2>
          -
          {(
            orderPaymentData.totProcAmt - orderPaymentData.ordTotAmt
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
        <PaymentBody2>
          {orderPaymentData.shpFee?.toLocaleString()}원
        </PaymentBody2>
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
