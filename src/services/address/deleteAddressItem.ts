import { api } from '../index';

// 배송지 아이템 삭제
export const deleteAddressItem = (addr_no: number): Promise<number> => {
  return api
    .delete(`/api/v1/my/addresses/${addr_no}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};
