/*
import axios from 'axios';
import { interceptors } from './interceptors';

axios.defaults.withCredentials = true;

const baseApi = (url: any, options?: any) => {
  return axios.create({ baseURL: url, ...options });
};

const authApi = (url: any, options?: any) => {
  const instance = axios.create({ baseURL: url, ...options });
  interceptors(instance);
  return instance;
};

export const baseInstance = baseApi(process.env.NEXT_PUBLIC_API_URL);
export const authInstance = authApi(process.env.NEXT_PUBLIC_API_URL);
*/
