import React from 'react';
import CategoryProducts from './body/CategoryProducts';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <CategoryProducts />
    </BodyLayout>
  );
};

export default Body;
