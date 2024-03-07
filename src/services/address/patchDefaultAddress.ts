import { privateApi } from '../index';

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
export const patchDefaultAddress = (id: number): Promise<AddressData> => {
  return privateApi
    .patch(`/api/v1/my/addresses/${id}/default`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
