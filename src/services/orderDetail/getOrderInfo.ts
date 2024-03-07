import { privateApi } from '../index';
import { OrderDto } from '../myOrder/getOrderHistory';

export interface ShpAddrDto {
  recipientName: string;
  contactNumber: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  memoContent: string;
}

export interface OrderData {
  orderDto: OrderDto;
  shpAddrDto: ShpAddrDto;
  shippingFee: number;
  trackingNum: string;
  paymentMethod: string;
}

// interface getOrderDetailResponse {
//   OrderData;
// }

// 주문 상세정보 가져오기
export const getOrderDetail = (order_code: string): Promise<OrderData> => {
  return privateApi
    .get(`/api/v1/orders/${order_code}`)
    .then((res) => {
      console.log(res.data);
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
