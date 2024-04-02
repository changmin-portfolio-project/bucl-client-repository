import { formApi } from '../index';

// 사후 검증
export const postReview = (
  formData: FormData,
  product_code: string,
): Promise<string> => {
  return formApi
    .post(`/api/v1/products/${product_code}/review`, formData)
    .then((res) => {
      return res.data.data;
    });
};
