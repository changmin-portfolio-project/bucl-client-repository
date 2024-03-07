import { privateApi } from '..';

export interface postOrderCancelResponse {
  data: {
    orderCancelId: number;
    refundAmount: number;
    rewardUseAmount: number;
  };
}

// 주문 취소하기
export const postOrderCancel = (
  order_code: string,
): Promise<postOrderCancelResponse> => {
  return privateApi
    .post(`/api/v1/order-cancels/${order_code}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
