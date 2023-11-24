import * as OpenApiInstance from '@/services';

const { NODE_ENV } = process.env;

const getBasePath = () => {
  switch (NODE_ENV) {
    case 'development':
      return 'https://api-dev.iras.kr';
    case 'production':
      return 'https://api.iras.kr';
    default:
      return 'https://api-dev.iras.kr';
  }
};

// get localStroage
const loginInfoLocalStorage = localStorage.getItem('loginInfo');
const loginInfo = loginInfoLocalStorage ? JSON.parse(loginInfoLocalStorage) : null;

// get accessToken
const accessToken = loginInfo?.state?.accessToken;

const apiConfigurationParams: OpenApiInstance.ConfigurationParameters = {
  basePath: getBasePath(),
  baseOptions: {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  },
};

// accessToken이 없으면 헤더에서 제거
if (!accessToken) {
  delete apiConfigurationParams.baseOptions.headers.Authorization;
}

const apiConfiguration: OpenApiInstance.Configuration = new OpenApiInstance.Configuration(apiConfigurationParams);

export const TestApi = new OpenApiInstance.TestControllerApi(apiConfiguration);
export const DefaultApi = new OpenApiInstance.DefaultApi(apiConfiguration);
export const Step1Api = new OpenApiInstance.Class1Api(apiConfiguration);
export const Step2Api = new OpenApiInstance.Class2Api(apiConfiguration);
export const Step34Api = new OpenApiInstance.Class34Api(apiConfiguration);
