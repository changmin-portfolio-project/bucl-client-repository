import { api } from '../index';

export interface WishProduct {
  brandName: string;
  name: string;
  imagePath: string[];
  productCode: number;
  consumerPrice: number;
  starRate: number;
  consumerOrdersNumber: number;
  isEnded: boolean;
  totalReviewCount: number;
}

export interface getWishListResponse {
  data: WishProduct[];
}

// 찜 리스트 가져오기
export const getWishList = (): Promise<getWishListResponse> => {
  return api
    .get(`/api/v1/wishes`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
