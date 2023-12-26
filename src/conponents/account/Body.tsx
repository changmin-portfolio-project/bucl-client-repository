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

const BodyContainer = styled.main`
  padding: 57px 7%;
`;

export default Body;
