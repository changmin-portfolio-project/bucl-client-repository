import { privateApi } from '../index';

interface putOrderConfirmResponse {
  data: string;
}

// my 주문내역 구매확정하기
export const putOrderConfirm = (
  orderCode: string,
): Promise<putOrderConfirmResponse> => {
  return privateApi
    .put(`/api/v1/orders/${orderCode}/confirmation`)
    .then((res) => {
      return res.data;
    });
};
