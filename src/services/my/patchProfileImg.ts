import { formApi } from '../index';

export interface UserImg {
  profilePath: string;
}

// export interface putProfileImgResponse {
//   data: UserImg;
// }

// 유저 프로필 이미지 변경
export const patchProfileImg = (formData: FormData): Promise<UserImg> => {
  return formApi
    .patch(`/api/v1/my/profile/image`, formData)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
