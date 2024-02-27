import { api } from '../index';

export interface getAvgReviewRes {
  reviewCount: number;
  averageRating: number;
}

// 리뷰 리스트 가져오기
export const getAvgReview = (
  product_code: string,
): Promise<getAvgReviewRes> => {
  return api
    .get(`/api/v1/products/${product_code}/reviews/average`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
