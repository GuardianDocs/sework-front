import { DefaultApi } from '@/lib/axios/oas-axios';
import { AdditionalCompanyAccountInfoRequest } from '@/services';
import useSWRMutation from 'swr/mutation';

const fetcher = async (_: string[], { arg }: { arg: AdditionalCompanyAccountInfoRequest }) => {
  const result = await DefaultApi.saveAdditionalInfoUsingPOST(arg);
  return result.data;
};

export const useMutateCompayAdditionalInfo = () =>
  useSWRMutation(['POST', '/api/account/v1/company/additional-info'], fetcher);
