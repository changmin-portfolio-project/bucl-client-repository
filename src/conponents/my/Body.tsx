import React from 'react';
import styled from 'styled-components';
import MyInfo from './body/MyInfo';
import MenuTab from './body/MenuTab';
import LogoutBtn from './body/LogoutBtn';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <MyInfo />
      <MenuTab />
      <LogoutBtn />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding-top: 57px;
`;

export default Body;
