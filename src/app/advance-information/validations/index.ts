import { AdditionalCompanyAccountInfoRequest } from '@/services';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type BasicInfoType = Pick<
  AdditionalCompanyAccountInfoRequest,
  'ownerName' | 'companyPhoneNumber' | 'contactName' | 'contactNumber' | 'contactEmail' | 'jobPosition'
>;

type BasicInfoValidationObjectKeys = keyof BasicInfoType;

const basicInfoValidationObject: Record<BasicInfoValidationObjectKeys, z.ZodTypeAny> = {
  ownerName: z.string(),
  companyPhoneNumber: z.string(),
  contactName: z.string(),
  contactNumber: z.string(),
  contactEmail: z.string(),
  jobPosition: z.string(),
};

export const basicInfoValidationSchema = zodResolver(z.object(basicInfoValidationObject));

export type CompanyInfoType = Pick<
  AdditionalCompanyAccountInfoRequest,
  | 'companyName'
  | 'ownerName'
  | 'businessNumber'
  | 'corporateNumber'
  | 'sector'
  | 'businessType'
  | 'postNumber'
  | 'roadAddress'
  | 'detailAddress'
  | 'companyStartAt'
>;

type CompanyInfoValidationObjectKeys = keyof CompanyInfoType;

const companyInfoValidationObject: Record<CompanyInfoValidationObjectKeys, z.ZodTypeAny> = {
  companyName: z.string(),
  ownerName: z.string(),
  businessNumber: z.string(),
  corporateNumber: z.string().optional(),
  sector: z.string(),
  businessType: z.string().optional(),
  roadAddress: z.string(),
  postNumber: z.string(),
  detailAddress: z.string(),
  companyStartAt: z
    .string({ required_error: 'YYYY-MM0-DD 형식으로 입력해주세요.' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'YYYY-MM0-DD 형식으로 입력해주세요.'),
};

export const companyInfoValidationSchema = zodResolver(z.object(companyInfoValidationObject));
