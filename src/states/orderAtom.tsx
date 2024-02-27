import { atom } from 'recoil';

export interface ordAddr {
  shippingAddressNam: string;
  recipientName: string;
  locationName: string;
  address: string;
  contactNum: string;
  detailAddress: string;
  zipCode: string;
}

export const addrDetailAtom = atom<string>({
  key: 'addrDetail',
  default: '',
});

export const memoCntAtom = atom<string>({
  key: 'memoCnt',
  default: '',
});

export const isAdressSelectPageAtom = atom<boolean>({
  key: 'isAdressSelectPage',
  default: false,
});

export const ordAddrAtom = atom<ordAddr>({
  key: 'ordAddr',
  default: {
    shippingAddressNam: '',
    recipientName: '',
    locationName: '',
    address: '',
    contactNum: '',
    detailAddress: '',
    zipCode: '',
  },
});

export const crntOrdAddrNumAtom = atom<number>({
  key: 'currentOrdAddrNum',
  default: 0,
});

export const isNewOrdAddrAtom = atom<boolean>({
  key: 'isNewOrdAddr',
  default: false,
});

export const ordAddrSearchPopupVisibleAtom = atom<boolean>({
  key: 'ordAddrSearchPopupVisible',
  default: false,
});
