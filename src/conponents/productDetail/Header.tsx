import React from 'react';
import styled from 'styled-components';
import PrevBtn from '../PrevBtn';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>
        <PrevBtn />
        상품 정보
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
  /* position: relative; */
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default Header;
