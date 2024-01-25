import React from 'react';
import Introduction from './body/Introduction';
import MenuTab from './body/MenuTab';
import SecessionBtn from './body/SecessionBtn';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <Introduction />
      <MenuTab />
      <SecessionBtn />
    </BodyLayout>
  );
};

export default Body;
