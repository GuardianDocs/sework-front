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


// May contain unused imports in some cases
// @ts-ignore
import { TokenRefreshResponse } from './token-refresh-response';

/**
 * 
 * @export
 * @interface ResponseResultTokenRefreshResponse
 */
export interface ResponseResultTokenRefreshResponse {
    /**
     * 
     * @type {string}
     * @memberof ResponseResultTokenRefreshResponse
     */
    'code'?: string;
    /**
     * 
     * @type {TokenRefreshResponse}
     * @memberof ResponseResultTokenRefreshResponse
     */
    'data'?: TokenRefreshResponse;
    /**
     * 
     * @type {string}
     * @memberof ResponseResultTokenRefreshResponse
     */
    'message'?: string;
}
