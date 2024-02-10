import { api } from '../index';

export interface RewardAccount {
  bankName: string;
  bankCode: string;
  accountNum: string;
  accountHolderName: string;
}

// 계좌 정보 가져오기
export const getRewardAccount = (): Promise<RewardAccount> => {
  return api
    .get(`/api/v1/rewards/account`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
