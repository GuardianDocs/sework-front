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
// @ts-ignore
import { ResponseResult } from '../models';
// @ts-ignore
import { ResponseResultGetCompanyDangerFactorAndSolutionResponse } from '../models';
// @ts-ignore
import { ResponseResultRecommendDangerSolutionResponse } from '../models';
// @ts-ignore
import { ResponseResultUpsertCompanyDangerSolutionResponse } from '../models';
// @ts-ignore
import { UpdateCompanyDangerFactorAfterRiskRequest } from '../models';
// @ts-ignore
import { UpdateCompanyDangerFactorRiskRequest } from '../models';
// @ts-ignore
import { UpsertCompanyDangerSolutionRequest } from '../models';
/**
 * Class34Api - axios parameter creator
 * @export
 */
export const Class34ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 조회
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 조회
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyDangerFactorAndSolutionUsingGET: async (assessmentId: number, companyProcessId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assessmentId' is not null or undefined
            assertParamExists('getCompanyDangerFactorAndSolutionUsingGET', 'assessmentId', assessmentId)
            // verify required parameter 'companyProcessId' is not null or undefined
            assertParamExists('getCompanyDangerFactorAndSolutionUsingGET', 'companyProcessId', companyProcessId)
            const localVarPath = `/api/assessment/v1/company/{assessmentId}/danger-solution`
                .replace(`{${"assessmentId"}}`, encodeURIComponent(String(assessmentId)));
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

            if (companyProcessId !== undefined) {
                localVarQueryParameter['companyProcessId'] = companyProcessId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
         * @param {number} assessmentId assessmentId
         * @param {number} companyDangerFactorId companyDangerFactorId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recommendDangerSolutionUsingGET: async (assessmentId: number, companyDangerFactorId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assessmentId' is not null or undefined
            assertParamExists('recommendDangerSolutionUsingGET', 'assessmentId', assessmentId)
            // verify required parameter 'companyDangerFactorId' is not null or undefined
            assertParamExists('recommendDangerSolutionUsingGET', 'companyDangerFactorId', companyDangerFactorId)
            const localVarPath = `/api/assessment/v1/company/{assessmentId}/danger-solution/recommend`
                .replace(`{${"assessmentId"}}`, encodeURIComponent(String(assessmentId)));
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

            if (companyDangerFactorId !== undefined) {
                localVarQueryParameter['companyDangerFactorId'] = companyDangerFactorId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 안전 위험 평가 4 단계 개선 후 위험성 수정
         * @summary 안전 위험 평가 4 단계 개선 후 위험성 수정
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {UpdateCompanyDangerFactorAfterRiskRequest} [updateCompanyDangerFactorAfterRiskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCompanyDangerFactorAfterRiskUsingPUT: async (assessmentId: number, companyProcessId: number, updateCompanyDangerFactorAfterRiskRequest?: UpdateCompanyDangerFactorAfterRiskRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assessmentId' is not null or undefined
            assertParamExists('updateCompanyDangerFactorAfterRiskUsingPUT', 'assessmentId', assessmentId)
            // verify required parameter 'companyProcessId' is not null or undefined
            assertParamExists('updateCompanyDangerFactorAfterRiskUsingPUT', 'companyProcessId', companyProcessId)
            const localVarPath = `/api/assessment/v1/company/{assessmentId}/danger-solution/after-risk`
                .replace(`{${"assessmentId"}}`, encodeURIComponent(String(assessmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAUTH2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAUTH2", ["read", "write"], configuration)

            if (companyProcessId !== undefined) {
                localVarQueryParameter['companyProcessId'] = companyProcessId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCompanyDangerFactorAfterRiskRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 안전 위험 평가 3 위험성 수정
         * @summary 안전 위험 평가 3 위험성 수정
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {UpdateCompanyDangerFactorRiskRequest} [updateCompanyDangerFactorRiskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCompanyDangerFactorAfterRiskUsingPUT1: async (assessmentId: number, companyProcessId: number, updateCompanyDangerFactorRiskRequest?: UpdateCompanyDangerFactorRiskRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assessmentId' is not null or undefined
            assertParamExists('updateCompanyDangerFactorAfterRiskUsingPUT1', 'assessmentId', assessmentId)
            // verify required parameter 'companyProcessId' is not null or undefined
            assertParamExists('updateCompanyDangerFactorAfterRiskUsingPUT1', 'companyProcessId', companyProcessId)
            const localVarPath = `/api/assessment/v1/company/{assessmentId}/danger-solution/risk`
                .replace(`{${"assessmentId"}}`, encodeURIComponent(String(assessmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAUTH2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAUTH2", ["read", "write"], configuration)

            if (companyProcessId !== undefined) {
                localVarQueryParameter['companyProcessId'] = companyProcessId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCompanyDangerFactorRiskRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 입력, 수정, 삭제
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 입력, 수정, 삭제
         * @param {number} assessmentId assessmentId
         * @param {number} companyDangerFactorId companyDangerFactorId
         * @param {UpsertCompanyDangerSolutionRequest} [upsertCompanyDangerSolutionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        upsertCompanyDangerSolutionUsingPUT: async (assessmentId: number, companyDangerFactorId: number, upsertCompanyDangerSolutionRequest?: UpsertCompanyDangerSolutionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assessmentId' is not null or undefined
            assertParamExists('upsertCompanyDangerSolutionUsingPUT', 'assessmentId', assessmentId)
            // verify required parameter 'companyDangerFactorId' is not null or undefined
            assertParamExists('upsertCompanyDangerSolutionUsingPUT', 'companyDangerFactorId', companyDangerFactorId)
            const localVarPath = `/api/assessment/v1/company/{assessmentId}/danger-solution`
                .replace(`{${"assessmentId"}}`, encodeURIComponent(String(assessmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAUTH2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAUTH2", ["read", "write"], configuration)

            if (companyDangerFactorId !== undefined) {
                localVarQueryParameter['companyDangerFactorId'] = companyDangerFactorId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(upsertCompanyDangerSolutionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * Class34Api - functional programming interface
 * @export
 */
export const Class34ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = Class34ApiAxiosParamCreator(configuration)
    return {
        /**
         * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 조회
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 조회
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompanyDangerFactorAndSolutionUsingGET(assessmentId: number, companyProcessId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseResultGetCompanyDangerFactorAndSolutionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanyDangerFactorAndSolutionUsingGET(assessmentId, companyProcessId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Class34Api.getCompanyDangerFactorAndSolutionUsingGET']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
         * @param {number} assessmentId assessmentId
         * @param {number} companyDangerFactorId companyDangerFactorId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recommendDangerSolutionUsingGET(assessmentId: number, companyDangerFactorId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseResultRecommendDangerSolutionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recommendDangerSolutionUsingGET(assessmentId, companyDangerFactorId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Class34Api.recommendDangerSolutionUsingGET']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 안전 위험 평가 4 단계 개선 후 위험성 수정
         * @summary 안전 위험 평가 4 단계 개선 후 위험성 수정
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {UpdateCompanyDangerFactorAfterRiskRequest} [updateCompanyDangerFactorAfterRiskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCompanyDangerFactorAfterRiskUsingPUT(assessmentId: number, companyProcessId: number, updateCompanyDangerFactorAfterRiskRequest?: UpdateCompanyDangerFactorAfterRiskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCompanyDangerFactorAfterRiskUsingPUT(assessmentId, companyProcessId, updateCompanyDangerFactorAfterRiskRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Class34Api.updateCompanyDangerFactorAfterRiskUsingPUT']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 안전 위험 평가 3 위험성 수정
         * @summary 안전 위험 평가 3 위험성 수정
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {UpdateCompanyDangerFactorRiskRequest} [updateCompanyDangerFactorRiskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCompanyDangerFactorAfterRiskUsingPUT1(assessmentId: number, companyProcessId: number, updateCompanyDangerFactorRiskRequest?: UpdateCompanyDangerFactorRiskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCompanyDangerFactorAfterRiskUsingPUT1(assessmentId, companyProcessId, updateCompanyDangerFactorRiskRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Class34Api.updateCompanyDangerFactorAfterRiskUsingPUT1']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 입력, 수정, 삭제
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 입력, 수정, 삭제
         * @param {number} assessmentId assessmentId
         * @param {number} companyDangerFactorId companyDangerFactorId
         * @param {UpsertCompanyDangerSolutionRequest} [upsertCompanyDangerSolutionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async upsertCompanyDangerSolutionUsingPUT(assessmentId: number, companyDangerFactorId: number, upsertCompanyDangerSolutionRequest?: UpsertCompanyDangerSolutionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseResultUpsertCompanyDangerSolutionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.upsertCompanyDangerSolutionUsingPUT(assessmentId, companyDangerFactorId, upsertCompanyDangerSolutionRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['Class34Api.upsertCompanyDangerSolutionUsingPUT']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * Class34Api - factory interface
 * @export
 */
export const Class34ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = Class34ApiFp(configuration)
    return {
        /**
         * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 조회
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 조회
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyDangerFactorAndSolutionUsingGET(assessmentId: number, companyProcessId: number, options?: any): AxiosPromise<ResponseResultGetCompanyDangerFactorAndSolutionResponse> {
            return localVarFp.getCompanyDangerFactorAndSolutionUsingGET(assessmentId, companyProcessId, options).then((request) => request(axios, basePath));
        },
        /**
         * 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
         * @param {number} assessmentId assessmentId
         * @param {number} companyDangerFactorId companyDangerFactorId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recommendDangerSolutionUsingGET(assessmentId: number, companyDangerFactorId: number, options?: any): AxiosPromise<ResponseResultRecommendDangerSolutionResponse> {
            return localVarFp.recommendDangerSolutionUsingGET(assessmentId, companyDangerFactorId, options).then((request) => request(axios, basePath));
        },
        /**
         * 안전 위험 평가 4 단계 개선 후 위험성 수정
         * @summary 안전 위험 평가 4 단계 개선 후 위험성 수정
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {UpdateCompanyDangerFactorAfterRiskRequest} [updateCompanyDangerFactorAfterRiskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCompanyDangerFactorAfterRiskUsingPUT(assessmentId: number, companyProcessId: number, updateCompanyDangerFactorAfterRiskRequest?: UpdateCompanyDangerFactorAfterRiskRequest, options?: any): AxiosPromise<ResponseResult> {
            return localVarFp.updateCompanyDangerFactorAfterRiskUsingPUT(assessmentId, companyProcessId, updateCompanyDangerFactorAfterRiskRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 안전 위험 평가 3 위험성 수정
         * @summary 안전 위험 평가 3 위험성 수정
         * @param {number} assessmentId assessmentId
         * @param {number} companyProcessId companyProcessId
         * @param {UpdateCompanyDangerFactorRiskRequest} [updateCompanyDangerFactorRiskRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCompanyDangerFactorAfterRiskUsingPUT1(assessmentId: number, companyProcessId: number, updateCompanyDangerFactorRiskRequest?: UpdateCompanyDangerFactorRiskRequest, options?: any): AxiosPromise<ResponseResult> {
            return localVarFp.updateCompanyDangerFactorAfterRiskUsingPUT1(assessmentId, companyProcessId, updateCompanyDangerFactorRiskRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 입력, 수정, 삭제
         * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 입력, 수정, 삭제
         * @param {number} assessmentId assessmentId
         * @param {number} companyDangerFactorId companyDangerFactorId
         * @param {UpsertCompanyDangerSolutionRequest} [upsertCompanyDangerSolutionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        upsertCompanyDangerSolutionUsingPUT(assessmentId: number, companyDangerFactorId: number, upsertCompanyDangerSolutionRequest?: UpsertCompanyDangerSolutionRequest, options?: any): AxiosPromise<ResponseResultUpsertCompanyDangerSolutionResponse> {
            return localVarFp.upsertCompanyDangerSolutionUsingPUT(assessmentId, companyDangerFactorId, upsertCompanyDangerSolutionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Class34Api - object-oriented interface
 * @export
 * @class Class34Api
 * @extends {BaseAPI}
 */
export class Class34Api extends BaseAPI {
    /**
     * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 조회
     * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 조회
     * @param {number} assessmentId assessmentId
     * @param {number} companyProcessId companyProcessId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class34Api
     */
    public getCompanyDangerFactorAndSolutionUsingGET(assessmentId: number, companyProcessId: number, options?: AxiosRequestConfig) {
        return Class34ApiFp(this.configuration).getCompanyDangerFactorAndSolutionUsingGET(assessmentId, companyProcessId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
     * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 추천 조회
     * @param {number} assessmentId assessmentId
     * @param {number} companyDangerFactorId companyDangerFactorId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class34Api
     */
    public recommendDangerSolutionUsingGET(assessmentId: number, companyDangerFactorId: number, options?: AxiosRequestConfig) {
        return Class34ApiFp(this.configuration).recommendDangerSolutionUsingGET(assessmentId, companyDangerFactorId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 안전 위험 평가 4 단계 개선 후 위험성 수정
     * @summary 안전 위험 평가 4 단계 개선 후 위험성 수정
     * @param {number} assessmentId assessmentId
     * @param {number} companyProcessId companyProcessId
     * @param {UpdateCompanyDangerFactorAfterRiskRequest} [updateCompanyDangerFactorAfterRiskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class34Api
     */
    public updateCompanyDangerFactorAfterRiskUsingPUT(assessmentId: number, companyProcessId: number, updateCompanyDangerFactorAfterRiskRequest?: UpdateCompanyDangerFactorAfterRiskRequest, options?: AxiosRequestConfig) {
        return Class34ApiFp(this.configuration).updateCompanyDangerFactorAfterRiskUsingPUT(assessmentId, companyProcessId, updateCompanyDangerFactorAfterRiskRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 안전 위험 평가 3 위험성 수정
     * @summary 안전 위험 평가 3 위험성 수정
     * @param {number} assessmentId assessmentId
     * @param {number} companyProcessId companyProcessId
     * @param {UpdateCompanyDangerFactorRiskRequest} [updateCompanyDangerFactorRiskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class34Api
     */
    public updateCompanyDangerFactorAfterRiskUsingPUT1(assessmentId: number, companyProcessId: number, updateCompanyDangerFactorRiskRequest?: UpdateCompanyDangerFactorRiskRequest, options?: AxiosRequestConfig) {
        return Class34ApiFp(this.configuration).updateCompanyDangerFactorAfterRiskUsingPUT1(assessmentId, companyProcessId, updateCompanyDangerFactorRiskRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 안전 위험 평가 3, 4 단계 (위험 수준 판단) 입력, 수정, 삭제
     * @summary 안전 위험 평가 3, 4 단계 (위험성 수준 판단) 입력, 수정, 삭제
     * @param {number} assessmentId assessmentId
     * @param {number} companyDangerFactorId companyDangerFactorId
     * @param {UpsertCompanyDangerSolutionRequest} [upsertCompanyDangerSolutionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Class34Api
     */
    public upsertCompanyDangerSolutionUsingPUT(assessmentId: number, companyDangerFactorId: number, upsertCompanyDangerSolutionRequest?: UpsertCompanyDangerSolutionRequest, options?: AxiosRequestConfig) {
        return Class34ApiFp(this.configuration).upsertCompanyDangerSolutionUsingPUT(assessmentId, companyDangerFactorId, upsertCompanyDangerSolutionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

