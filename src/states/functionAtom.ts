import { atom } from 'recoil';

export const confirmPopupAtom = atom<boolean>({
  key: 'confirmPopupPopup',
  default: false,
});
