import { DefaultApi } from '@/lib/axios/oas-axios';
import useSWR from 'swr';

const fetcher = async ([, , assessmentId]: [string, string, number]) => {
  return await DefaultApi.getCompanyAssessmentAdditionalInfoUsingGET(assessmentId);
};

export const useGetAssessment = (assessmentId: number) => {
  return useSWR(['GET', '/api/assessment/v1/company/assessment/additional-info', assessmentId], fetcher);
};
