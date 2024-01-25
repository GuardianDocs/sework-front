import axios from 'axios';
import { load as fingerPrintJsLoad } from '@fingerprintjs/fingerprintjs';

import { getCookie } from 'cookies-next';

const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5_000, // request timeout
});

const getAccessToken = () => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    return accessToken;
  } else {
    // TODO: refresh token
    console.log('refreshToken');
  }

  return null;
};

const getFingerPrintUid = async () => {
  const fingerAgent = await fingerPrintJsLoad();
  const fingerPrintAgentResult = await fingerAgent.get();
  return fingerPrintAgentResult.visitorId;
};

service.interceptors.request.use(
  async config => {
    config.headers = config.headers ?? {};

    config.headers['X-SEWORK-PID'] = await getFingerPrintUid();

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
