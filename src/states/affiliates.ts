import { atom } from 'recoil';
import { postSalesInfoRes } from '../services/affiliates/postSalesInfo';

export const isAgreedAtom = atom<boolean>({
  key: 'isAgreed',
  default: false,
});

export const salesInfoAtom = atom<postSalesInfoRes>({
  key: 'salesInfo',
  default: {
    name: '',
    brandName: '',
    imagePath: [''],
    reward: 0,
    affiliateUrl: '',
    deadline: '',
  },
});
