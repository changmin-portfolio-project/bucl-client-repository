import { atom } from 'recoil';
import { ProductData } from '../services/productDetail/getProductInfo';

export const productDetailAtom = atom<ProductData>({
  key: 'productDetail',
  default: {
    productCode: 0,
    name: '',
    brandName: '',
    salePrice: 0,
    consumerPrice: 0,
    discountRate: 0,
    averageRating: 0,
    reviewDate: '',
    totalReviewCount: 0,
    imagePaths: [],
    detailImagePaths: [],
    reviewPreviews: [],
    totalConsumerOrder: 0,
    deadline: '',
    prodObsNum: 0,
    wished: false,
    brandId: 0,
    brandProfilePath: '',
  },
});
