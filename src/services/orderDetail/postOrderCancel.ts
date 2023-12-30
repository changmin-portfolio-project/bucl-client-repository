import { api } from '..';

export interface postOrderCancelResponse {
  data: {
    orderCancelId: number;
    refundAmount: number;
    rewardUseAmount: number;
  };
}

// 주문 취소하기
export const postOrderCancel = (): Promise<postOrderCancelResponse> => {
  return api
    .post(`/api/v1/order-cancel`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
