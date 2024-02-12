import { api } from '../index';

// 보유중인 포인트 가져오기
export const getBankList = (): Promise<string[]> => {
  return api
    .get(`/api/v1/rewards/bank-list`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
