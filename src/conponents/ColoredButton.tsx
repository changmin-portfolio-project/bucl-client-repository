import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface ColoredButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  font?: string;
  color?: string;
  backgroundColor?: string;
}

const ColoredButton: React.FC<ColoredButtonProps> = ({
  children,
  onClick,
  style,
  color,
  font,
  backgroundColor,
}) => {
  return (
    <ColoredBtn
      onClick={() => onClick && onClick()}
      style={style}
      $font={font ? font : ''}
      $color={color ? color : ''}
      $backgroundColor={backgroundColor ? backgroundColor : ''}
    >
      {children}
    </ColoredBtn>
  );
};

const ColoredBtn = styled.button<{
  $font: string;
  $color: string;
  $backgroundColor: string;
}>`
  padding: 10px 30px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* background-color 변경 부분 */
  background-color: ${(props) => {
    if (props.$backgroundColor.includes('Grey'))
      return ({ theme }) =>
        theme.grey[props.$backgroundColor as keyof DefaultTheme['grey']];
    else if (props.$backgroundColor === 'white') return 'white';
    else return ({ theme }) => theme.mainColor.Orange5;
  }};

  /* font 변경 부분 */
  font: ${(props) =>
    ({ theme }) =>
      theme.fontSizes[props.$font as keyof DefaultTheme['fontSizes']]};

  /* color 변경 부분 */
  color: ${(props) => {
    if (props.$color.includes('Grey'))
      return ({ theme }) =>
        theme.grey[props.$color as keyof DefaultTheme['grey']];
    else if (props.$color.includes('Orange'))
      return ({ theme }) =>
        theme.mainColor[props.$color as keyof DefaultTheme['mainColor']];
    else if (props.$color === 'black') return 'black';
    else return 'white';
  }};

  a {
    /* a태그 color 변경 부분 */
    color: ${(props) => {
      if (props.$color.includes('Grey'))
        return ({ theme }) =>
          theme.grey[props.$color as keyof DefaultTheme['grey']];
      else if (props.$color.includes('Orange'))
        return ({ theme }) =>
          theme.mainColor[props.$color as keyof DefaultTheme['mainColor']];
      else if (props.$color === 'black') return 'black';
      else return 'white';
    }};
  }
`;

export default ColoredButton;
