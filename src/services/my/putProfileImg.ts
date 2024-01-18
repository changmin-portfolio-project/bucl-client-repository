import { formApi } from '../index';

export interface UserImg {
  profilePath: string;
}

// export interface putProfileImgResponse {
//   data: UserImg;
// }

// 유저 프로필 이미지 변경
export const putProfileImg = (formData: FormData): Promise<UserImg> => {
  console.log(formData);
  console.log(formData.keys().next());

  return formApi
    .put(`/api/v1/my/profile`, formData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
