import { SectorVO } from '@/services';
import { ZodObject, z } from 'zod';

type SectorVOKey = keyof SectorVO;

const sectorValidationSchema: ZodObject<Record<SectorVOKey, z.ZodTypeAny>> = z.object({
  id: z.number(),
  title: z.string(),
});

export type AssessmentInfoType = {
  title: string;
  type: string;
  startAt: string;
  endAt: string;
  sectorId: SectorVO;
};

export const assessmentInfoValidationSchema = z.object({
  title: z.string(),
  type: z.string(),
  startAt: z
    .string({ required_error: '날짜 형식이 올바르지 않습니다.' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식이 올바르지 않습니다.'),
  endAt: z
    .string({ required_error: '날짜 형식이 올바르지 않습니다.' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, '날짜 형식이 올바르지 않습니다.'),
  sectorId: sectorValidationSchema,
});
