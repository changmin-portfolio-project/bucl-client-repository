import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../conponents/order/Header';
import Body from '../conponents/order/Body';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
