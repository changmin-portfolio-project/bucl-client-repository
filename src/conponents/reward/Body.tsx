import React from 'react';
import Withdrawal from './body/Withdrawal';
import PointHistory from './body/PointHistory';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <Withdrawal />
      <PointHistory />
    </BodyLayout>
  );
};

export default Body;
