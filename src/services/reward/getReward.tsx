import { api } from '../index';

// interface getRewardResponse {
//   rewardSum: number;
// }

// Point 가져오기
export const getReward = (): Promise<number> => {
  return api
    .get(`/api/v1/rewards/crnt-amt`)
    .then((res) => {
      console.log(res);
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
