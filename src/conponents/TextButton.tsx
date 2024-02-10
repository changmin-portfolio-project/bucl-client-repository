import React from 'react';
import styled from 'styled-components';

interface TextButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  font?: string;
  color?: string;
}

const TextButton: React.FC<TextButtonProps> = ({
  onClick,
  children,
  style,
  font,
  color,
}) => {
  return (
    <TextBtn
      style={style}
      onClick={onClick}
      $font={font ? font : ''}
      $color={color ? color : ''}
    >
      {children}
    </TextBtn>
  );
};

const TextBtn = styled.button<{ $font: string; $color: string }>`
  background-color: transparent;
  border: none;
  /* font 변경 부분 */
  font: ${(props) =>
    props.$font
      ? ({ theme }) => theme.fontSizes[props.$font]
      : ({ theme }) => theme.fontSizes.Subhead2};
  /* color 변경 부분 */
  color: ${(props) => {
    if (props.$color.includes('Orange'))
      return ({ theme }) => theme.mainColor[props.$color];
    else return ({ theme }) => theme.grey.Grey5;
  }};
  a {
    /* a태그 color 변경 부분 */
    color: ${(props) => {
      if (props.$color.includes('Orange'))
        return ({ theme }) => theme.mainColor[props.$color];
      else return ({ theme }) => theme.grey.Grey5;
    }};
  }
`;

export default TextButton;
