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
import { SectorVO } from './sector-vo';

/**
 * 
 * @export
 * @interface SearchSectorResponse
 */
export interface SearchSectorResponse {
    /**
     * 
     * @type {number}
     * @memberof SearchSectorResponse
     */
    'currentPage': number;
    /**
     * 
     * @type {number}
     * @memberof SearchSectorResponse
     */
    'pageSize': number;
    /**
     * 
     * @type {Array<SectorVO>}
     * @memberof SearchSectorResponse
     */
    'sectorList'?: Array<SectorVO>;
    /**
     * 
     * @type {number}
     * @memberof SearchSectorResponse
     */
    'totalCount': number;
    /**
     * 
     * @type {number}
     * @memberof SearchSectorResponse
     */
    'totalPage': number;
}
