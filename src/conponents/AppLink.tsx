import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NAVIGATION_TO } from '../const/AppVars';

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

interface AppLinkProps {
  children: ReactNode;
  to: string;
  type?: string;
  isApp?: boolean;
  style?: React.CSSProperties;
}

const AppLink: React.FC<
  AppLinkProps & React.RefAttributes<HTMLAnchorElement>
> = ({ to, children, type = NAVIGATION_TO, isApp = true, style }) => {
  const navigate = useNavigate();
  return (
    <AppContainer
      style={style}
      className="app-link"
      onClick={() => {
        if (window.ReactNativeWebView && isApp) {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: type, url: to }),
          );
        } else {
          if (type === NAVIGATION_TO) {
            navigate(to);
          } else {
            navigate(-1);
          }
        }
      }}
    >
      {children}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  cursor: pointer;
`;

export default AppLink;
