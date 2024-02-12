import { privateApi } from '../index';

export interface AddressData {
  shippingAddressName: string;
  recipientName: string;
  zipCode: string | null;
  address: string;
  addressDetail: string;
  contactNumber: string;
  isDefaultAddress: boolean;
}

export interface addressRequestType {
  data: AddressData;
  id: number;
}

// 배송지 등록
export const putAddressUpdate = (
  data: AddressData,
  id: number,
): Promise<AddressData[]> => {
  return privateApi
    .put(`/api/v1/my/addresses/${id}`, data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
