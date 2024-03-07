import { api } from '../index';

export interface Review {
  profilePath: string;
  nickname: string;
  reviewDate: string;
  starRate: number;
  selectedOption: string;
  reviewImages: string[];
  reviewText: string;
}

export interface getReviewListResponse {
  reviewCount: number;
  averageRating: number;
  reviews: Review[];
}

// 리뷰 리스트 가져오기
export const getReviewList = (
  product_code: string,
  pageNum: number,
): Promise<getReviewListResponse> => {
  return api
    .get(`/api/v1/products/${product_code}/reviews?page=${pageNum}&pageSize=10`)
    .then((res) => {
      console.log(res.data);
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
