import { privateApi } from '../index';

// 상품 찜하기
export const postLogout = (): Promise<string> => {
  return privateApi
    .post(`/api/v1/auth/logout`)
    .then((res) => {
      console.log(res);
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
