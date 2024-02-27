import { privateApi } from '../index';

// Category별 상품 List 가져오기 api response type 정의
export interface Product {
  productCode: number;
  brandName: string;
  name: string;
  imagePath: string;
  salePrice: number;
  consumerPrice: number;
  reward: number;
  discountRate: number;
  totalReviewCount: number;
  averageRating: number;
  wished: boolean;
  totalConsumerOrder: number;
  deadline: string;
}

// Category page Category별 상품 List 가져오기
export const getCategoryByProductList = (
  categoryId: number,
  pageNum: number,
): Promise<Product[]> => {
  return privateApi
    .get(`/api/v1/categories/${categoryId}?page=${pageNum}&pageSize=10`)
    .then((res) => {
      console.log(res);
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
