import { api } from '../index';

export interface ImageData {
  imagePath: string;
}

export interface getPhotoReviewListResponse {
  data: ImageData[];
}

// 리뷰 사진 미리보기 가져오기
export const getPhotoReviewList = (
  product_code: string,
  pageNum: number,
): Promise<getPhotoReviewListResponse> => {
  return api
    .get(
      `/api/v1/products/${product_code}/photo-reviews?page=${pageNum}&pageSize=10`,
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
