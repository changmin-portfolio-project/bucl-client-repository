import axios from 'axios';

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
