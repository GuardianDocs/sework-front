import { CompanyRoleStructure, CompanyWorker } from '@/services';
import { ZodObject, z } from 'zod';

type CompanyWorkerKey = keyof CompanyWorker;

const companyWorkerValidationSchema: ZodObject<Record<CompanyWorkerKey, z.ZodTypeAny>> = z.object({
  department: z.string(),
  name: z.string(),
  role: z.string(),
});

type CompanyRoleStructureKey = keyof CompanyRoleStructure;

const roleStructureValidationSchema: ZodObject<Record<CompanyRoleStructureKey, z.ZodTypeAny>> = z.object({
  coordinateOfficer: companyWorkerValidationSchema.array(),
  headOfficer: companyWorkerValidationSchema.array(),
  healthManager: companyWorkerValidationSchema.array(),
  industrialHealthOfficer: companyWorkerValidationSchema.array(),
  owners: companyWorkerValidationSchema.array(),
  safetyHealthManager: companyWorkerValidationSchema.array(),
  safetyManager: companyWorkerValidationSchema.array(),
  safetyOfficer: companyWorkerValidationSchema.array(),
  supervisor: companyWorkerValidationSchema.array(),
});

export type ManagerStructureType = {
  roloStructure: CompanyRoleStructure;
};

export const managerStructureValidationSchema = z.object({
  roleStructure: roleStructureValidationSchema,
});
