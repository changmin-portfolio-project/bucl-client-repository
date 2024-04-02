import React from 'react';
import styled from 'styled-components';

interface RewardComponentProps {
  reward: number;
}

const Reward: React.FC<RewardComponentProps> = ({ reward }) => {
  return (
    <RewardContainer>
      <RewardText>
        <span>최대 {reward?.toLocaleString()}원</span> 리워드
      </RewardText>
    </RewardContainer>
  );
};

const RewardContainer = styled.div`
  padding: 6px 0;
  text-align: center;
  font-weight: 500;
  background-color: black;
`;
const RewardText = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: white;
  span {
    font-weight: 700;
  }
`;

export default Reward;
