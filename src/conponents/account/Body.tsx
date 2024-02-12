import React from 'react';
import styled from 'styled-components';
import RegisterAccount from './body/RegisterAccount';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <RegisterAccount />
    </BodyContainer>
  );
};

const BodyContainer = styled.main``;

export default Body;
