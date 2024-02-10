import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getReward } from '../../../services/reward/getReward';
import { Link } from 'react-router-dom';

const Point: React.FC = () => {
  const [point, setPoint] = useState<number>(0);
  useEffect(() => {
    getReward()
      .then((res) => {
        setPoint(res);
      })
      .catch(() => {});
  }, []);

  return (
    <Link to="/rewards">
      <PointContainer>
        <PointImg src="/assets/RewardIcon.png" />
        <PointText>{point?.toLocaleString()}P</PointText>
      </PointContainer>
    </Link>
  );
};

const PointContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80px;
  text-align: right;
  letter-spacing: -0.6px;
`;

const PointImg = styled.img`
  width: 24px;
`;

const PointText = styled.span`
  padding-left: 5px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default Point;
