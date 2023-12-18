import axios from 'axios';

const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5_000, // request timeout
});

// TODO: accessToken을 어떻게 관리할지 고민해보자.
const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    const loginInfoLocalStorage = localStorage.getItem('loginInfo');
    const loginInfo = loginInfoLocalStorage ? JSON.parse(loginInfoLocalStorage) : null;
    return loginInfo?.state?.accessToken;
  }
  return null;
};

service.interceptors.request.use(
  config => {
    config.headers = config.headers ?? {};

    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      config.headers['Accept'] = 'application/json';
    }

    return config;
  },
  error => {
    console.error(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error); // for debug
    return Promise.reject(error);
  }
);

export default service;
