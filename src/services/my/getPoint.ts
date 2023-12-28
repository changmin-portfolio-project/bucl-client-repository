import { api } from '../index';

export interface rewardSum {
  rewardSum: number;
}

export interface getPointResponse {
  data: rewardSum;
}

// 유저 포인트 가져오기
export const getPoint = (): Promise<getPointResponse> => {
  return api
    .get(`/api/v1/rewards/crnt-amt`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
