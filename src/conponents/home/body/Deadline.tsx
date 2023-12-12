import React from 'react';
import styled from 'styled-components';

const Deadline: React.FC = () => {
  return (
    <DeadlineContainer>
      <DeadlineText>
        마감까지 <span>6일</span>
        <span>12시간</span>
        <span>54분</span> 남음
      </DeadlineText>
    </DeadlineContainer>
  );
};

const DeadlineContainer = styled.div`
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 12px 12px 0 0;
`;

const DeadlineText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  text-align: center;
  color: white;
  font: ${({ theme }) => theme.fontSizes.Body2};
  span {
    margin: 0 2px;
    padding: 3px 5px;
    background-color: ${({ theme }) => theme.subColor.Yellow1};
    border-radius: 4px;
    font-weight: 700;
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

export default Deadline;
