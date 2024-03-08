import { z } from 'zod';

export type AccidentAndWorkerInfoType = {
  lastYearAccidentCount: number;
  lastYearNearAccidentCount: number;
  twoYearsAgoAccidentCount: number;
  twoYearsAgoNearAccidentCount: number;
  threeYearsAgoAccidentCount: number;
  threeYearsAgoNearAccidentCount: number;
  associatedInternalCorpCount: number;
  associatedInternalCorpEmployeeCount: number;
  employeeNumber: number;
};

export const accidentAndWorkerInfoValidationSchema = z.object({
  lastYearAccidentCount: z.number(),
  lastYearNearAccidentCount: z.number(),
  twoYearsAgoAccidentCount: z.number(),
  twoYearsAgoNearAccidentCount: z.number(),
  threeYearsAgoAccidentCount: z.number(),
  threeYearsAgoNearAccidentCount: z.number(),
  associatedInternalCorpCount: z.number(),
  associatedInternalCorpEmployeeCount: z.number(),
  employeeNumber: z.number(),
});
