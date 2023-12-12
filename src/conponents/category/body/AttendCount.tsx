import React from 'react';
import styled from 'styled-components';

const AttendCount: React.FC = () => {
  return (
    <AttendCountConatiner>
      <span>50명 참여중</span>
    </AttendCountConatiner>
  );
};

const AttendCountConatiner = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 6px;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 500;
`;

export default AttendCount;
