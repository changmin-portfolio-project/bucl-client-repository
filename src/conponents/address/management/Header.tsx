import React from 'react';
import HeaderLayout from '../../layout/HeaderLayout';
import PrevBtn from '../../PrevBtn';
import styled from 'styled-components';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <Title>
        <PrevBtn />
        배송지 관리
      </Title>
    </HeaderLayout>
  );
};

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default Header;
