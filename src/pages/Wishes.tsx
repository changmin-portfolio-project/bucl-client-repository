import React from 'react';
import styled from 'styled-components';
import TabBar from '../conponents/TabBar';
import Body from '../conponents/wish/Body';
import Header from '../conponents/wish/Header';

const WishesPage: React.FC = () => {
  const openPopup = (url: string) => {
    window.open(url, '_blank', 'width=400,height=800');
    // '_blank'은 새 창에 열기, 'width'와 'height'는 창의 크기를 지정합니다.
  };
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
