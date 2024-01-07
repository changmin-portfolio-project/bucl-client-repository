import React from 'react';
import styled from 'styled-components';
import Withdrawal from './body/Withdrawal';
import PointHistory from './body/PointHistory';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <Withdrawal />
      <PointHistory />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 0 72px 0;
`;

export default Body;
