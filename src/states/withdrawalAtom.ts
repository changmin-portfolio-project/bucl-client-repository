import { atom } from 'recoil';
import { PAGE_NUM } from '../const/Pagenation';
import { RewardData } from '../services/withdrawal/getWithdrawalHistory';
import { RewardAccount } from '../services/withdrawal/getRewardAccount';

export const accountAtom = atom<string>({
  key: 'account',
  default: '',
});

export const withdrawalHistoryPageNumAtom = atom<number>({
  key: 'withdrawalHistoryPageNum',
  default: PAGE_NUM,
});

export const withdrawalHistoryListAtom = atom<RewardData[]>({
  key: 'withdrawalHistoryList',
  default: [],
});

export const withdrawalPointAtom = atom<string>({
  key: 'withdrawalPoint',
  default: '',
});

export const rewardAccountAtom = atom<RewardAccount>({
  key: 'rewardAccount',
  default: {
    bankName: '',
    bankCode: '',
    accountNum: '',
    accountHolderName: '',
  },
});
