import { atom } from 'recoil';

export const accountNumAtom = atom<string>({
  key: 'accountNum',
  default: '',
});

export const bankerNameAtom = atom<string>({
  key: 'bankerName',
  default: '',
});

export const completeBooleanAtom = atom<boolean>({
  key: 'completeBoolean',
  default: false,
});
