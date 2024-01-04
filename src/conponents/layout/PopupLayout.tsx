import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { searchPopupVisibleAtom } from '../../states/addressAtom';

interface PopupLayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const PopupLayout: React.FC<PopupLayoutProps> = ({ style, children }) => {
  const setVisible = useSetRecoilState(searchPopupVisibleAtom);
  return (
    <PopupLayoutContainer style={style} onClick={() => setVisible(false)}>
      {children}
    </PopupLayoutContainer>
  );
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
