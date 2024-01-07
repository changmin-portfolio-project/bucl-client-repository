import { atom } from 'recoil';
import { PAGE_NUM } from '../const/Pagenation';
import { RewardData } from '../services/reward/getPointHistory';

export const rwdUseAmtAtom = atom<number>({
  key: 'rwdUseAmt',
  default: 0,
});

export const pointHistoryPageNumAtom = atom<number>({
  key: 'pointHistoryPageNum',
  default: PAGE_NUM,
});

export const pointHistoryListAtom = atom<RewardData[]>({
  key: 'pointHistoryList',
  default: [],
});
