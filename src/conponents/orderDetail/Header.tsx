import React from 'react';
import HeaderLayout from '../layout/HeaderLayout';
import styled from 'styled-components';
import PrevButton from '../PrevButton';

const Header: React.FC = () => {
  const HeaderLayoutStyle: React.CSSProperties = {
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <Title>
        <PrevButton isApp={true} />
        주문 상세보기
      </Title>
    </HeaderLayout>
  );
};

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default Header;
