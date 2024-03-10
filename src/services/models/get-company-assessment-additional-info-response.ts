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
import { AssessmentAdditionalInfoRes } from './assessment-additional-info-res';
// May contain unused imports in some cases
// @ts-ignore
import { CompanyRoleStructure } from './company-role-structure';

/**
 * 
 * @export
 * @interface GetCompanyAssessmentAdditionalInfoResponse
 */
export interface GetCompanyAssessmentAdditionalInfoResponse {
    /**
     * 
     * @type {AssessmentAdditionalInfoRes}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'additionalInfo'?: AssessmentAdditionalInfoRes;
    /**
     * 
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'assessmentId'?: number;
    /**
     * 사내 협력업체 수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'associatedInternalCorpCount'?: number;
    /**
     * 사내 협력업체 근로자 수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'associatedInternalCorpEmployeeCount'?: number;
    /**
     * 대표근로자
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'chiefWorker'?: string;
    /**
     * 대표근로자 소속 부서
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'chiefWorkerDepartment'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'employeeNumber'?: number;
    /**
     * 평가 종료 기준일
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'endAt'?: string;
    /**
     * 1년 전 재해 발생 건수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'lastYearAccidentCount'?: number;
    /**
     * 1년 전 아차 사고 발생 건수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'lastYearNearAccidentCount'?: number;
    /**
     * 사업주
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'ownerName'?: string;
    /**
     * 
     * @type {CompanyRoleStructure}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'roleStructure'?: CompanyRoleStructure;
    /**
     * 업종 id
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'sectorId': number;
    /**
     * 평가 시작 기준일
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'startAt'?: string;
    /**
     * 관리감독자
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'supervisor'?: string;
    /**
     * 관리감독자 소속 부서
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'supervisorDepartment'?: string;
    /**
     * 3년 전 재해 발생 건수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'threeYearsAgoAccidentCount'?: number;
    /**
     * 3년 전 아차 사고 발생 건수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'threeYearsAgoNearAccidentCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'title'?: string;
    /**
     * 2년 전 재해 발생 건수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'twoYearsAgoAccidentCount'?: number;
    /**
     * 2년 전 아차 사고 발생 건수
     * @type {number}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'twoYearsAgoNearAccidentCount'?: number;
    /**
     * 보고서 종류
     * @type {string}
     * @memberof GetCompanyAssessmentAdditionalInfoResponse
     */
    'type'?: GetCompanyAssessmentAdditionalInfoResponseTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum GetCompanyAssessmentAdditionalInfoResponseTypeEnum {
    Continuous = 'CONTINUOUS',
    Initial = 'INITIAL',
    Regular = 'REGULAR'
}

