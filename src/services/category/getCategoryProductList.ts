import { api } from '../index';

// Category별 상품 List 가져오기 api response type 정의
export interface Product {
  productCode: number;
  name: string;
  imagePath: string;
  salePrice: number;
  consumerPrice: number;
  reward: number;
  discountRate: number;
  totalReviewCount: number;
  averageRating: number;
}

// Category page Category별 상품 List 가져오기
export const getCategoryByProductList = (
  categoryId: number,
  pageNum: number,
): Promise<Product[]> => {
  console.log(`/api/v1/categories/${pageNum}&pageSize=2`);
  return api
    .get(`/api/v1/categories/${pageNum}&pageSize=2`)
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
