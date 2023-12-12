import { atom } from 'recoil';
import { Product } from '../services/category/getCategoryProductList';
import { DEFAULT_CATEGORY, PAGE_NUM } from '../const/Pagenation';

export const categoryIdByCategoriesAtom = atom<number>({
  key: 'categoryIdByCategories',
  default: DEFAULT_CATEGORY,
});

export const pageNumByCategoriesAtom = atom<number>({
  key: 'pageNumByCategories',
  default: PAGE_NUM,
});

export const productListByCategoriesAtom = atom<Product[]>({
  key: 'productListByCategories',
  default: [],
});
