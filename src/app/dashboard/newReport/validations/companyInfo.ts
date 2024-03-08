import { AssessmentAdditionalInfoReq } from '@/services';
import { ZodObject, z } from 'zod';

type AssessmentAdditionalInfoKey = keyof AssessmentAdditionalInfoReq;

const assessmentAdditionalInfoValidationSchema: ZodObject<Record<AssessmentAdditionalInfoKey, z.ZodTypeAny>> = z.object(
  {
    employeeDemographyList: z.string().array(),
    environmentMeasurementYn: z.string(),
    hasLabourStandardYn: z.boolean(),
    healthScreeningYn: z.string(),
    processWithSpecialEducation: z.boolean(),
    ptwRequiredYn: z.boolean(),
    shiftWorkYn: z.boolean(),
    subContractYn: z.boolean(),
    transportationMethodList: z.string().array(),
  }
);

export type CompanyInfoType = {
  additionalInfo: AssessmentAdditionalInfoReq;
};

export const companyInfoValidationSchema = z.object({
  additionalInfo: assessmentAdditionalInfoValidationSchema,
});
