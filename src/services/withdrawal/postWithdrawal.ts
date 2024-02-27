import { privateApi } from '../index';

export interface postWithdrawalResponse {
  rewardWithdrawalAmount: number;
  withdrawalStatus: string; // 이 부분은 실제로는 더 정확한 문자열 값이어야 합니다.
  lastUsedDate: string;
}

export interface postWithdrawalProps {
  bankCodeStd: string;
  bankName: string;
  withdrawalAmount: number;
  accountNum: string;
  accountHolderName: string;
}
// 인출하기
export const postWithdrawal = (
  data: postWithdrawalProps,
): Promise<postWithdrawalResponse> => {
  return privateApi
    .post(`/api/v1/rewards/withdrawals`, data)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
