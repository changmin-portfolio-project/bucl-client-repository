import React, { useEffect } from 'react';
import TabBar from '../conponents/TabBar';
import styled from 'styled-components';
import Header from '../conponents/home/Header';
import Body from '../conponents/home/Body';
import HomeTopBtn from '../conponents/home/HomeTopBtn';
import { HOME_INF_POS_NAME } from '../const/Pagenation';

const HomePage: React.FC = () => {
  useEffect(() => {
    const homeInfContainer = document.getElementById(HOME_INF_POS_NAME);
    const homeInfPos = sessionStorage.getItem(HOME_INF_POS_NAME);
    if (homeInfPos !== null && homeInfContainer !== null) {
      homeInfContainer.scrollTo({ top: parseInt(homeInfPos) });
    }
  }, []);
  return (
    <Container>
      <Header />
      <Body />
      <TabBar />
      <HomeTopBtn />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  touch-action: none;
`;

export default HomePage;
