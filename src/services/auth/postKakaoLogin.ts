// import axios from 'axios';
import { api } from '..';
import { ACCESS_TOKEN } from '../../const/LocalStorageVar';

interface postKakaoLoginRes {
  data: string;
  statusCode: string;
  message: string;
}

interface postKakaoLoginReq {
  kakaoAccessToken: string;
}

// Point 가져오기
export const postKakaoLogin = (
  kakaoAccessToken: string,
): Promise<postKakaoLoginRes> => {
  const data: postKakaoLoginReq = {
    kakaoAccessToken: kakaoAccessToken,
  };

  return api
    .post(`/api/v1/auth/login/kakao`, data)
    .then((res) => {
      const accessToken = res.data.data;

      localStorage.setItem(ACCESS_TOKEN, accessToken);

      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
