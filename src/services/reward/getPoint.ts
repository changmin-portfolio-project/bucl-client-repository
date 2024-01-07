import { api } from '../index';

export interface getPointResponse {
  data: {
    data: number;
  };
}

// 보유중인 포인트 가져오기
export const getPoint = (): Promise<getPointResponse> => {
  return api
    .get(`/api/v1/rewards/crnt-amt`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
