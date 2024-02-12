import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getReward } from '../../../services/reward/getReward';
import ColoredButton from '../../ColoredButton';

const Withdrawal: React.FC = () => {
  const [point, setPoint] = useState<number>();
  useEffect(() => {
    getReward().then((res) => {
      setPoint(res);
    });
  }, []);

  const ColorButtonStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: '5',
    padding: '5px 0',
  };
  return (
    <WithdrawalContainer>
      <WithdrawalWrap>
        <img src="/assets/PointIcon.svg" />
        <PointHeldBox>
          <span>보유 포인트</span>
          <p>{point?.toLocaleString()}P</p>
        </PointHeldBox>
        <ColoredButton
          style={ColorButtonStyle}
          color="Orange5"
          font="Subhead2"
          backgroundColor="white"
        >
          <Link to="/reward-withdrawals">인출하기</Link>
        </ColoredButton>
      </WithdrawalWrap>
    </WithdrawalContainer>
  );
};

const WithdrawalContainer = styled.section`
  position: relative;
  background: linear-gradient(279deg, #ffad0d 8.38%, #ff8000 70.34%);
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
  overflow: hidden;
  img {
    position: absolute;
    z-index: 0;
    top: -4vw;
    right: -5%;
    transform: rotateY(-180deg);
    width: 47%;
    aspect-ratio: 1/1;
  }
`;

const WithdrawalWrap = styled.div`
  padding: 15px ${({ theme }) => theme.paddings.base};
`;

const PointHeldBox = styled.div`
  margin-bottom: 15px;
  color: white;
  span {
    font: ${({ theme }) => theme.fontSizes.Body4};
  }
  p {
    font: ${({ theme }) => theme.fontSizes.Display1};
    text-shadow: 0px 4px 4px #e17100;
  }
`;

export default Withdrawal;
