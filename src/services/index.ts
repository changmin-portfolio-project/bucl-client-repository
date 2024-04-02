import axios from 'axios';
import {
  STATUS_NOT_FOUND,
  STATUS_OK,
  UNAUTHORIZED_NAME,
} from '../const/StatusCode';
import {
  CATEGORIES_PATH,
  HOME_PATH,
  LOGIN_PATH,
  MARKET_PATH,
  PRODUCT_PATH,
  REWARD_PRODUCTS_PATH,
} from '../const/PathVar';
import { CALLBACK_URL } from '../const/QueryParamVar';
import { ACCESS_TOKEN, INVALID_ACCESS_TOKEN } from '../const/LocalStorageVar';
import { SERVER_IP } from '../const/SettingVar';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': SERVER_IP,
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const formApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': SERVER_IP,
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const kauthApi = axios.create({
  baseURL: 'https://kauth.kakao.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export const privateApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const refreshApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': SERVER_IP,
    'Access-Control-Allow-Credentials': 'true',
  },
});

privateApi.interceptors.request.use((config) => {
  if (!config.headers) return config;

  const accessToken =
    localStorage.getItem(ACCESS_TOKEN) || INVALID_ACCESS_TOKEN;

  config.headers.authorization = `Bearer ${accessToken}`;

  return config;
});

privateApi.interceptors.response.use(
  // 200번대 응답이 올때 처리
  (response) => {
    return response;
  },

  async function error(error) {
    const {
      config,
      response: { status },
    } = error;

    //토큰이 만료되을 때
    if (status === 401) {
      if (error.response.data.statusCode === UNAUTHORIZED_NAME) {
        const originRequest = config;

        if (status !== 401 || config.sent) {
          return Promise.reject(error);
        }

        config.sent = 0;
        //리프레시 토큰 api
        const originResponse = await postRefreshToken()
          .then((response) => {
            //리프레시 토큰 요청이 성공할 때

            if (response.status === STATUS_OK) {
              const newAccessToken = response.accessToken;
              localStorage.setItem(ACCESS_TOKEN, newAccessToken);

              //진행중이던 요청 이어서하기
              originRequest.headers.authorization = `Bearer ${newAccessToken}`;
              return axios(originRequest);

              //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
            } else if (response.status === STATUS_NOT_FOUND) {
              window.location.replace(HOME_PATH);
            } else {
              alert('오류가 났습니다.');
              throw error;
            }
          })
          .catch(() => {
            const currentPath = window.location.pathname;
            const apiUrl = originRequest.url;
            console.log(apiUrl);
            if (
              apiUrl !== '/api/v1/wishes' &&
              (currentPath === HOME_PATH ||
                currentPath.includes(CATEGORIES_PATH) ||
                currentPath.includes(MARKET_PATH) ||
                currentPath.includes(REWARD_PRODUCTS_PATH) ||
                currentPath.startsWith(PRODUCT_PATH))
            ) {
              localStorage.setItem(ACCESS_TOKEN, '');

              originRequest.headers.authorization = '';
              return axios(originRequest);
            } else {
              window.location.replace(
                `${LOGIN_PATH}?${CALLBACK_URL}=` + currentPath,
              );
            }
          });
        return originResponse;
      }
    }
  },
);

formApi.interceptors.request.use((config) => {
  if (!config.headers) return config;
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (accessToken !== null) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
});

formApi.interceptors.response.use(
  // 200번대 응답이 올때 처리
  (response) => {
    return response;
  },

  async function error(error) {
    const {
      config,
      response: { status },
    } = error;

    //토큰이 만료되을 때
    if (status === 401) {
      if (error.response.data.statusCode === UNAUTHORIZED_NAME) {
        const originRequest = config;

        const currentPath = window.location.pathname;

        if (currentPath === HOME_PATH) {
          return;
        }

        if (config.sent) {
          return Promise.reject(error);
        }

        config.sent = 0;
        //리프레시 토큰 api

        await postRefreshToken()
          .then((response) => {
            //리프레시 토큰 요청이 성공할 때
            if (response.status === STATUS_OK) {
              const newAccessToken = response.accessToken;
              localStorage.setItem(ACCESS_TOKEN, newAccessToken);

              //진행중이던 요청 이어서하기
              originRequest.headers.authorization = `Bearer ${newAccessToken}`;

              return axios(originRequest);
            } else if (response.status === STATUS_NOT_FOUND) {
              window.location.replace(HOME_PATH);
            } else {
              alert('오류가 났습니다.');
              throw error;
            }
          })
          .catch(() => {
            //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
            window.location.replace(LOGIN_PATH);
          });
      }
    }
    return Promise.reject(error);
  },
);

interface postRefreshRes {
  accessToken: string;
  status: number;
}

export async function postRefreshToken(): Promise<postRefreshRes> {
  try {
    const response = await refreshApi.post('/api/v1/auth/renewal/tokens');

    return {
      accessToken: response.data.data,
      status: response.status,
    };
  } catch (err) {
    console.error(err);

    throw err;
  }
}
