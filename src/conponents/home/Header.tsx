import React from 'react';
import BuclLogo from '../BuclLogo';
import CategoriesNav from './header/CategoriesNav';
import Point from './header/Point';
import HeaderLayout from '../layout/HeaderLayout';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <BuclLogo />
      <CategoriesNav />
      <Point />
    </HeaderLayout>
  );
};

export default Header;
