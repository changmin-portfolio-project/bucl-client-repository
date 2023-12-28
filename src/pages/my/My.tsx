import React from 'react';
import styled from 'styled-components';
import TabBar from '../../conponents/TabBar';
import Header from '../../conponents/my/Header';
import Body from '../../conponents/my/Body';

const MyPage: React.FC = () => {
  return (
    <MyPageContainer>
      <Header />
      <Body />
      <TabBar />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div``;

export default MyPage;
