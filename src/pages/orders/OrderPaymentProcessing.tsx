import React from 'react';
import styled from 'styled-components';
import OrderPaymentProcessingBody from '../../conponents/OrderPaymentProcessing/OrderPaymentProcessingBody';

const OrderPaymentProcessingProcessingPage: React.FC = () => {
  return (
    <Container>
      <OrderPaymentProcessingBody />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default OrderPaymentProcessingProcessingPage;
