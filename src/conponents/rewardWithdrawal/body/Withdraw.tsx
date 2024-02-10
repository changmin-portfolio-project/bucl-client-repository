import React, { useEffect } from 'react';
import styled from 'styled-components';
import WithdrawButton from './WithdrawButton';
import { getReward } from '../../../services/reward/getReward';
import { useRecoilState } from 'recoil';
import { rwdUseAmtAtom } from '../../../states/rewardAtom';
import { withdrawalPointAtom } from '../../../states/withdrawalAtom';

const Withdraw: React.FC = () => {
  const [withdrawalPoint, setWithdrawalPoint] =
    useRecoilState(withdrawalPointAtom);
  const [rwdUseAmt, useRwdUseAmt] = useRecoilState(rwdUseAmtAtom);

  useEffect(() => {
    getReward()
      .then((res) => useRwdUseAmt(res))
      .catch(() => {
        useRwdUseAmt(0);
      });
  }, []);

  const withdrawalPointInputOnChange = (number: string) => {
    // 숫자인지 확인하는 정규표현식
    const isNumeric = /^[1-9]\d*$/.test(number);
    if (isNumeric) {
      const withdrawalPoint = parseInt(number);
      if (withdrawalPoint <= rwdUseAmt) {
        setWithdrawalPoint(number);
      }
    }

    // 빈값 일떄
    if (number === '') {
      setWithdrawalPoint('');
    }
  };

  return (
    <WithdrawContainer>
      <Title>포인트 인출</Title>
      <WithdrawBox>
        <PointsHeldBox>
          <SubTitle>인출 가능 포인트</SubTitle>
          <PointsHeld>{rwdUseAmt.toLocaleString()}P</PointsHeld>
        </PointsHeldBox>
        <BtnInputBox $active={Boolean(withdrawalPoint)}>
          <input
            placeholder="인출할 포인트 입력"
            value={withdrawalPoint}
            onChange={(e) => withdrawalPointInputOnChange(e.target.value)}
          />
          <WithdrawButton isActive={Boolean(withdrawalPoint)} />
        </BtnInputBox>
        <HelpText>
          5,000P부터 인출이 가능하며, 포인트 단위는 현금 단위와 동일합니다.
          <br /> 인출 신청 시 3.3%세액 공제된 금액으로 영업일 기준 평균 2-3일 내
          입금됩니다.
        </HelpText>
      </WithdrawBox>
    </WithdrawContainer>
  );
};

const WithdrawContainer = styled.section``;

const Title = styled.p`
  padding: 8px ${({ theme }) => theme.paddings.base};
  font: ${({ theme }) => theme.fontSizes.Body3};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const WithdrawBox = styled.div`
  padding: 10px ${({ theme }) => theme.paddings.base};
`;

const PointsHeldBox = styled.div``;
const SubTitle = styled.span`
  margin-right: 5px;
  font: ${({ theme }) => theme.fontSizes.Body2};
`;
const PointsHeld = styled(SubTitle)`
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

const BtnInputBox = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  input {
    padding: 10px;
    width: 63%;
    font: ${({ theme }) => theme.fontSizes.Body2};
    outline: none;
    border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
    border-radius: 4px;
    &::placeholder {
      color: ${({ theme }) => theme.mainColor.Orange3};
    }
  }
  button {
    padding: 0 20px;
    background-color: ${(props) => (props.$active ? '#ff8000' : '#ff80008b')};
    border: none;
    border-radius: 4px;
    font: ${({ theme }) => theme.fontSizes.Subhead1};
    color: white;
  }
`;
const HelpText = styled.p`
  margin-bottom: 10px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey5};
  line-height: 140%; /* 14px */
  letter-spacing: -0.6px;
`;

export default Withdraw;
