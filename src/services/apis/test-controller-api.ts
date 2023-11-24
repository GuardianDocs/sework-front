/* tslint:disable */
/* eslint-disable */
/**
 * SeWork API
 * SeWork API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
/**
 * TestControllerApi - axios parameter creator
 * @export
 */
export const TestControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary test2
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        test2UsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/test/no-auth`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAUTH2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAUTH2", ["read", "write"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary test3
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        test3UsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/test/redis`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAUTH2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAUTH2", ["read", "write"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary test
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/test`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAUTH2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAUTH2", ["read", "write"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TestControllerApi - functional programming interface
 * @export
 */
export const TestControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TestControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary test2
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async test2UsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.test2UsingGET(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TestControllerApi.test2UsingGET']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary test3
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async test3UsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.test3UsingGET(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TestControllerApi.test3UsingGET']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary test
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testUsingGET(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TestControllerApi.testUsingGET']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * TestControllerApi - factory interface
 * @export
 */
export const TestControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TestControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary test2
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        test2UsingGET(options?: any): AxiosPromise<string> {
            return localVarFp.test2UsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary test3
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        test3UsingGET(options?: any): AxiosPromise<void> {
            return localVarFp.test3UsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary test
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testUsingGET(options?: any): AxiosPromise<string> {
            return localVarFp.testUsingGET(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TestControllerApi - object-oriented interface
 * @export
 * @class TestControllerApi
 * @extends {BaseAPI}
 */
export class TestControllerApi extends BaseAPI {
    /**
     * 
     * @summary test2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestControllerApi
     */
    public test2UsingGET(options?: AxiosRequestConfig) {
        return TestControllerApiFp(this.configuration).test2UsingGET(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary test3
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestControllerApi
     */
    public test3UsingGET(options?: AxiosRequestConfig) {
        return TestControllerApiFp(this.configuration).test3UsingGET(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary test
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestControllerApi
     */
    public testUsingGET(options?: AxiosRequestConfig) {
        return TestControllerApiFp(this.configuration).testUsingGET(options).then((request) => request(this.axios, this.basePath));
    }
}
