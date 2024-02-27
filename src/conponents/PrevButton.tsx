import React from 'react';
import AppLink from './AppLink';
import { NAVIGATION_BACK } from '../const/AppVars';

const PrevStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  left: '8%',
  transform: 'translate(-50%, 0%)',
  display: 'flex',
  cursor: 'pointer',
  paddingBottom: '5px',
};

interface PrevBtnProps {
  isApp?: boolean;
  to?: string;
  type?: string;
}

const PrevButton: React.FC<PrevBtnProps> = ({
  isApp = false,
  to = location.pathname,
  type = NAVIGATION_BACK,
}) => {
  return (
    <AppLink isApp={isApp} to={to} type={type} style={PrevStyle}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AppLink>
  );
};

export default PrevButton;
