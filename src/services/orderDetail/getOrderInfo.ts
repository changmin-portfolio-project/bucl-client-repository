import { api } from '../index';

export interface OrderData {
  orderDate: string;
  productName: string;
  imagePath: string;
  consumerOrder: number;
  salePrice: number;
  productOrderQty: number;
  recipientName: string;
  contactNumber: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  memoContent: string;
  pgProvider: string;
  paymentMethod: string;
  paymentStatus: string;
  rewardUseAmount: number;
  shippingFee: number;
  totalOrderAmount: number;
  brandName: string;
  confirmed: boolean;
}

// interface getOrderDetailResponse {
//   OrderData;
// }

// 주문 상세정보 가져오기
export const getOrderDetail = (order_code: string): Promise<OrderData> => {
  return api
    .get(`/api/v1/orders/${order_code}`)
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
