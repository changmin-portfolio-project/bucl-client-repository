import React from 'react';
import styled from 'styled-components';
// import EditRegister from './body/EditRegister';
import AddressSearchPopup from '../../AddressSearchPopup';
import OrdAddrAddButton from './OrdAddrAddButton';

const Body: React.FC = () => {
  return (
    <>
      <BodyContainer>
        {/* <EditRegister /> */}
        <StyleRegWrap>
          <OrdAddrAddButton />
        </StyleRegWrap>
      </BodyContainer>
      <AddressSearchPopup />
    </>
  );
};

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 6% 72px 6%;
  height: calc(100vh - 32px);
`;

const StyleRegWrap = styled.div`
  margin-bottom: 10%;
`;

export default Body;
