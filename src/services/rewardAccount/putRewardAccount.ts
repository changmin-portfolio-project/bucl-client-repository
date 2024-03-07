import { privateApi } from '../index';

export interface putRewardAccountProps {
  bankName: string;
  accountNum: string;
}
// 인출하기
export const putRewardAccount = (
  data: putRewardAccountProps,
): Promise<boolean> => {
  return privateApi
    .put(`/api/v1/rewards/account`, data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
