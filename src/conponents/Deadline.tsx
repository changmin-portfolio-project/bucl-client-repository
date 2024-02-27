import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TimeRemaining, calculateTimeRemaining } from '../utils/TimeUtil';

interface DeadlineProps {
  deadline: string;
  style?: React.CSSProperties;
  spanFont?: string;
}

const Deadline: React.FC<DeadlineProps> = ({ deadline, style }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(deadline),
  );

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining(deadline));
    if (deadline) {
      const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(deadline));
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(timer);
    }
  }, [deadline]);

  const isFinished =
    timeRemaining.hours === 0 &&
    timeRemaining.seconds === 0 &&
    timeRemaining.minutes === 0;

  return (
    <DeadlineContainer style={style} $isFinished={isFinished}>
      {deadline ? (
        <>
          마감까지
          {timeRemaining.days === 0 ? (
            <>
              <span>{timeRemaining.hours}시간</span>
              <span>{timeRemaining.minutes}분</span>
              <span>{timeRemaining.seconds}초</span>남음
            </>
          ) : (
            <>
              <span>{timeRemaining.days}일</span>
              <span>{timeRemaining.hours}시간</span>
              <span>{timeRemaining.minutes}분</span>남음
            </>
          )}
        </>
      ) : (
        <>
          <span>이벤트가 없습니다</span>
        </>
      )}
    </DeadlineContainer>
  );
};

const DeadlineContainer = styled.div<{ $isFinished: boolean }>`
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  color: white;
  font-family: Pretendard-Medium;
  span {
    margin: 0 2px;
    padding: 2px 6px;
    background-color: ${({ theme }) => theme.subColor.Yellow1};
    font: ${({ theme }) => theme.fontSizes.Subhead1};
    font-weight: 500;
    border-radius: 4px;
    color: ${({ theme }) => theme.mainColor.Orange5};
    font-size: 14px;
  }
`;

export default Deadline;
