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
import { CompanyDangerSolution } from './company-danger-solution';
// May contain unused imports in some cases
// @ts-ignore
import { CompanyDangerSolutionPhoto } from './company-danger-solution-photo';

/**
 * 
 * @export
 * @interface DocumentDangerSolutionInfoDto
 */
export interface DocumentDangerSolutionInfoDto {
    /**
     * 
     * @type {CompanyDangerSolution}
     * @memberof DocumentDangerSolutionInfoDto
     */
    'companyDangerSolution'?: CompanyDangerSolution;
    /**
     * 
     * @type {Array<CompanyDangerSolutionPhoto>}
     * @memberof DocumentDangerSolutionInfoDto
     */
    'companyDangerSolutionPhotoList'?: Array<CompanyDangerSolutionPhoto>;
}
