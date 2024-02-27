import { AssessmentAdditionalInfo, RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodObject, z } from 'zod';

type AssessmentAdditionalInfoKey = keyof AssessmentAdditionalInfo;

export const assessmentAdditionalInfoValidationSchema: ZodObject<Record<AssessmentAdditionalInfoKey, z.ZodTypeAny>> =
  z.object({
    employeeDemographyList: z.string().array(),
    environmentMeasurementYn: z.string(),
    hasLabourStandardYn: z.boolean(),
    healthScreeningYn: z.string(),
    processWithSpecialEducation: z.boolean(),
    ptwRequiredYn: z.boolean(),
    shiftWorkYn: z.boolean(),
    subContractYn: z.boolean(),
    transportationMethodList: z.string().array(),
  });

type RegisterCompanyAssessmentAdditionalInfoRequestKeys = keyof RegisterCompanyAssessmentAdditionalInfoRequest;

const validationSchema: ZodObject<Record<RegisterCompanyAssessmentAdditionalInfoRequestKeys, z.ZodTypeAny>> = z.object({
  title: z.string(),
  type: z.string(),
  startAt: z
    .string({ required_error: '날짜 형식이 올바르지 않습니다.' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식이 올바르지 않습니다.'),
  endAt: z
    .string({ required_error: '날짜 형식이 올바르지 않습니다.' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식이 올바르지 않습니다.'),
  additionalInfo: assessmentAdditionalInfoValidationSchema,
  associatedInternalCorpCount: z.number(),
  associatedInternalCorpEmployeeCount: z.number(),
  chiefWorker: z.string(),
  chiefWorkerDepartment: z.string(),
  employeeNumber: z.number(),
  lastYearAccidentCount: z.number(),
  lastYearNearAccidentCount: z.number(),
  ownerName: z.string(),
  sectorId: z.number(),
  supervisor: z.string(),
  supervisorDepartment: z.string(),
  threeYearsAgoAccidentCount: z.number(),
  threeYearsAgoNearAccidentCount: z.number(),
  twoYearsAgoAccidentCount: z.number(),
  twoYearsAgoNearAccidentCount: z.number(),
});

export const resolver = zodResolver(validationSchema);
