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
 * @interface CompanyDangerFactor
 */
export interface CompanyDangerFactor {
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactor
     */
    'afterRisk'?: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactor
     */
    'category'?: CompanyDangerFactorCategoryEnum;
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactor
     */
    'companyProcessId'?: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactor
     */
    'createdAt'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyDangerFactor
     */
    'createdByUserYn'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyDangerFactor
     */
    'dangerFactorDone'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactor
     */
    'dangerFactorId'?: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactor
     */
    'deletedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactor
     */
    'description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyDangerFactor
     */
    'doneCurrentSolution'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyDangerFactor
     */
    'doneFutureSolution'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyDangerFactor
     */
    'doneYn'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactor
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactor
     */
    'legalDescription'?: string;
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactor
     */
    'possibility'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactor
     */
    'risk'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyDangerFactor
     */
    'severe'?: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactor
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyDangerFactor
     */
    'updatedAt'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum CompanyDangerFactorCategoryEnum {
    Biological = 'BIOLOGICAL',
    Character = 'CHARACTER',
    Chemical = 'CHEMICAL',
    Electrical = 'ELECTRICAL',
    Environmental = 'ENVIRONMENTAL',
    Machinery = 'MACHINERY'
}


