import React from 'react';
import styled from 'styled-components';
import NotSelectOrdAddrButton from './body/NotSelectOrdAddrButton';
import OrdAddrList from './body/OrdAddrList';
import { useRecoilState } from 'recoil';

import OrdAddrSelectButton from './body/OrdAddrSelectButton';
import { crntOrdAddrNumAtom } from '../../states/orderAtom';

const Body: React.FC = () => {
  const [crntOrdAddrNum] = useRecoilState(crntOrdAddrNumAtom);

  return (
    <BodyContainer>
      <OrdAddrList />
      <StyleRegWrap onClick={(e) => e.stopPropagation()}>
        {crntOrdAddrNum ? <OrdAddrSelectButton /> : <NotSelectOrdAddrButton />}
      </StyleRegWrap>
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 6%;
  // height: calc(100vh - 32px);
`;

const StyleRegWrap = styled.div`
  margin-bottom: 10%;
`;

export default Body;
