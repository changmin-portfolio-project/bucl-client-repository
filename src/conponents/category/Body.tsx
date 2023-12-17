import React from 'react';
import styled from 'styled-components';
import CategoryProducts from './body/CategoryProducts';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <CategoryProducts />
    </BodyContainer>
  );
};

const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 70px 0 90px 0; // padding: 90px 0 90px 0;
`;

export default Body;
