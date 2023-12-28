import { api } from '../index';

export interface UserData {
  profilePath: string;
  nickname: string;
}

export interface getPointResponseResponse {
  data: UserData;
}

// 유저 프로핑 가져오기
export const getUserProfile = (): Promise<getPointResponseResponse> => {
  return api
    .get(`/api/v1/my/profile`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
