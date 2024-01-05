import { api } from '../index';

// 리뷰 쓸 상품 정보 가져오기
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getProductInfo = (product_code: string) => {
  return api
    .get(`/api/v1/products/${product_code}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
