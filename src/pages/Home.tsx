import React from 'react';
import TabBar from '../conponents/TabBar';
import styled from 'styled-components';
import Header from '../conponents/home/Header';
import TopBtn from '../conponents/TopBtn';
import Body from '../conponents/home/Body';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
      <TabBar />
      <TopBtn />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default HomePage;
