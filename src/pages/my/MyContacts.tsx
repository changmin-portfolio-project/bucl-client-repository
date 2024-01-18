import React from 'react';
import styled from 'styled-components';
import TabBar from '../../conponents/TabBar';
import Body from '../../conponents/customer/Body';
import { useRecoilValue } from 'recoil';
import { withdrawCompleteAtom } from '../../states/customerAtom';
import Complete from '../../conponents/customer/Complete';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const MyContactsPage: React.FC = () => {
  const withdrawComplete = useRecoilValue(withdrawCompleteAtom);
  return (
    <MyContactsPageContainer>
      {withdrawComplete ? (
        <Complete />
      ) : (
        <>
          <HeaderLayout text="고객센터" />
          <Body />
          <TabBar />
        </>
      )}
    </MyContactsPageContainer>
  );
};

const MyContactsPageContainer = styled.div``;

export default MyContactsPage;
