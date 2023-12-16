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
<<<<<<< HEAD
  padding: 50px 0 90px 0; // padding: 90px 0 90px 0;
=======
  padding: 70px 0 90px 0; // padding: 90px 0 90px 0;
>>>>>>> 9371aa05f03891dfbea406d5bf381b9262b7bec4
`;

export default Body;
