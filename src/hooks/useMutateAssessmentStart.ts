import { DefaultApi } from '@/lib/axios/oas-axios';
import useSWRMutation from 'swr/mutation';

const fetcher = async () => {
  const response = await DefaultApi.startAssessmentUsingPOST();

  return response.data.data;
};

export const useMutateAssessmentStart = () => {
  return useSWRMutation(['POST', '/api/assessment/v1/company/start'], fetcher);
};
