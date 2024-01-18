import React from 'react';
import styled from 'styled-components';

interface TextButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const TextButton: React.FC<TextButtonProps> = ({
  onClick,
  children,
  style,
}) => {
  return (
    <TextBtn style={style} onClick={onClick}>
      {children}
    </TextBtn>
  );
};

const TextBtn = styled.button`
  background-color: transparent;
  border: none;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
  a {
    color: ${({ theme }) => theme.grey.Grey5};
  }
`;

export default TextButton;
