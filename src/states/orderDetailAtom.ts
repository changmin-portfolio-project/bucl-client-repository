import { atom } from 'recoil';
import { OrderData } from '../services/orderDetail/getOrderInfo';

export const orderInfoAtom = atom<OrderData>({
  key: 'orderInfo',
  default: {
    orderDate: '',
    productName: '',
    imagePath: '',
    consumerOrder: 0,
    salePrice: 0,
    productOrderQty: 0,
    recipientName: '',
    contactNumber: '',
    zipCode: '',
    address: '',
    addressDetail: '',
    memoContent: '',
    pgProvider: '',
    paymentMethod: '',
    paymentStatus: '',
    rewardUseAmount: 0,
    shippingFee: 0,
    totalOrderAmount: 0,
  },
});
