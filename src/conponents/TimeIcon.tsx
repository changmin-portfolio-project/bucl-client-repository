import React from 'react';
import styled from 'styled-components';
import { useCountdownTimer } from '../utils/TimeUtil';

interface TimeIconProps {
  deadline: string;
}

const TimeIcon: React.FC<TimeIconProps> = ({ deadline }) => {
  const { isFinished } = useCountdownTimer(deadline);
  return (
    <>
      {!isFinished && (
        <TimeIconContainer>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="4" fill="#000000" />
            <path
              d="M9.99958 15.3917C12.9776 15.3917 15.3917 12.9776 15.3917 9.99958C15.3917 7.02157 12.9776 4.60742 9.99958 4.60742C7.02157 4.60742 4.60742 7.02157 4.60742 9.99958C4.60742 12.9776 7.02157 15.3917 9.99958 15.3917Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6.76465V9.99994L12.1569 11.0784"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TimeIconContainer>
      )}
    </>
  );
};

const TimeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin-left: 3px;
  border-radius: 4px;
  img {
    width: calc(100% - 8px);
  }
`;

export default TimeIcon;
