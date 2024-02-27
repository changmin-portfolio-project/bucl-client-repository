import React from 'react';
import styled from 'styled-components';
import Body from '../../conponents/OrderComplete/Body';

const OrderCompletePage: React.FC = () => {
  return (
    <Container>
      <Body />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default OrderCompletePage;
