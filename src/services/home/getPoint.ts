import { api } from '../index';

interface getPointResponse {
  rewardSum: number;
}

// Point 가져오기
export const getPoint = (): Promise<getPointResponse> => {
  return api
    .get(`/api/v1/rewards/crnt-amt`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
