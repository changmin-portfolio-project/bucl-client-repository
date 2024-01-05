import React from 'react';
import HeaderLayout from '../../layout/HeaderLayout';
import styled from 'styled-components';
import AddrPrevBtn from './header/AddrPrevBtn';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <Title>
        <AddrPrevBtn />
        배송지 등록/수정
      </Title>
    </HeaderLayout>
  );
};

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default Header;
