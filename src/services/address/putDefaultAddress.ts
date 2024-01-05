import { api } from '../index';

interface AddressData {
  id: number;
  shippingAddressName: string;
  recipientName: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  contactNumber: string;
  isDefaultAddress: boolean;
}

// 기본 배송지 변경
export const putDefaultAddress = (id: number): Promise<AddressData> => {
  return api
    .put(`/api/v1/my/addresses/${id}/default`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
