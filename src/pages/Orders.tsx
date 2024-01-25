import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/order/Body';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
