import { api } from '../index';

export interface ReviewPreview {
  profilePath: string;
  nickname: string;
  reviewDate: string;
  productName: string;
  content: string;
  reviewRate?: number;
  reviewImage: string;
}

export interface ProductData {
  productCode: number;
  name: string;
  brandName: string;
  salePrice: number;
  consumerPrice: number;
  discountRate: number;
  averageRating: number;
  reviewDate: string;
  totalReviewCount: number;
  imagePaths: string[];
  detailImagePaths: string[];
  reviewPreviews: ReviewPreview[];
  ordNum: number;
  deadline: string;
}

export interface getProductInfoResponse {
  data: ProductData;
}

// 상품 상세정보 가져오기
export const getProductInfo = (
  product_code: string,
): Promise<getProductInfoResponse> => {
  return api
    .get(`/api/v1/products/${product_code}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
