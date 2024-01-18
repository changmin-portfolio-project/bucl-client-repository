import React from 'react';
import styled from 'styled-components';
import Body from '../conponents/order/Body';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const HomePage: React.FC = () => {
  return (
    <Container>
      <HeaderLayout text="주문 / 결제" />
      <Body />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default HomePage;
