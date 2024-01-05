import { atom } from 'recoil';
import { OrderDto } from '../services/myOrder/getOrderHistory';
import { PAGE_NUM } from '../const/Pagenation';

export const orderHistoryListAtom = atom<OrderDto[]>({
  key: 'orderHistoryList',
  default: [],
});

export const orderHistoryPageNumAtom = atom<number>({
  key: 'orderHistoryPageNum',
  default: PAGE_NUM,
});

export const purchaseConfirmPopupAtom = atom<string>({
  key: 'purchaseConfirmPopup',
  default: '',
});
