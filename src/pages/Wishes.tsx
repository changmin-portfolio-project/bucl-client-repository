import React from 'react';
import styled from 'styled-components';
import TabBar from '../conponents/TabBar';
import Body from '../conponents/wish/Body';
import Header from '../conponents/wish/Header';

const WishesPage: React.FC = () => {
  return (
    <WishesPageContainer>
      <Header />
      <Body />
      <TabBar />
    </WishesPageContainer>
  );
};

const WishesPageContainer = styled.div``;

export default WishesPage;
