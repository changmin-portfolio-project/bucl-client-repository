import { atom } from 'recoil';
import { HomeProduct } from '../services/home/getCategoryProductList';
import { DEFAULT_CATEGORY, PAGE_NUM } from '../const/Pagenation';
import { ProductData } from '../services/productDetail/getProductInfo';

export const categoryIdAtom = atom<number>({
  key: 'categoryId',
  default: DEFAULT_CATEGORY,
});

export const pageNumAtom = atom<number>({
  key: 'pageNum',
  default: PAGE_NUM,
});

export const productListAtom = atom<HomeProduct[]>({
  key: 'productList',
  default: [],
});

export const productInfoAtom = atom<ProductData>({
  key: 'product',
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
