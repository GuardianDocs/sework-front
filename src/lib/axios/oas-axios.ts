import * as OpenApiInstance from '@/services';
import axiosInstance from '@/lib/axios/axiosInstance';

const getBasePath = () => {
  const { NODE_ENV } = process.env;
  switch (NODE_ENV) {
    case 'development':
      return 'https://api-dev.iras.kr';
    case 'production':
      return 'https://api.iras.kr';
    default:
      return 'https://api-dev.iras.kr';
  }
};

const createApiConfiguration = () => {
  const apiConfigurationParams: OpenApiInstance.ConfigurationParameters = {
    baseOptions: {},
  };

  return new OpenApiInstance.Configuration(apiConfigurationParams);
};

const apiConfiguration = createApiConfiguration();

export const TestApi = new OpenApiInstance.TestControllerApi(apiConfiguration, getBasePath(), axiosInstance);
export const DefaultApi = new OpenApiInstance.DefaultApi(apiConfiguration, getBasePath(), axiosInstance);
export const Step1Api = new OpenApiInstance.Class1Api(apiConfiguration, getBasePath(), axiosInstance);
export const Step2Api = new OpenApiInstance.Class2Api(apiConfiguration, getBasePath(), axiosInstance);
export const Step34Api = new OpenApiInstance.Class34Api(apiConfiguration, getBasePath(), axiosInstance);
