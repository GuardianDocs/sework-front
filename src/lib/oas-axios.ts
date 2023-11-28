import * as OpenApiInstance from '@/services';

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

const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    const loginInfoLocalStorage = localStorage.getItem('loginInfo');
    const loginInfo = loginInfoLocalStorage ? JSON.parse(loginInfoLocalStorage) : null;
    return loginInfo?.state?.accessToken;
  }
  return null;
};
const createApiConfiguration = () => {
  const accessToken = getAccessToken();
  const apiConfigurationParams: OpenApiInstance.ConfigurationParameters = {
    basePath: getBasePath(),
    baseOptions: {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  };

  if (!accessToken) {
    delete apiConfigurationParams.baseOptions.headers.Authorization;
  }

  return new OpenApiInstance.Configuration(apiConfigurationParams);
};

const apiConfiguration = createApiConfiguration();

export const TestApi = new OpenApiInstance.TestControllerApi(apiConfiguration);
export const DefaultApi = new OpenApiInstance.DefaultApi(apiConfiguration);
export const Step1Api = new OpenApiInstance.Class1Api(apiConfiguration);
export const Step2Api = new OpenApiInstance.Class2Api(apiConfiguration);
export const Step34Api = new OpenApiInstance.Class34Api(apiConfiguration);
