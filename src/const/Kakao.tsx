import { LOGIN_PATH } from './PathVar';
import { SERVER_IP } from './SettingVar';

export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY || ''; //REST API KEY
export const REDIRECT_URI = `${SERVER_IP}${LOGIN_PATH}`; //Redirect URI
export const KAKAO_SDK_KEY = process.env.REACT_APP_KAKAO_SDK_KEY || '';
export const KAUTH_URL = process.env.REACT_APP_KAUTH_URL;
export const LOGIN_CODE_QUERY_PARAM = 'code';
