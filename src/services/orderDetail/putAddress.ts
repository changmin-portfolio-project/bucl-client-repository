/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from '..';
import { AddressDataReq } from '../address/postAddressItem';

export interface putAddressRes {
  recipientNam: '창민';
  contactNumber: '010-xxxx-xxxx';
  zipCode: '45433';
  address: '경기도 화성시 ';
  addressDetail: '정남면';
}

// 주문 상세에서 배송지 변경
export const putAddress = (
  order_code: string,
  data: AddressDataReq,
): Promise<putAddressRes> => {
  const { shippingAddressName, ...newObject } = data;
  console.log(newObject);
  return api
    .put(`/api/v1/orders/${order_code}/address`, data)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
