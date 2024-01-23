import React from 'react';
import styled from 'styled-components';
import Body from '../../conponents/myOrder/Body';
import Header from '../../conponents/myOrder/Header';
import TabBar from '../../conponents/TabBar';

const MyOrdersPage: React.FC = () => {
  return (
    <MyOrdersPageContainer>
      <Header />
      <Body />
      <TabBar />
    </MyOrdersPageContainer>
  );
};

const MyOrdersPageContainer = styled.div``;

export default MyOrdersPage;
