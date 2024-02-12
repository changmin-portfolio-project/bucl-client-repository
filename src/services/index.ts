import axios from 'axios';
import { STATUS_NOT_FOUND, STATUS_OK } from '../const/StatusCode';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export const formApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const kauthApi = axios.create({
  baseURL: 'https://kauth.kakao.com',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    accept: 'application/json,',
  },
});

export const privateApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const refreshApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true,
});

privateApi.interceptors.request.use((config) => {
  if (!config.headers) return config;
  const accessToken = localStorage.getItem('access-token');

  if (accessToken !== null) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

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
      if (error.response.data.statusCode === 'UNAUTHORIZED') {
        const originRequest = config;

        // const currentPath = window.location.pathname;

        // if (currentPath === '/' || currentPath === '/categories') {
        //   originRequest.headers.authorization = '';
        //   return axios(originRequest);
        // }

        if (status !== 401 || config.sent) {
          return Promise.reject(error);
        }

        config.sent = 0;
        //리프레시 토큰 api
        await postRefreshToken()
          .then((response) => {
            //리프레시 토큰 요청이 성공할 때

            console.log(response.status);

            if (response.status === STATUS_OK) {
              const newAccessToken = response.accessToken;
              localStorage.setItem('access-token', newAccessToken);

              //진행중이던 요청 이어서하기
              originRequest.headers.authorization = `Bearer ${newAccessToken}`;
              return axios(originRequest);

              //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
            } else if (response.status === STATUS_NOT_FOUND) {
              window.location.replace('/');
            } else {
              alert('오류가 났습니다.');
              throw error;
            }
          })
          .catch(() => {
            window.location.replace('/login');
          });
      }
    }
    return Promise.reject(error);
  },
);

formApi.interceptors.request.use((config) => {
  if (!config.headers) return config;
  const accessToken = localStorage.getItem('access-token');

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
      if (error.response.data.statusCode === 'UNAUTHORIZED') {
        const originRequest = config;

        const currentPath = window.location.pathname;

        if (currentPath === '/') {
          return;
        }

        if (status !== 401 || config.sent) {
          return Promise.reject(error);
        }

        config.sent = 0;
        //리프레시 토큰 api
        await postRefreshToken()
          .then((response) => {
            //리프레시 토큰 요청이 성공할 때
            if (response.status === STATUS_OK) {
              const newAccessToken = response.accessToken;
              localStorage.setItem('access-token', newAccessToken);

              //진행중이던 요청 이어서하기
              originRequest.headers.authorization = `Bearer ${newAccessToken}`;
              return axios(originRequest);

              //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
            } else if (response.status === STATUS_NOT_FOUND) {
              window.location.replace('/');
            } else {
              alert('오류가 났습니다.');
              throw error;
            }
          })
          .catch(() => {
            window.location.replace('/login');
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
    // const data = response.data.data;
    // formApi.defaults.headers.common['Authorization'] =
    //   `Bearer ${data.daccessToken}`;
    // privateApi.defaults.headers.common['Authorization'] =
    //   `Bearer ${data.daccessToken}`;

    return {
      accessToken: response.data.data,
      status: response.status,
    };
  } catch (err) {
    console.log(err);

    throw err;
  }
}
