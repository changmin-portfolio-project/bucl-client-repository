import { atom } from 'recoil';

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

export const completeBooleanAtom = atom<boolean>({
  key: 'completeBoolean',
  default: false,
});
