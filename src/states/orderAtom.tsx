import { atom } from 'recoil';
import { OrderPaymentType } from '../global/interface/OrderInterface';
import { FALSE_STRING } from '../const/SessionStorageVars';

export interface ordAddr {
  shippingAddressNam: string;
  recipientName: string;
  locationName: string;
  address: string;
  contactNum: string;
  detailAddress: string;
  zipCode: string;
}

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

export const ordPayDataAtom = atom<OrderPaymentType>({
  key: 'ordPayData',
  default: {
    rwdUseAmt: 0,
    rwdCrntAmt: 0,
    pgCode: '',
    memoCnt: '',
    addrDetail: '',
    proctCode: 0,
    proctImg: '',
    proctNom: '',
    proctBrn: '',
    skuCode: 0,
    proctOptAmt: 0,
    proctOptQty: 0,
    proctOptNom: '',
    rcpntNom: '',
    cntctNum: '',
    addr: '',
    zipCode: '',
    shippingAddressName: '',
    shpFee: 0,
    ordTotAmt: 0,
    totProcAmt: 0,
    totalAmount: 0,
    spentAmount: 0,
    cnsmrAmt: 0,
    proctSlPx: 0,
    isNewAddr: FALSE_STRING,
  },
});
