import React from 'react';
import styled from 'styled-components';
import Introduction from './body/Introduction';
import MenuTab from './body/MenuTab';
import SecessionBtn from './body/SecessionBtn';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <Introduction />
      <MenuTab />
      <SecessionBtn />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 60px 0;
`;

export default Body;
