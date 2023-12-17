import React from 'react';
import styled from 'styled-components';
import Header from '../conponents/order/Header';
import Body from '../conponents/order/Body';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default HomePage;
