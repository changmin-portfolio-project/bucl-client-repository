import React from 'react';
import styled from 'styled-components';

interface HeaderLayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ style, children }) => {
  return (
    <HeaderLayoutContainer style={style}>{children}</HeaderLayoutContainer>
  );
};

const HeaderLayoutContainer = styled.header`
  position: fixed;
  max-width: 600px;
  top: 0;
  z-index: 999;
  display: flex;
  padding: 10px 0 6px 0;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

export default HeaderLayout;
