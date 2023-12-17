import { atom } from 'recoil';

export const addrDetailAtom = atom<string>({
  key: 'addrDetail',
  default: '',
});

export const memoCntAtom = atom<string>({
  key: 'memoCnt',
  default: '',
});
