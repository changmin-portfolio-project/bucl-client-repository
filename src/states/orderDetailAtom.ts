import { atom } from 'recoil';
import { OrderData } from '../services/orderDetail/getOrderInfo';
import { ShpAddrReg } from '../services/orderDetail/putAddress';

export const orderInfoAtom = atom<OrderData>({
  key: 'orderInfo',
  default: {
    orderDto: {
      productDto: {
        productName: '',
        productBrandName: '',
        imagePath: '',
        productCode: 0,
      },
      orderCode: '',
      orderDate: '',
      totalOrderAmount: 0,
      spentAmount: 0,
      rewardUseAmount: 0,
      purchaseOrderDtos: [],
      confirmed: false,
      orderStatus: '',
    },
    shpAddrDto: {
      recipientName: '',
      contactNumber: '',
      zipCode: '',
      address: '',
      addressDetail: '',
      memoContent: '',
    },
    shippingFee: 0,
    trackingNum: '',
    paymentMethod: '',
  },
});

export const shpAddrRegAtom = atom<ShpAddrReg>({
  key: 'shpAddrReg',
  default: {
    recipientName: '',
    zipCode: '',
    address: '',
    addressDetail: '',
    contactNumber: '',
  },
});

export const ordShpChangeModeAtom = atom<boolean>({
  key: 'ordShpChangeMode',
  default: false,
});
