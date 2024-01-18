import React from 'react';
import styled from 'styled-components';
import Body from '../../conponents/myOrder/Body';
import TabBar from '../../conponents/TabBar';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const MyOrdersPage: React.FC = () => {
  return (
    <MyOrdersPageContainer>
      <HeaderLayout text="주문 내역" />
      <Body />
      <TabBar />
    </MyOrdersPageContainer>
  );
};

const MyOrdersPageContainer = styled.div``;

export default MyOrdersPage;
