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
 * @interface CompanyDangerSolutionVOReq
 */
export interface CompanyDangerSolutionVOReq {
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerSolutionVOReq
     */
    'dangerSolutionId'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerSolutionVOReq
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerSolutionVOReq
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerSolutionVOReq
     */
    'type'?: CompanyDangerSolutionVOReqTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CompanyDangerSolutionVOReqTypeEnum {
    Current = 'CURRENT',
    Future = 'FUTURE'
}

