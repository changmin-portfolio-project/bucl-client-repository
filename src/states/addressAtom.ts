import { atom } from 'recoil';
import { AddressData } from '../services/address/getAddressList';

export const currentAddressNumAtom = atom<number>({
  key: 'currentAddressNum',
  default: 0,
});

export const editRegistrationModeAtom = atom<boolean>({
  key: 'editRegistrationMode',
  default: false,
});

export interface addrRegForm {
  recipientName: string;
  locationName: string;
  address: string;
  detailAddress: string;
  firstPhoneNum: string;
  middlePhoneNum: string;
  lastPhoneNum: string;
  zipCode: string;
}

export const addrRegFormAtom = atom<addrRegForm>({
  key: 'addrRegForm',
  default: {
    recipientName: '',
    locationName: '',
    address: '',
    detailAddress: '',
    firstPhoneNum: '',
    middlePhoneNum: '',
    lastPhoneNum: '',
    zipCode: '',
  },
});

export const isDefaultAddressAtom = atom<boolean>({
  key: 'isDefaultAddress',
  default: false,
});

export const searchPopupVisibleAtom = atom<boolean>({
  key: 'searchPopupVisible',
  default: false,
});

export const addressListAtom = atom<AddressData[]>({
  key: 'addressList',
  default: [],
});
