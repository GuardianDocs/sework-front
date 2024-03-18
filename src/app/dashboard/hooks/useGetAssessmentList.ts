import { DefaultApi } from '@/lib/axios/oas-axios';
import useSWR from 'swr';

const fetcher = async () => {
  return await DefaultApi.getMyHomeCompanyAssessmentListUsingGET();
};

export const useGetAssessmentList = () => {
  return useSWR(['GET', '/api/assessment/v1/company'], fetcher);
};
