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
import { MapVO } from './map-vo';

/**
 * 
 * @export
 * @interface GetCompanyAdditionalInfoAnswerResponse
 */
export interface GetCompanyAdditionalInfoAnswerResponse {
    /**
     * 
     * @type {Array<MapVO>}
     * @memberof GetCompanyAdditionalInfoAnswerResponse
     */
    'employeeDemographyList'?: Array<MapVO>;
    /**
     * 
     * @type {Array<MapVO>}
     * @memberof GetCompanyAdditionalInfoAnswerResponse
     */
    'environmentMeasurementAnswerList'?: Array<MapVO>;
    /**
     * 
     * @type {Array<MapVO>}
     * @memberof GetCompanyAdditionalInfoAnswerResponse
     */
    'transportationMethodList'?: Array<MapVO>;
    /**
     * 
     * @type {Array<MapVO>}
     * @memberof GetCompanyAdditionalInfoAnswerResponse
     */
    'weightTreatmentList'?: Array<MapVO>;
}

