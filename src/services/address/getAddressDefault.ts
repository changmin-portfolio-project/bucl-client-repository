import { privateApi } from '../index';

export interface AddressData {
  id: number;
  shippingAddressName: string;
  recipientName: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  contactNumber: string;
  isDefaultAddress: boolean;
}

// 등록된 주소지 리스트 가져오기
export const getAddressDefault = (): Promise<AddressData> => {
  return privateApi
    .get(`/api/v1/my/addresses/default`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
