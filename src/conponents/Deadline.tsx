import React from 'react';
import styled from 'styled-components';
import { useCountdownTimer } from '../utils/TimeUtil';
import { validValueNotBlank } from '../utils/ValidationUtil';

interface DeadlineProps {
  deadline: string;
  style?: React.CSSProperties;
  spanFont?: string;
}

const Deadline: React.FC<DeadlineProps> = ({ deadline, style }) => {
  const { timeRemaining, isFinished } = useCountdownTimer(deadline);

  return (
    <>
      {!validValueNotBlank(deadline) ? null : (
        <DeadlineContainer style={style} $isFinished={isFinished}>
          {!isFinished ? (
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
              <span>타임딜이 마감됐습니다.</span>
            </>
          )}
        </DeadlineContainer>
      )}
    </>
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
  font-size: 15px;
  span {
    margin: 0 2px;
    padding: 0px 5px;
    background-color: ${({ theme }) => theme.subColor.Yellow1};
    font: ${({ theme }) => theme.fontSizes.Subhead1};
    font-weight: 500;
    border-radius: 4px;
    color: ${({ theme }) => theme.mainColor.Orange5};
    font-size: 12px;
  }
`;

export default Deadline;
