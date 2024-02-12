import { privateApi } from '../index';

// Category별 상품 List 가져오기 api response type 정의
export interface HomeProduct {
  productCode: number;
  name: string;
  brandName: string;
  imagePath: string;
  salePrice: number;
  consumerPrice: number;
  reward: number;
  wished: boolean;
  ordNum: number;
  deadline: string;
}

// Home page Category별 상품 List 가져오기
export const getHomeCategoryByProductList = (
  categoryId: number,
  pageNum: number,
): Promise<HomeProduct[]> => {
  return privateApi
    .get(
      `/api/v1/products?categoryId=${categoryId}&page=${pageNum}&pageSize=10`,
    )
    .then((res) => {
      console.log('성공:', res);
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
