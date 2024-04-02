import React from 'react';
import BuclLogo from '../BuclLogo';
import CategoriesNav from './header/CategoriesNav';
import Point from './header/Point';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BuclLogo />
      <CategoriesNav />
      <Point />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  max-width: 500px;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0 6px 0;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

export default Header;
