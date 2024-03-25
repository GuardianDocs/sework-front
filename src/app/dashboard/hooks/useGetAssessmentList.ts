import { DefaultApi } from '@/lib/axios/oas-axios';
import { GetMyHomeCompanyAssessmentListUsingGETAssessmentTypeEnum, SearchSectorResponse } from '@/services';
import useSWRInfinite from 'swr/infinite';

type FetcherKey = readonly [
  [string, string],
  page: number,
  assessmentType?: GetMyHomeCompanyAssessmentListUsingGETAssessmentTypeEnum,
  doneYn?: boolean,
  startDate?: string,
  endDate?: string
];

const getKey =
  (
    assessmentType?: GetMyHomeCompanyAssessmentListUsingGETAssessmentTypeEnum,
    doneYn?: boolean,
    startDate?: string,
    endDate?: string
  ) =>
  (pageIndex: number, previousPageData: SearchSectorResponse): FetcherKey | null => {
    if (previousPageData && pageIndex > +previousPageData.totalPage) return null;
    return [['GET', '/api/assessment/v1/company'], pageIndex, assessmentType, doneYn, startDate, endDate];
  };

const fetcher = async ([, page, assessmentType, doneYn, startDate, endDate]: FetcherKey) => {
  const response = await DefaultApi.getMyHomeCompanyAssessmentListUsingGET(
    page,
    10,
    assessmentType,
    doneYn,
    startDate,
    endDate
  ).then(res => res.data);
  return response;
};

export const useGetAssessmentCompanySector = (
  assessmentType?: GetMyHomeCompanyAssessmentListUsingGETAssessmentTypeEnum
) => useSWRInfinite(getKey(assessmentType), fetcher);
