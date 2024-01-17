import { atom } from 'recoil';
import { HomeProduct } from '../services/home/getCategoryProductList';
import { DEFAULT_CATEGORY, PAGE_NUM } from '../const/Pagenation';

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
