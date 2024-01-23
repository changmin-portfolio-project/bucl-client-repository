import React from 'react';
import PrevBtn from '../PrevBtn';
import styled from 'styled-components';
import HeaderLayout from '../layout/HeaderLayout';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <Title>
        <PrevBtn />
        구매 후기
      </Title>
    </HeaderLayout>
  );
};

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  padding-bottom: 6px;
`;

export default Header;
