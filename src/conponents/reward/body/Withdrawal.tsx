import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPoint } from '../../../services/reward/getPoint';

const Withdrawal: React.FC = () => {
  const [point, setPoint] = useState<number>();
  useEffect(() => {
    getPoint().then((res) => {
      setPoint(res.data.data);
    });
  }, []);
  return (
    <WithdrawalContainer>
      <WithdrawalWrap>
        <img src="/assets/PointIcon.svg" />
        <PointHeldBox>
          <span>보유 포인트</span>
          <p>{point?.toLocaleString()}P</p>
        </PointHeldBox>
        <WithdrawalBtn>
          <Link to="/reward-withdrawals">인출하기</Link>
        </WithdrawalBtn>
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

  width: 100%;
  position: fixed;
  max-width: 600px;
`;

const WithdrawalWrap = styled.div`
  padding: 15px 7%;
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

const WithdrawalBtn = styled.button`
  position: relative;
  z-index: 5;
  padding: 5px 0;
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  a {
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

export default Withdrawal;
