import React from 'react';
import styled from 'styled-components';

interface PopupLayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
}
const PopupLayout: React.FC<PopupLayoutProps> = ({ style, children }) => {
  return <PopupLayoutContainer style={style}>{children}</PopupLayoutContainer>;
};

const PopupLayoutContainer = styled.header`
  position: fixed;
  max-width: 600px;
  z-index: 999;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export default PopupLayout;
