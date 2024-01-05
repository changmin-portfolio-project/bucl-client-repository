import { api } from '../index';

interface putOrderConfirmResponse {
  data: string;
}

// my 주문내역 구매확정하기
export const putOrderConfirm = (
  orderCode: string,
): Promise<putOrderConfirmResponse> => {
  console.log(orderCode);
  return api
    .put(`/api/v1/orders/${orderCode}/confirmation`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
