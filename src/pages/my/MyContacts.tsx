import React from 'react';
import styled from 'styled-components';
import TabBar from '../../conponents/TabBar';
import Header from '../../conponents/customer/Header';
import Body from '../../conponents/customer/Body';

const MyContactsPage: React.FC = () => {
  return (
    <MyContactsPageContainer>
      <Header />
      <Body />
      <TabBar />
    </MyContactsPageContainer>
  );
};

const MyContactsPageContainer = styled.div``;

export default MyContactsPage;
