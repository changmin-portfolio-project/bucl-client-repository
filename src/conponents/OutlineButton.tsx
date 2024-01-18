import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface OutlineButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, onClick }) => {
  return <OutlineBtn onClick={onClick}>{children}</OutlineBtn>;
};

const OutlineBtn = styled.button`
  padding: 10px 30px;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  cursor: pointer;
  color: ${({ theme }) => theme.mainColor.Orange5};
  a {
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

export default OutlineButton;
