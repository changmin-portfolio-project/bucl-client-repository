import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ColoredButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const ColoredButton: React.FC<ColoredButtonProps> = ({ children, onClick }) => {
  return (
    <ColoredBtn onClick={() => onClick && onClick()}>{children}</ColoredBtn>
  );
};

const ColoredBtn = styled.button`
  padding: 10px 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  cursor: pointer;
  color: white;
  a {
    color: white;
  }
`;

export default ColoredButton;
