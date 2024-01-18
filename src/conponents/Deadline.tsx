import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DeadlineProps {
  deadline: string;
  style?: React.CSSProperties;
  spanFont?: string;
}

const Deadline: React.FC<DeadlineProps> = ({ deadline }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(),
  );

  function calculateTimeRemaining(): TimeRemaining {
    const now = new Date();
    const targetTime = new Date(deadline);
    const difference = targetTime.getTime() - now.getTime();

    if (difference < 0) {
      // Target date has passed

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <DeadlineContainer>
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
    </DeadlineContainer>
  );
};

const DeadlineContainer = styled.div<{ $spanFont?: string }>`
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
    border-radius: 4px;
    color: ${({ theme }) => theme.mainColor.Orange5};
    font-size: 14px;
  }
`;

export default Deadline;
