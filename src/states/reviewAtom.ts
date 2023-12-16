import { atom } from 'recoil';
import { PAGE_NUM } from '../const/Pagenation';
import { Review } from '../services/review/getReviewList';

export const reviewPageNumAtom = atom<number>({
  key: 'reviewPageNum',
  default: PAGE_NUM,
});

export const reviewListAtom = atom<Review[]>({
  key: 'reviewList',
  default: [],
});
