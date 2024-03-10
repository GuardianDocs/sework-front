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
 * @interface AssessmentAdditionalInfoRes
 */
export interface AssessmentAdditionalInfoRes {
    /**
     * 근로자 구성
     * @type {Array<string>}
     * @memberof AssessmentAdditionalInfoRes
     */
    'employeeDemographyList'?: Array<AssessmentAdditionalInfoResEmployeeDemographyListEnum>;
    /**
     * 작업환경 측정 여부
     * @type {string}
     * @memberof AssessmentAdditionalInfoRes
     */
    'environmentMeasurementYn'?: AssessmentAdditionalInfoResEnvironmentMeasurementYnEnum;
    /**
     * 작업 표준 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoRes
     */
    'hasLabourStandardYn'?: boolean;
    /**
     * 건강검진 실시 여부
     * @type {string}
     * @memberof AssessmentAdditionalInfoRes
     */
    'healthScreeningYn'?: AssessmentAdditionalInfoResHealthScreeningYnEnum;
    /**
     * 특별안정교육 필요 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoRes
     */
    'processWithSpecialEducation'?: boolean;
    /**
     * 안전작업허가증 필요 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoRes
     */
    'ptwRequiredYn'?: boolean;
    /**
     * 교대작업 진행 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoRes
     */
    'shiftWorkYn'?: boolean;
    /**
     * 도급 실시 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoRes
     */
    'subContractYn'?: boolean;
    /**
     * 운반 수단
     * @type {Array<string>}
     * @memberof AssessmentAdditionalInfoRes
     */
    'transportationMethodList'?: Array<AssessmentAdditionalInfoResTransportationMethodListEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoResEmployeeDemographyListEnum {
    Elderly = 'ELDERLY',
    Foreign = 'FOREIGN',
    Handicapped = 'HANDICAPPED',
    None = 'NONE',
    Rookie = 'ROOKIE',
    Temporary = 'TEMPORARY',
    Women = 'WOMEN'
}
/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoResEnvironmentMeasurementYnEnum {
    Doing = 'DOING',
    None = 'NONE',
    NotDoing = 'NOT_DOING'
}
/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoResHealthScreeningYnEnum {
    Doing = 'DOING',
    None = 'NONE',
    NotDoing = 'NOT_DOING'
}
/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoResTransportationMethodListEnum {
    Human = 'HUMAN',
    Machine = 'MACHINE',
    None = 'NONE'
}


