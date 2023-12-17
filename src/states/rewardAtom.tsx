import { atom } from 'recoil';

export const rwdUseAmtAtom = atom<number>({
  key: 'rwdUseAmt',
  default: 0,
});
