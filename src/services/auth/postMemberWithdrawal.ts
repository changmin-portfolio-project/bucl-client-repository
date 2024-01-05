import { api } from '../index';

interface MemberWithdrawalResponse {
  data: {
    data: string;
  };
}

// 상품 찜하기
export const postMemberWithdrawal = (): Promise<MemberWithdrawalResponse> => {
  return api
    .post(`/api/v1/auth/member-withdrawal`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
