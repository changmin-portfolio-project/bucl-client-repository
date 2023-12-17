import { atom } from 'recoil';

export const pgCodeAtom = atom<string>({
  key: 'payMethod',
  default: '',
});
