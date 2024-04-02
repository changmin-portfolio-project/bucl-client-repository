import { privateApi } from '../index';

interface ProductInfoRes {
  productCode: number;
  name: string;
  brandName: string;
  imagePath: string;
  starRate: number;
  selectedOption: string;
  reviewImages: string[];
  reviewText: string;
  createdAt: string;
}

// 리뷰 쓸 상품 정보 가져오기
export const getReviewInfo = (order_code: string): Promise<ProductInfoRes> => {
  return privateApi
    .get(`/api/v1/products/orders/${order_code}/review`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
