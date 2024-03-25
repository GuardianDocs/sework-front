import { CompanyRoleStructure, CompanyWorker } from '@/services';
import { z } from 'zod';

type CompanyWorkerKey = keyof CompanyWorker;

const companyWorkerValidationObject: Record<CompanyWorkerKey, z.ZodTypeAny> = {
  department: z.string(),
  name: z.string(),
  role: z.string(),
};

const companyWorkerValidationSchema = z.object(companyWorkerValidationObject);

type CompanyRoleStructureKey = keyof CompanyRoleStructure;

const roleStructureValidationObject: Record<CompanyRoleStructureKey, z.ZodTypeAny> = {
  owners: companyWorkerValidationSchema.array(),
  headOfficer: companyWorkerValidationSchema.array().optional(),
  safetyOfficer: companyWorkerValidationSchema.array().optional(),
  coordinateOfficer: companyWorkerValidationSchema.array().optional(),
  supervisor: companyWorkerValidationSchema.array().optional(),
  safetyManager: companyWorkerValidationSchema.array(),
  healthManager: companyWorkerValidationSchema.array().optional(),
  industrialHealthOfficer: companyWorkerValidationSchema.array().optional(),
  safetyHealthManager: companyWorkerValidationSchema.array().optional(),
};

const roleStructureValidationSchema = z.object(roleStructureValidationObject);

export type ManagerStructureType = {
  roloStructure: CompanyRoleStructure;
};

export const managerStructureValidationSchema = z.object({
  roleStructure: roleStructureValidationSchema,
});
