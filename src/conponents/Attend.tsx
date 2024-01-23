import React from 'react';
import styled from 'styled-components';

interface AttendProps {
  style?: React.CSSProperties;
  ordNum?: number;
  itemStyle?: React.CSSProperties;
}

const Attend: React.FC<AttendProps> = ({ style, ordNum, itemStyle }) => {
  return (
    <AttendContainer style={style}>
      <AttendItem style={itemStyle}>{ordNum}명 참여중</AttendItem>
    </AttendContainer>
  );
};

const AttendContainer = styled.div`
  padding: 0px 5px;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 500;
  color: white;
`;

const AttendItem = styled.div`
  width: 68px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Label};

  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 1.8;
`;

export default Attend;
