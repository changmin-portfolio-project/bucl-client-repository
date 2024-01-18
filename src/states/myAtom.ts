import { atom } from 'recoil';
import { UserData } from '../services/my/getUserProfile';

export const myUserInfoAtom = atom<UserData>({
  key: 'myUserInfo',
  default: {
    profilePath: '',
    nickname: '',
  },
});
