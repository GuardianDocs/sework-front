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
import { CompanyDangerFutureSolutionDto } from './company-danger-future-solution-dto';

/**
 * 
 * @export
 * @interface CompanyDangerFactorDto
 */
export interface CompanyDangerFactorDto {
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactorDto
     */
    'companyDangerFactorId'?: number;
    /**
     * 
     * @type {Array<CompanyDangerFutureSolutionDto>}
     * @memberof CompanyDangerFactorDto
     */
    'futureSolutionList'?: Array<CompanyDangerFutureSolutionDto>;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactorDto
     */
    'title'?: string;
}

