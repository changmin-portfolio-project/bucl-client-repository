import React from 'react';
import HeaderLayout from '../layout/HeaderLayout';
import { NAVIGATION_BACK } from '../../const/AppVars';

const Header: React.FC = () => {
  return (
    <HeaderLayout text="상품 정보" isApp={true} to="" type={NAVIGATION_BACK} />
  );
};

export default Header;
