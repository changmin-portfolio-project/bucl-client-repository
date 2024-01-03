import React from 'react';
import styled from 'styled-components';
import Body from '../../conponents/myOrder/Body';
import Header from '../../conponents/myOrder/Header';

const MyOrdersPage: React.FC = () => {
  return (
    <MyOrdersPageContainer>
      <Header />
      <Body />
    </MyOrdersPageContainer>
  );
};

const MyOrdersPageContainer = styled.div``;

export default MyOrdersPage;
