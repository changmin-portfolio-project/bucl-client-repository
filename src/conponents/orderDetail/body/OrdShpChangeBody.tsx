import React from 'react';
import styled from 'styled-components';
import ModifyShpAddressButton from './RegisterAddressButton';
import OrdShpChange from './OrdShpChange';
import AddressSearchPopup from '../../AddressSearchPopup';

const OrdShpChangeBody: React.FC = () => {
  return (
    <>
      <BodyContainer>
        <OrdShpChange />
        <StyleRegWrap>
          <ModifyShpAddressButton />
        </StyleRegWrap>
      </BodyContainer>
      <AddressSearchPopup />
    </>
  );
};

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 6%;
`;

const StyleRegWrap = styled.div`
  margin-bottom: 10%;
`;

export default OrdShpChangeBody;
