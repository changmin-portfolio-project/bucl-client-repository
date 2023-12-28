import { api } from '../index';

export interface UserImg {
  profilePath: string;
}

export interface putProfileImgResponse {
  data: UserImg;
}

// 유저 프로필 이미지 변경
export const putProfileImg = (): Promise<putProfileImgResponse> => {
  return api
    .put(`/api/v1/my/profile`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
