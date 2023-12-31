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



/**
 * 
 * @export
 * @interface AdditionalCompanyAccountInfoRequest
 */
export interface AdditionalCompanyAccountInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'businessNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'businessType'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'companyName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'companyPhoneNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'companyStartAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'contactEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'contactName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'contactNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'corporateNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'detailAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'jobPosition'?: AdditionalCompanyAccountInfoRequestJobPositionEnum;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'ownerName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'postNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'roadAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalCompanyAccountInfoRequest
     */
    'sector'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AdditionalCompanyAccountInfoRequestJobPositionEnum {
    Worker = 'WORKER'
}


