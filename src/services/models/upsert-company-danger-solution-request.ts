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
import { CompanyDangerSolutionVOReq } from './company-danger-solution-voreq';

/**
 * 
 * @export
 * @interface UpsertCompanyDangerSolutionRequest
 */
export interface UpsertCompanyDangerSolutionRequest {
    /**
     * 
     * @type {number}
     * @memberof UpsertCompanyDangerSolutionRequest
     */
    'afterRisk'?: number;
    /**
     * 
     * @type {Array<CompanyDangerSolutionVOReq>}
     * @memberof UpsertCompanyDangerSolutionRequest
     */
    'companyDangerSolutionList'?: Array<CompanyDangerSolutionVOReq>;
    /**
     * 
     * @type {number}
     * @memberof UpsertCompanyDangerSolutionRequest
     */
    'possibility'?: number;
    /**
     * 
     * @type {number}
     * @memberof UpsertCompanyDangerSolutionRequest
     */
    'severe'?: number;
}
