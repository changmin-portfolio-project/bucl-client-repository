import React from 'react';
import HeaderLayout from '../layout/HeaderLayout';
import PrevBtn from '../PrevBtn';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <PrevBtn />
    </HeaderLayout>
  );
};

export default Header;
