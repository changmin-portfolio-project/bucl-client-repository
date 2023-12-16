import { atom } from 'recoil';
import { PAGE_NUM } from '../const/Pagenation';
import { ImageData } from '../services/photoReview/getPhotoReviewList';

export const pageNumAtom = atom<number>({
  key: 'pageNum',
  default: PAGE_NUM,
});

export const photoReviewListAtom = atom<ImageData[]>({
  key: 'photoReviewList',
  default: [],
});
