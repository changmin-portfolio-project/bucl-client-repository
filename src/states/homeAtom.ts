import { atom } from 'recoil';
import { Product } from '../services/category/getCategoryProductList';
import { PAGE_NUM } from '../const/Pagenation';

export const mainProductListByHomeAtom = atom<Product[]>({
  key: 'mainProductListByHome',
  default: [],
});

export const mainPageNumByHomeAtom = atom<number>({
  key: 'mainPageNumByCategories',
  default: PAGE_NUM,
});
