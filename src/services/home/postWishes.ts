import { api } from '../index';

interface WishesResponse {
  data: {
    data: {
      productCode: number;
    };
  };
}

// 상품 찜하기
export const postWishes = (): Promise<WishesResponse> => {
  return api
    .post(`/api/v1/wishes`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
