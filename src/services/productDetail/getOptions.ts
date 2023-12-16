import { api } from '../index';

export interface optionsData {
  values: string[];
  extraAmount: number;
}

export interface getOptionsResponse {
  data: optionsData[];
}

// 상품 구매 옵션 가져오기
export const getOptions = (
  product_code: string,
): Promise<getOptionsResponse> => {
  return api
    .get(`/api/v1/products/${product_code}/options`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
