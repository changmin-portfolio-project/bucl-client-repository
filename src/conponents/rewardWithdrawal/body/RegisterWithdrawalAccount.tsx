import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  RewardAccount,
  getRewardAccount,
} from '../../../services/rewardAccount/getRewardAccount';
import { useRecoilState } from 'recoil';
import { rewardAccountAtom } from '../../../states/withdrawalAtom';

const RegisterWithdrawalAccount: React.FC = () => {
  const [myRewardAccount, setMyRewardAccount] =
    useRecoilState(rewardAccountAtom);

  useEffect(() => {
    getRewardAccount()
      .then((res) => {
        console.log(res);
        const rewardAccountData: RewardAccount = {
          bankName: res.bankName,
          bankCode: res.bankCode,
          accountNum: res.accountNum,
          accountHolderName: res.accountHolderName,
        };
        setMyRewardAccount(rewardAccountData);
      })
      .catch(() => {
        const rewardAccountData: RewardAccount = {
          bankName: '없음',
          bankCode: '',
          accountNum: '',
          accountHolderName: '',
        };
        setMyRewardAccount(rewardAccountData);
      });
  }, []);
  return (
    <RegisterWithdrawalAccountContainer>
      <Title>등록 인출 계좌</Title>
      {myRewardAccount !== undefined ? (
        <AccountNum>
          {myRewardAccount.bankName} {myRewardAccount.accountNum}
        </AccountNum>
      ) : (
        <AccountNum>없음</AccountNum>
      )}
    </RegisterWithdrawalAccountContainer>
  );
};

const RegisterWithdrawalAccountContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 8px ${({ theme }) => theme.paddings.base};
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;

const Title = styled.span`
  margin-right: 10px;
  font: ${({ theme }) => theme.fontSizes.Body2};
`;

const AccountNum = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;

export default RegisterWithdrawalAccount;
