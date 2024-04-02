import { LOGIN_PATH } from './PathVar';
import { SERVER_IP } from './SettingVar';

export const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID || ''; //NAVER CLIENT ID
export const NAVER_CALLBACK_URL = `${SERVER_IP}${LOGIN_PATH}`; //callback url
export const KAUTH_URL = process.env.REACT_APP_KAUTH_URL;
export const LOGIN_CODE_QUERY_PARAM = 'code';

export const NAVER_SEARCH_URL =
  'https://m.search.naver.com/search.naver?query=';
