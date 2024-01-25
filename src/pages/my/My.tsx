import React from 'react';
import styled from 'styled-components';
import TabBar from '../../conponents/TabBar';
import Body from '../../conponents/my/Body';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const MyPage: React.FC = () => {
  return (
    <MyPageContainer>
      <HeaderLayout text="마이페이지" />
      <Body />
      <TabBar />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div``;

export default MyPage;
