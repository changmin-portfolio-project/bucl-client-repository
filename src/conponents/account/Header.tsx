import React from 'react';
import HeaderLayout from '../layout/HeaderLayout';
import PrevButton from '../PrevButton';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <PrevButton />
    </HeaderLayout>
  );
};

export default Header;
