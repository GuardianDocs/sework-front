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
 * @interface AssessmentAdditionalInfoReq
 */
export interface AssessmentAdditionalInfoReq {
    /**
     * 근로자 구성
     * @type {Array<string>}
     * @memberof AssessmentAdditionalInfoReq
     */
    'employeeDemographyList'?: Array<AssessmentAdditionalInfoReqEmployeeDemographyListEnum>;
    /**
     * 작업환경 측정 여부
     * @type {string}
     * @memberof AssessmentAdditionalInfoReq
     */
    'environmentMeasurementYn'?: AssessmentAdditionalInfoReqEnvironmentMeasurementYnEnum;
    /**
     * 작업 표준 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoReq
     */
    'hasLabourStandardYn'?: boolean;
    /**
     * 건강검진 실시 여부
     * @type {string}
     * @memberof AssessmentAdditionalInfoReq
     */
    'healthScreeningYn'?: AssessmentAdditionalInfoReqHealthScreeningYnEnum;
    /**
     * 특별안정교육 필요 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoReq
     */
    'processWithSpecialEducation'?: boolean;
    /**
     * 안전작업허가증 필요 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoReq
     */
    'ptwRequiredYn'?: boolean;
    /**
     * 교대작업 진행 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoReq
     */
    'shiftWorkYn'?: boolean;
    /**
     * 도급 실시 여부
     * @type {boolean}
     * @memberof AssessmentAdditionalInfoReq
     */
    'subContractYn'?: boolean;
    /**
     * 운반 수단
     * @type {Array<string>}
     * @memberof AssessmentAdditionalInfoReq
     */
    'transportationMethodList'?: Array<AssessmentAdditionalInfoReqTransportationMethodListEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoReqEmployeeDemographyListEnum {
    Elderly = 'ELDERLY',
    Foreign = 'FOREIGN',
    Handicapped = 'HANDICAPPED',
    Rookie = 'ROOKIE',
    Temporary = 'TEMPORARY',
    Women = 'WOMEN'
}
/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoReqEnvironmentMeasurementYnEnum {
    Doing = 'DOING',
    NotDoing = 'NOT_DOING',
    NotRequired = 'NOT_REQUIRED'
}
/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoReqHealthScreeningYnEnum {
    Doing = 'DOING',
    NotDoing = 'NOT_DOING',
    NotRequired = 'NOT_REQUIRED'
}
/**
    * @export
    * @enum {string}
    */
export enum AssessmentAdditionalInfoReqTransportationMethodListEnum {
    Human = 'HUMAN',
    Machine = 'MACHINE'
}

