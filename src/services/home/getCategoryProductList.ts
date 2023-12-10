import { api } from '../index';

// Category별 상품 List 가져오기 api response type 정의
export interface HomeProduct {
  productCode: number;
  name: string;
  brandName: string;
  imagePath: string;
  salePrice: number;
  consumerPrice: number;
  reward: number;
}

// Home page Category별 상품 List 가져오기
export const getHomeCategoryByProductList = (
  categoryId: number,
  pageNum: number,
): Promise<HomeProduct[]> => {
  console.log(
    `/api/v1/products?categoryId=${categoryId}&page=${pageNum}&pageSize=10`,
  );
  return api
    .get(
      `/api/v1/products?categoryId=${categoryId}&page=${pageNum}&pageSize=10`,
    )
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
