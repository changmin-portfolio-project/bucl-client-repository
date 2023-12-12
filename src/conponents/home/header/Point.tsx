import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPoint } from '../../../services/home/getPoint';

const Point: React.FC = () => {
  const [point, setPoint] = useState<number>(0);
  useEffect(() => {
    getPoint().then((res) => {
      setPoint(res.rewardSum);
    });
  }, []);

  return (
    <PointContainer>
      <img src="/assets/PointIcon.svg" />
      <PointText>{point}P</PointText>
    </PointContainer>
  );
};

const PointContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80px;
  text-align: right;
  letter-spacing: -0.6px;
  img {
    width: 19px;
    height: 16px;
    transform: rotateY(180deg);
  }
`;

const PointText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  font-weight: 700;
  line-height: 19.6px;
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default Point;
