import React from 'react';
import styled from 'styled-components';
import { useCountdownTimer } from '../utils/TimeUtil';
import { validValueNotBlank } from '../utils/ValidationUtil';

interface AttendProps {
  style?: React.CSSProperties;
  ordNum?: number;
  itemStyle?: React.CSSProperties;
  deadline: string;
}

const Attend: React.FC<AttendProps> = ({
  style,
  ordNum,
  itemStyle,
  deadline,
}) => {
  const { isFinished } = useCountdownTimer(deadline);
  return (
    <AttendContainer style={style}>
      <AttendItem style={itemStyle}>
        {ordNum}명{' '}
        {validValueNotBlank(deadline) ? (
          <>구매 {isFinished ? '완료' : '중'}</>
        ) : (
          '구매'
        )}
      </AttendItem>
    </AttendContainer>
  );
};

const AttendContainer = styled.div`
  padding: 0px 6px;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 5px;
  font-weight: 500;
  color: white;
`;

const AttendItem = styled.div`
  width: 100%;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Label};
  font-size: 13px;

  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 1.8;
`;

export default Attend;
