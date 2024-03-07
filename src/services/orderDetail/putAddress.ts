/* eslint-disable @typescript-eslint/no-unused-vars */
import { privateApi } from '..';

export interface ShpAddrReg {
  recipientName: string;
  zipCode: string | null;
  address: string;
  addressDetail: string;
  contactNumber: string;
}

// 주문 상세에서 배송지 변경
export const putAddress = (
  order_code: string,
  data: ShpAddrReg,
): Promise<ShpAddrReg> => {
  return privateApi
    .put(`/api/v1/orders/${order_code}/address`, data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
