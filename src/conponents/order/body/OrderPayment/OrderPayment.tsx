import React from 'react';
import styled from 'styled-components';
import OrderPaymentAmt from './OrderPaymentAmt';
import OrderPaymentMethod from './OrderPaymentMethod';
import OrderPaymentProcess from './OrderPaymentProcess';

const OrderPayment: React.FC = () => {
  return (
    <StyledOrdPymtCont>
      <OrderPaymentAmt />
      <OrderPaymentMethod />
      <OrderPaymentProcess />
    </StyledOrdPymtCont>
  );
};

const StyledOrdPymtCont = styled.div``;

export default OrderPayment;
