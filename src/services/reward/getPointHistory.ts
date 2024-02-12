import { privateApi } from '../index';

type RewardType = 'CONSUMER' | 'OTHER_TYPE'; // 다른 rewardType이 있다면 추가

export interface RewardData {
  brandName: string;
  name: string;
  reward: string;
  rewardType: RewardType;
  createdAt: string;
}

export interface getPointHistoryListResponse {
  data: RewardData[];
}

// 포인트 내역 가져오기
export const getPointHistoryList = (
  pageNum: number,
): Promise<getPointHistoryListResponse> => {
  return privateApi
    .get(`/api/v1/rewards?page=${pageNum}&pageSize=10`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
