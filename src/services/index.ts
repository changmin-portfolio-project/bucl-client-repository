import axios from 'axios';
import { Cookies } from 'react-cookie';
import { ACCESS_TOKEN } from '../const/CookieVars';

const cookies = new Cookies();

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
    Authorization: `Bearer ${cookies.get(ACCESS_TOKEN)}`,
  },
});

export const formApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
