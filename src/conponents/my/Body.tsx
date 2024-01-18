import React from 'react';
import MyInfo from './body/MyInfo';
import MenuTab from './body/MenuTab';
import LogoutBtn from './body/LogoutBtn';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <MyInfo />
      <MenuTab />
      <LogoutBtn />
    </BodyLayout>
  );
};

export default Body;
