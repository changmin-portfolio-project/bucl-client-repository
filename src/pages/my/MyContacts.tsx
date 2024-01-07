import React from 'react';
import styled from 'styled-components';
import TabBar from '../../conponents/TabBar';
import Header from '../../conponents/customer/Header';
import Body from '../../conponents/customer/Body';
import { useRecoilValue } from 'recoil';
import { withdrawCompleteAtom } from '../../states/customerAtom';
import Complete from '../../conponents/customer/Complete';

const MyContactsPage: React.FC = () => {
  const withdrawComplete = useRecoilValue(withdrawCompleteAtom);
  return (
    <MyContactsPageContainer>
      {withdrawComplete ? (
        <Complete />
      ) : (
        <>
          <Header />
          <Body />
          <TabBar />
        </>
      )}
    </MyContactsPageContainer>
  );
};

const MyContactsPageContainer = styled.div``;

export default MyContactsPage;
