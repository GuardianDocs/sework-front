import { DefaultApi } from '@/lib/axios/oas-axios';
import { SearchSectorResponse } from '@/services';
import useSWRInfinite from 'swr/infinite';

type FetcherKey = readonly [['GET', '/api/assessment/v1/company/sector', number], string];

const getKey =
  (searchKeywords: string) =>
  (pageIndex: number, previousPageData: SearchSectorResponse): FetcherKey | null => {
    if (previousPageData && pageIndex > +previousPageData.totalPage) return null;
    return [['GET', '/api/assessment/v1/company/sector', pageIndex], searchKeywords];
  };

const fetcher = async ([[, , page], searchKeywords]: FetcherKey) => {
  const response = await DefaultApi.searchSectorUsingGET(page, 20, searchKeywords).then(res => res.data);
  return response;
};

export const useGetAssessmentCompanySector = (searchKeywords: string) =>
  useSWRInfinite(getKey(searchKeywords), fetcher);
