import { atom } from 'recoil';

export const withdrawCompleteAtom = atom<boolean>({
  key: 'withdrawComplete',
  default: false,
});
