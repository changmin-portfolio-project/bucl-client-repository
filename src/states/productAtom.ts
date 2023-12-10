import { atom } from 'recoil';
import { HomeProduct } from '../services/home/getCategoryProductList';
import { Product } from '../services/category/getCategoryProductList';

export const categoryIdAtom = atom<number>({
  key: 'categoryId',
  default: 1,
});

export const pageNumAtom = atom<number>({
  key: 'pageNum',
  default: 1,
});

export const productListAtom = atom<HomeProduct[]>({
  key: 'productList',
  default: [],
});

export const categoryProductListAtom = atom<Product[]>({
  key: 'categoryProductList',
  default: [
    {
      productCode: 389485934,
      name: '콩순이 냉장고',
      imagePath:
        'https://www.dewbell.co.kr/web/product/big/202304/8143461f9c5dbb98c243b2c072b0a8d7.jpg',
      salePrice: 24500,
      consumerPrice: 35000,
      reward: 2450,
      discountRate: 0.3,
      totalReviewCount: 0,
      averageRating: 0,
    },
    {
      productCode: 389485934,
      name: '콩순이 냉장고',
      imagePath:
        'https://www.dewbell.co.kr/web/product/big/202304/8143461f9c5dbb98c243b2c072b0a8d7.jpg',
      salePrice: 24500,
      consumerPrice: 35000,
      reward: 2450,
      discountRate: 0.3,
      totalReviewCount: 0,
      averageRating: 0,
    },
    {
      productCode: 389485934,
      name: '콩순이 냉장고',
      imagePath:
        'https://www.dewbell.co.kr/web/product/big/202304/8143461f9c5dbb98c243b2c072b0a8d7.jpg',
      salePrice: 24500,
      consumerPrice: 35000,
      reward: 2450,
      discountRate: 0.3,
      totalReviewCount: 0,
      averageRating: 0,
    },
    {
      productCode: 389485934,
      name: '콩순이 냉장고',
      imagePath:
        'https://www.dewbell.co.kr/web/product/big/202304/8143461f9c5dbb98c243b2c072b0a8d7.jpg',
      salePrice: 24500,
      consumerPrice: 35000,
      reward: 2450,
      discountRate: 0.3,
      totalReviewCount: 0,
      averageRating: 0,
    },
  ],
});
