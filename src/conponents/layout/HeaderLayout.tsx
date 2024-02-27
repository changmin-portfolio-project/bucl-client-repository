import React from 'react';
import styled from 'styled-components';
import PrevButton from '../PrevButton';
import { SetterOrUpdater } from 'recoil';
import PrevPopupButton from '../PrevPopupButton';

interface HeaderLayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  text?: string;
  isApp?: boolean;
  to?: string;
  type?: string;
  setFunction?:
    | SetterOrUpdater<boolean>
    | React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  style,
  children,
  text,
  isApp = false,
  to = undefined,
  type = undefined,
  setFunction = null,
}) => {
  return (
    <HeaderLayoutContainer style={style}>
      {children ? (
        children
      ) : (
        <Title>
          {setFunction === null ? (
            <PrevButton isApp={isApp} to={to} type={type} />
          ) : (
            <>
              <PrevPopupButton setFunction={setFunction} />
            </>
          )}
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
