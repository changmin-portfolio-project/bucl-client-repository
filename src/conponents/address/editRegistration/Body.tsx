import React from 'react';
import styled from 'styled-components';
import RegisterAddressButton from './body/RegisterAddressButton';
import EditRegister from './body/EditRegister';
import AddressSearchPopup from './body/AddressSearchPopup';
import DefaultCheckBox from './body/DefaultCheckBox';

const Body: React.FC = () => {
  return (
    <>
      <BodyContainer>
        <EditRegister />
        <StyleRegWrap>
          <DefaultCheckBox />
          <RegisterAddressButton />
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
