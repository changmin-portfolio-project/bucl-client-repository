import React from 'react';
import styled from 'styled-components';
import PrevBtn from '../PrevBtn';

interface HeaderLayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  text?: string;
  isApp?: boolean;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  style,
  children,
  text,
  isApp = false,
}) => {
  return (
    <HeaderLayoutContainer style={style}>
      {children ? (
        children
      ) : (
        <Title>
          <PrevBtn isApp={isApp} />
          {text}
        </Title>
      )}
    </HeaderLayoutContainer>
  );
};

const HeaderLayoutContainer = styled.header`
  position: fixed;
  max-width: 600px;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 0 6px 0;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  font-weight: 500;
  padding-bottom: 6px;
`;

export default HeaderLayout;
