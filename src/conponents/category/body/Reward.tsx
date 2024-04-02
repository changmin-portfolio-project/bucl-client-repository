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
  position: absolute;
  bottom: 0;
  padding: 3px 0;
  width: 100%;
  text-align: center;
  background-color: black;
  border-radius: 3px;
`;
const RewardText = styled.p`
  font: ${({ theme }) => theme.fontSizes.Label};
  color: white;
  span {
    font-weight: 700;
  }
  font-size: 13px;
`;

export default Reward;
