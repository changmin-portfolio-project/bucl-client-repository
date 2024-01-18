import { api } from '../index';

export interface postSalesInfoRes {
  name: string;
  brandName: string;
  imagePath: [string];
  reward: number;
  affiliateUrl: string;
}

// 판매 상품 정보 가져오기
export const postSalesInfo = (
  product_code: string,
): Promise<postSalesInfoRes> => {
  return api
    .post(`/api/v1/affiliates/${product_code}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
