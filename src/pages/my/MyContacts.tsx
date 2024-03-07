import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../../conponents/customer/Body';
import { useRecoilValue } from 'recoil';
import { withdrawCompleteAtom } from '../../states/customerAtom';
import Complete from '../../conponents/customer/Complete';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const MyContactsPage: React.FC = () => {
  const withdrawComplete = useRecoilValue(withdrawCompleteAtom);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <MyContactsPageContainer>
      {withdrawComplete ? (
        <Complete />
      ) : (
        <>
          <HeaderLayout text="고객센터" />
          <Body />
        </>
      )}
    </MyContactsPageContainer>
  );
};

const MyContactsPageContainer = styled.div``;

export default MyContactsPage;
