import { privateApi } from '../index';

// Point 가져오기
export const getReward = (): Promise<number> => {
  return privateApi
    .get(`/api/v1/rewards/crnt-amt`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
