import { privateApi } from '../index';

export interface UserImg {
  profilePath: string;
}

// 유저 프로핑 사진 기본 이미지로 변경
export const patchDefaultImg = (): Promise<UserImg> => {
  return privateApi
    .patch(`/api/v1/my/profile/default-image`)
    .then((res) => {
      console.log(res);
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
