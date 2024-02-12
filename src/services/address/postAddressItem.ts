import { privateApi } from '../index';
import { AddressData } from './getAddressList';

export interface AddressDataReq {
  shippingAddressName: string;
  recipientName: string;
  zipCode: string | null;
  address: string;
  addressDetail: string;
  contactNumber: string;
  isDefaultAddress: boolean;
}

// export interface AddressDataResp {
//   addrNo: number;
//   shippingAddressName: string;
//   recipientName: string;
//   zipCode: string;
//   address: string;
//   addressDetail: string;
//   contactNumber: string;
//   isDefaultAddress: boolean;
// }

export interface addressRequestType {
  data: AddressDataReq;
}

// 배송지 등록
export const postAddressItem = ({
  data,
}: addressRequestType): Promise<AddressData> => {
  return privateApi
    .post(`/api/v1/my/addresses`, data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
