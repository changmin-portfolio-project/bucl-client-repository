import { api } from '../index';

export interface rewardSum {
  data: number;
}

// 유저 포인트 가져오기
export const getPoint = (): Promise<rewardSum> => {
  return api
    .get(`/api/v1/rewards/crnt-amt`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
