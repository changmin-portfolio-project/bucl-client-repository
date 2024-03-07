import { privateApi } from '../index';

interface WishesResponse {
  data: {
    data: {
      productCode: number;
    };
  };
}

interface PostWishesReq {
  productCode: number;
}

// 상품 찜하기
export const postWishes = (data: PostWishesReq): Promise<WishesResponse> => {
  return privateApi.post(`/api/v1/wishes`, data).then((res) => {
    return res;
  });
};
