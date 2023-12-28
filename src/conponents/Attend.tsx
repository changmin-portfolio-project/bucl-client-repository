import React from 'react';
import styled from 'styled-components';

interface AttendProps {
  style?: React.CSSProperties;
}

const Attend: React.FC<AttendProps> = ({ style }) => {
  return (
    <AttendContainer style={style}>
      <AttendItem>50명 참여중</AttendItem>
    </AttendContainer>
  );
};

const AttendContainer = styled.div`
  padding: 3px 5px;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 500;
  color: white;
`;

const AttendItem = styled.div`
  width: 100%;
  height
`;

export default Attend;
