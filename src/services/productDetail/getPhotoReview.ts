import { api } from '../index';

export interface ImageData {
  imagePath: string;
}

export interface getPhotoReviewResponse {
  data: ImageData[];
}

// 리뷰 사진 미리보기 가져오기
export const getPhotoReview = (
  product_code: string,
): Promise<getPhotoReviewResponse> => {
  console.log(`/api/v1/products/${product_code}/photo-reviews?display=preview`);
  return api
    .get(`/api/v1/products/${product_code}/photo-reviews?display=preview`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
