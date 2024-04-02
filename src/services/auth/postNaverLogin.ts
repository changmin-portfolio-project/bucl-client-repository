// import axios from 'axios';
import { api } from '..';
import { ACCESS_TOKEN } from '../../const/LocalStorageVar';

interface postNaverLoginRes {
  data: string;
  statusCode: string;
  message: string;
}

interface postNaverLoginReq {
  naverAccessToken: string;
}

// Point 가져오기
export const postNaverLogin = (
  naverAccessToken: string,
): Promise<postNaverLoginRes> => {
  const data: postNaverLoginReq = {
    naverAccessToken: naverAccessToken,
  };

  return api
    .post(`/api/v1/auth/login/naver`, data)
    .then((res) => {
      const accessToken = res.data.data;

      localStorage.setItem(ACCESS_TOKEN, accessToken);

      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
