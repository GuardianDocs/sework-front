/*
import useAuthStore from '@/services/stores/auth';

export const interceptors = (instance: any) => {
  instance.interceptors.request.use(
    (config: any) => {
      const { accessToken } = useAuthStore.getState();
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.withCredentials = true;
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response: any) => {
      console.log(response);
      return response;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
  return instance;
};
*/
