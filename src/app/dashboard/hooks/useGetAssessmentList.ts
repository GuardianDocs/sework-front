import { DefaultApi } from '@/lib/axios/oas-axios';
import {
  GetMyHomeCompanyAssessmentListUsingGETAssessmentTypeEnum,
  PageDtoMyHomeCompanyAssessmentDto,
} from '@/services';
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
  (pageIndex: number, previousPageData: PageDtoMyHomeCompanyAssessmentDto): FetcherKey | null => {
    if (previousPageData && pageIndex > +(previousPageData?.totalPage || 0)) return null;
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
  ).then(res => res.data.data?.companyAssessmentPage);

  return response;
};

export const useGetAssessmentList = (assessmentType?: GetMyHomeCompanyAssessmentListUsingGETAssessmentTypeEnum) =>
  useSWRInfinite(getKey(assessmentType), fetcher);
