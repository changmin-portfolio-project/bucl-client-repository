import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface OutlineButtonProps {
  children?: ReactNode;
  onClick?: (orderCode?: string) => void | undefined;
  font: string;
  border: string;
  color: string;
  style?: React.CSSProperties;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  onClick,
  font,
  border,
  color,
  style,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <OutlineBtn
      onClick={handleClick}
      $font={font ? font : ''}
      $border={border ? border : ''}
      $color={color ? color : ''}
      style={style}
    >
      {children}
    </OutlineBtn>
  );
};

const OutlineBtn = styled.button<{
  $font: string;
  $border: string;
  $color: string;
}>`
  padding: 10px 30px;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;

  /* border 변경 부분 */
  border: 1px solid
    ${(props) => {
      if (props.$border.includes('Orange'))
        return ({ theme }) =>
          theme.mainColor[props.$border as keyof DefaultTheme['mainColor']];
      else
        return ({ theme }) =>
          theme.grey[props.$border as keyof DefaultTheme['grey']];
    }};

  /* font 변경 부분 */
  font: ${(props) =>
    ({ theme }) =>
      theme.fontSizes[props.$font as keyof DefaultTheme['fontSizes']]};

  /* color 변경 부분 */
  color: ${(props) => {
    if (props.$color.includes('Orange'))
      return ({ theme }) =>
        theme.mainColor[props.$color as keyof DefaultTheme['mainColor']];
    else if (props.$color.includes('Grey'))
      return ({ theme }) =>
        theme.grey[props.$color as keyof DefaultTheme['grey']];
    else if (props.$color === 'black') return 'black';
    else return 'white';
  }};

  a {
    /* a태그 color 변경 부분 */
    color: ${(props) => {
      if (props.$color.includes('Orange'))
        return ({ theme }) =>
          theme.mainColor[props.$color as keyof DefaultTheme['mainColor']];
      else if (props.$color.includes('Grey'))
        return ({ theme }) =>
          theme.grey[props.$color as keyof DefaultTheme['grey']];
      else if (props.$color === 'black') return 'black';
      else return 'white';
    }};
  }
`;

export default OutlineButton;
