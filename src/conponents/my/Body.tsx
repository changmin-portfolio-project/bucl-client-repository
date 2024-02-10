import React from 'react';
import MyInfo from './body/MyInfo';
import MenuTab from './body/MenuTab';
import LogoutButton from './body/LogoutButton';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <MyInfo />
      <MenuTab />
      <LogoutButton />
    </BodyLayout>
  );
};

export default Body;
