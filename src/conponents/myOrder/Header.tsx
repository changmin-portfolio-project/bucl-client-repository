import React from 'react';
import styled from 'styled-components';
import PrevBtn from '../PrevBtn';
import HeaderLayout from '../layout/HeaderLayout';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    alignItems: 'flex-end',
    justifyContent: 'center',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <Title>
        <PrevBtn />
        주문 내역
      </Title>
    </HeaderLayout>
  );
};

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default Header;
