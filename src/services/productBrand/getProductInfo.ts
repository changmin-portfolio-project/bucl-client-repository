import { privateApi } from '../index';

export interface ProductBrandData {
  brandName: string;
  brandProfilePath: string;
  brandDesc: string;
  brandImgList: string[];
}

export interface getProductBrandResponse {
  data: ProductBrandData;
}

// 상품 상세정보 가져오기
export const getProductBrand = (
  brand_code: string,
): Promise<getProductBrandResponse> => {
  return privateApi
    .get(`/api/v1/products/brands/${brand_code}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
