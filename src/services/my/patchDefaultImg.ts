import { api } from '../index';

// 유저 프로핑 사진 기본 이미지로 변경
export const patchDefaultImg = (): Promise<string> => {
  return api
    .patch(`/api/v1/my/profile/default-image`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
