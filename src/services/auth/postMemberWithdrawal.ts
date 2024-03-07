import { privateApi } from '../index';

interface MemberWithdrawalResponse {
  data: {
    data: string;
  };
}

// 회원 탈퇴
export const postMemberWithdrawal = (): Promise<MemberWithdrawalResponse> => {
  return privateApi
    .post(`/api/v1/auth/member-withdrawal`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
