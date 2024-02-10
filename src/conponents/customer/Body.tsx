import React from 'react';
import Introduction from './body/Introduction';
import MenuTab from './body/MenuTab';
import SecessionButton from './body/SecessionButton';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <Introduction />
      <MenuTab />
      <SecessionButton />
    </BodyLayout>
  );
};

export default Body;
