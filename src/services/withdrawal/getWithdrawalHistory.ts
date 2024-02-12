import { privateApi } from '../index';

export interface RewardData {
  rewardWithdrawalAmount: number;
  withdrawalStatus: string; // 이 부분은 실제로는 더 정확한 문자열 값이어야 합니다.
  lastUsedDate: string;
}

export interface getWithdrawalHistoryListResponse {
  data: RewardData[];
}

// 인출 내역 가져오기
export const getWithdrawalHistoryList = (
  pageNum: number,
): Promise<getWithdrawalHistoryListResponse> => {
  return privateApi
    .get(`/api/v1/rewards/withdrawals?page=${pageNum}&pageSize=10`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
