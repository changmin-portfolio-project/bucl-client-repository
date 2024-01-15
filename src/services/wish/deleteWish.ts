import { api } from '../index';

export interface deleteWishResponse {
  data: null;
}

// 찜한 상품 삭제라기
export const deleteWish = (
  productCode: number,
): Promise<deleteWishResponse> => {
  return api
    .delete(`/api/v1/wishes/${productCode}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
