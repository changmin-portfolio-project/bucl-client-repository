import React from 'react';
import styled from 'styled-components';
import TabBar from '../conponents/TabBar';
import Body from '../conponents/wish/Body';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const WishesPage: React.FC = () => {
  return (
    <WishesPageContainer>
      <HeaderLayout text="찜 목록" />
      <Body />
      <TabBar />
    </WishesPageContainer>
  );
};

const WishesPageContainer = styled.div``;

export default WishesPage;
