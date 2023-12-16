import React from 'react';
import PrevBtn from '../PrevBtn';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>
        <PrevBtn />
        구매 후기
      </Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  max-width: 600px;
  z-index: 999;
  top: 0;
  padding: 5vh 0 6px 0;
  width: 100%;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default Header;
