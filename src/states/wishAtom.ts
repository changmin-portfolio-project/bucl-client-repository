import { atom } from 'recoil';
import { WishProduct } from '../services/wish/getWishList';

export const wishProductListAtom = atom<WishProduct[]>({
  key: 'wishProductList',
  default: [],
});
