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
 * S3ControllerApi - axios parameter creator
 * @export
 */
export const S3ControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary createDummy
         * @param {File} file file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDummyUsingPOST: async (file: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('createDummyUsingPOST', 'file', file)
            const localVarPath = `/api/s3`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAUTH2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAUTH2", ["read", "write"], configuration)


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * S3ControllerApi - functional programming interface
 * @export
 */
export const S3ControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = S3ControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary createDummy
         * @param {File} file file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDummyUsingPOST(file: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDummyUsingPOST(file, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['S3ControllerApi.createDummyUsingPOST']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * S3ControllerApi - factory interface
 * @export
 */
export const S3ControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = S3ControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary createDummy
         * @param {File} file file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDummyUsingPOST(file: File, options?: any): AxiosPromise<void> {
            return localVarFp.createDummyUsingPOST(file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * S3ControllerApi - object-oriented interface
 * @export
 * @class S3ControllerApi
 * @extends {BaseAPI}
 */
export class S3ControllerApi extends BaseAPI {
    /**
     * 
     * @summary createDummy
     * @param {File} file file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof S3ControllerApi
     */
    public createDummyUsingPOST(file: File, options?: AxiosRequestConfig) {
        return S3ControllerApiFp(this.configuration).createDummyUsingPOST(file, options).then((request) => request(this.axios, this.basePath));
    }
}
