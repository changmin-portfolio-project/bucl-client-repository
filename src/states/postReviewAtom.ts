import { atom } from 'recoil';

interface PostReviewProductInfo {
  productCode: number;
  name: string;
  brandName: string;
  imagePath: string;
  createdAt: string;
}

export const postReviewProductInfoAtom = atom<PostReviewProductInfo>({
  key: 'postReviewProductInfo',
  default: {
    productCode: 0,
    name: '',
    brandName: '',
    imagePath: '',
    createdAt: '',
  },
});

export const starNumAtom = atom<number>({
  key: 'starNum',
  default: 0,
});

export const reviewTextAtom = atom<string>({
  key: 'reviewText',
  default: '',
});

export const reviewImgListAtom = atom<File[]>({
  key: 'reviewImgList',
  default: [],
});

export const imageUrlListAtom = atom<string[]>({
  key: 'imageUrlList',
  default: [],
});

export const completeBooleanAtom = atom<boolean>({
  key: 'completeBoolean',
  default: false,
});
