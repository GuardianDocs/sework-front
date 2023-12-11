'use client';

import { useRouter } from 'next/navigation';
import { Label, Title, Headline } from '@/components/typography';
import ActionButton from '../../ui/ActionButton/ActionButton';
import Table from '../../ui/Table/Table';
import TextField from '../../ui/TextField/TextField';
import DropdownButton from '../../ui/DropdownButton/DropdownButton';
import Icon from '../../ui/Icon/Icon';
import IconButton from '../../ui/IconButton/IconButton';
import ProgressBox from '../../ui/ProgressBox/ProgressBox';
import { Step2Api } from '@/lib/axios/oas-axios';
import { getParameterFromUrl } from '@/utils/urlUtil';
import {
  type ResponseResultRecommendDangerFactorResponse,
  type ResponseResultGetCompanyDangerFactorResponse,
  type ResponseResultGetCompanyProcessTitleResponse,
  type GetDangerFactorTitleUsingGETCategoryEnum,
  type ResponseResultGetDangerFactorTitleResponse,
  type ResponseResultUpsertCompanyDangerFactorResponse,
} from '@/services';
import { useStep2Store } from '@/hooks/dashboard/Step2Store';
import { useMutation, useQuery } from 'react-query';
import { useToast } from '@/components/ui/Toast/use-toast';
import EtcIcon from '@/components/ui/Icon/EtcIcon/EtcIcon';

export default function Step2Page() {
  const { toast } = useToast();
  const router = useRouter();

  const {
    companyProcessTitle,
    selectedCompanyProcessTitleIndex,
    companyDangerFactorList,
    titleList,
    setSelectedCompanyProcessTitleIndex,
    setCompanyProcessTitle,
    setCompanyDangerFactorList,
    setTitleList,
  } = useStep2Store();

  // 1 단계 공정 목록 조회 (Dropdown)
  const getCompanyProcessTitle = async () => {
    const response = await Step2Api.getCompanyProcessTitleUsingGET(Number(getParameterFromUrl('assessmentId')));

    const { data } = response?.data as ResponseResultGetCompanyProcessTitleResponse;

    const options = data?.companyProcessTitleList?.map(item => {
      return {
        value: item?.id ?? '',
        label: item?.title ?? '',
      };
    });

    setCompanyProcessTitle(options ?? []);
    setSelectedCompanyProcessTitleIndex(0);

    return data;
  };

  // 안전 위험 평가 1 단계 (위험 요인) 조회
  const getCompanyDangerFactor = async (companyProcessId: number) => {
    const response = await Step2Api.getCompanyDangerFactorUsingGET(
      Number(getParameterFromUrl('assessmentId')),
      companyProcessId
    );

    const { data } = response?.data as ResponseResultGetCompanyDangerFactorResponse;
    setCompanyDangerFactorList(data?.companyDangerFactorList || []);

    const filteredTitleList = await Promise.all(
      data?.companyDangerFactorList?.map(async item => {
        const getDangerFactorTitleList = await getDangerFactorTitle(item?.category || '');

        return getDangerFactorTitleList?.dangerFactorTitleList?.map(getDangerFactorTitle => {
          return {
            value: getDangerFactorTitle ?? '',
            label: getDangerFactorTitle ?? '',
          };
        });
      }) ?? []
    );

    setTitleList(filteredTitleList as any);

    return data;
  };

  // 안전 위험 평가 2 단계 (위험 요인) 추천 조회 (버튼 클릭)
  const getRecommendDangerFactor = async (companyProcessId: number) => {
    const response = await Step2Api.getRecommendDangerFactorUsingGET(
      Number(getParameterFromUrl('assessmentId')),
      companyProcessId
    );

    const { data } = response?.data as ResponseResultRecommendDangerFactorResponse;
    return data;
  };

  // 안전 위험 평가 2 단계 (위험 요인) 위험 요인 조회
  // TODO: any 타입 대신 제대로 된 타입으로 변경
  const getDangerFactorTitle = async (category: string) => {
    const response = await Step2Api.getDangerFactorTitleUsingGET(category as GetDangerFactorTitleUsingGETCategoryEnum);

    const { data } = response?.data as ResponseResultGetDangerFactorTitleResponse;
    return data;
  };

  // 저장, TODO: any 타입 대신 제대로 된 타입으로 변경
  const updateCompanyDangerFactor = async ({
    companyProcessId,
    companyDangerFactorRequest,
  }: {
    companyProcessId: number;
    companyDangerFactorRequest: any;
  }) => {
    const response = await Step2Api.upsertCompanyDangerFactorUsingPUT(
      Number(getParameterFromUrl('assessmentId')),
      companyProcessId,
      { companyDangerFactorList: companyDangerFactorRequest }
    );

    const { data } = response?.data as ResponseResultUpsertCompanyDangerFactorResponse;
    return data;
  };

  const {
    data: companyProcessTitleData,
    isLoading: companyProcessTitleIsLoading,
    isError: companyProcessTitleIsError,
    error: companyProcessTitleError,
  } = useQuery('getCompanyProcessTitle', getCompanyProcessTitle);

  const {
    data: companyDangerFactorData,
    isLoading: companyDangerFactorIsLoading,
    isError: companyDangerFactorIsError,
    error: companyDangerFactorError,
  } = useQuery(
    ['getCompanyDangerFactor', selectedCompanyProcessTitleIndex],
    () => getCompanyDangerFactor(Number(companyProcessTitle[selectedCompanyProcessTitleIndex]?.value) || 0),
    {
      enabled: !!companyProcessTitle.length,
    }
  );

  const {
    data: recommendDangerFactorData,
    isLoading: recommendDangerFactorIsLoading,
    isError: recommendDangerFactorIsError,
    error: recommendDangerFactorError,
  } = useQuery(
    ['getRecommendDangerFactor', selectedCompanyProcessTitleIndex],
    () => getRecommendDangerFactor(Number(companyProcessTitle[selectedCompanyProcessTitleIndex]?.value) || 0),
    {
      enabled: !!companyProcessTitle.length,
    }
  );

  // TODO: page onload 시에는 호출되지 않도록 변경. 그냥 useQuery를 안 쓰고, getDangerFactorTitle를 호출하면 되는거잖아?!
  const {
    data: biologicalDangerFactorTitleData,
    isLoading: biologicalDangerFactorTitleIsLoading,
    isError: biologicalDangerFactorTitleIsError,
    error: biologicalDangerFactorTitleError,
  } = useQuery(['getBiologicalDangerFactorTitle'], () => getDangerFactorTitle('CHEMICAL'), {
    enabled: !!companyProcessTitle.length,
  });

  const { mutate: updateCompanyDangerFactorMutate, isLoading: updateCompanyDangerFactorIsLoading } = useMutation(
    updateCompanyDangerFactor,
    {
      onSuccess: () => {
        toast({
          description: (
            <div className="inline-flex items-center gap-2">
              <EtcIcon icon="complete-s" />
              <Label size="s" color="gray100">
                작성한 내용이 저장되었습니다
              </Label>
            </div>
          ),
          duration: 1400,
        });
      },
      onError: () => {
        toast({
          description: (
            <div className="inline-flex items-center gap-2">
              <EtcIcon icon="complete-s" />
              <Label size="s" color="gray100">
                저장에 실패했습니다. 다시 시도해주시기 바랍니다
              </Label>
            </div>
          ),
          duration: 1400,
        });
      },
    }
  );

  const handleUpdateCompanyDangerFactor = (companyDangerFactorRequest: any) => {
    updateCompanyDangerFactorMutate({
      companyProcessId: Number(companyProcessTitle[selectedCompanyProcessTitleIndex]?.value) || 0,
      companyDangerFactorRequest,
    });
  };

  const steps = [
    {
      number: 1,
      label: '사전준비',
      active: true,
      selected: false,
      url: `/dashboard/step1?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
    {
      number: 2,
      label: '유해 위험요인 파악',
      active: true,
      selected: true,
      url: `/dashboard/step2?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
    {
      number: 3,
      label: '위험성 수준 판단',
      active: false,
      selected: false,
      url: `/dashboard/step3?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
    {
      number: 4,
      label: '감소대책 수립',
      active: false,
      selected: false,
      url: `/dashboard/step4?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
  ];

  const dangerFactorOptions = [
    {
      value: 'BIOLOGICAL',
      label: '생물학적요인',
    },
    {
      value: 'CHARACTER',
      label: '작업특성요인',
    },
    {
      value: 'CHEMICAL',
      label: '화학(물질적)요인',
    },
    {
      value: 'ELECTRICAL',
      label: '전기적요인',
    },
    {
      value: 'ENVIRONMENTAL',
      label: '작업환경요인',
    },
    {
      value: 'MACHINERY',
      label: '기계(위험)적요인',
    },
  ];

  const handleClickPreviousStepButton = () => {
    router.push(`/dashboard/step1?assessmentId=${getParameterFromUrl('assessmentId')}`);
  };

  const handleClickNextStepButton = () => {
    router.push(`/dashboard/step3?assessmentId=${getParameterFromUrl('assessmentId')}`);
  };

  return (
    <div className="flex flex-col items-center gap-12 pb-[60px]">
      {/* 1. 상단 */}
      <div className="flex flex-col items-center w-full">
        {/* 1.1. 작성 가이드 버튼 */}
        <div className="flex pt-6 pb-4 flex-col items-end gap-2.5 w-full">
          <div className="flex items-start gap-1">
            <Icon icon="circle-help" color="blue500" size={20} />
            <Label size="s" color="blue500">
              위험성평가 작성 가이드
            </Label>
          </div>
        </div>
        {/* 1.2. 타이틀 */}
        <div className="flex flex-col items-start w-full gap-8">
          {/* 상단 타이틀 & 설명 */}
          <div className="flex flex-col items-center w-full gap-1">
            <Headline size="s" color="gray800">
              위험성평가
            </Headline>
            <Label size="l" color="gray600">
              2단계 : 세부작업별 유해위험요인을 파악하여 작성해주세요
            </Label>
          </div>
          <ProgressBox steps={steps} />
        </div>
      </div>

      {/* 2. 세부작업 선택 */}
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-start w-full gap-3">
          {/* 2.1 title */}
          <div className="flex items-start gap-2">
            <Title size="l" color="gray800">
              세부작업 선택
            </Title>
            <div>
              <Title size="l" color="blue500">
                {Number(selectedCompanyProcessTitleIndex) + 1 || '-'}
              </Title>
              <Title size="l" color="gray300">
                {' '}
                /{' '}
              </Title>
              <Title size="l" color="gray400">
                {companyProcessTitle.length || '-'}
              </Title>
            </div>
          </div>
          {/* 2.2. 세부작업 리스트 */}
          <div className="flex items-start w-full gap-8">
            {/* 드롭다운 */}
            <div className="flex flex-grow">
              <DropdownButton
                options={companyProcessTitle}
                selectedOption={companyProcessTitle[selectedCompanyProcessTitleIndex || 0]}
                onSelected={option => {
                  setSelectedCompanyProcessTitleIndex(
                    companyProcessTitle.findIndex(item => item.value === option.value)
                  );
                }}
                isFullWidth
              />
            </div>
            {/* 버튼 */}
            <div className="flex items-center gap-2">
              <ActionButton
                variant="tonal-gray"
                size="m"
                onClick={() => {
                  setSelectedCompanyProcessTitleIndex(selectedCompanyProcessTitleIndex - 1);
                }}
                disabled={selectedCompanyProcessTitleIndex === 0}
              >
                이전
              </ActionButton>
              <ActionButton
                variant="filled"
                size="m"
                onClick={() => {
                  setSelectedCompanyProcessTitleIndex(selectedCompanyProcessTitleIndex + 1);
                }}
                disabled={selectedCompanyProcessTitleIndex === companyProcessTitle.length - 1}
              >
                다음
              </ActionButton>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 유해 위험요인 파악 */}
      <div className="flex flex-col items-start w-full gap-3">
        {/* 3.1. title */}
        <div className="flex items-center w-full gap-2">
          <div className="flex flex-grow">
            <Title size="l" color="gray800">
              유해 위험요인 파악
            </Title>
          </div>
          <ActionButton
            variant="tonal-gray"
            size="s"
            showIcon="left"
            icon={<Icon icon="line-add" />}
            onClick={() => {
              const newCompanyDangerFactorList = [...companyDangerFactorList];
              newCompanyDangerFactorList.push({
                id: undefined,
                category: undefined,
                description: undefined,
                legalDescription: undefined,
              });
              setCompanyDangerFactorList(newCompanyDangerFactorList);
            }}
          >
            직접 추가
          </ActionButton>
          <ActionButton variant="tonal-blue" size="s" showIcon="left" icon={<Icon icon="line-add" />}>
            자동 추천 추가
          </ActionButton>
        </div>
        {/* 3.2. table */}
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header required>위험분류</Table.Header>
              <Table.Header required>위험원인</Table.Header>
              <Table.Header required>유해 위험원인</Table.Header>
              <Table.Header>관련근거(법적근거)</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {companyDangerFactorList?.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <DropdownButton
                    options={dangerFactorOptions}
                    selectedOption={dangerFactorOptions?.find(option => option.value === item?.category)}
                    onSelected={async selectedOption => {
                      const updatedCompanyDangerFactors = [...companyDangerFactorList];
                      updatedCompanyDangerFactors[index].category = selectedOption.value as any;
                      updatedCompanyDangerFactors[index].title = undefined;
                      setCompanyDangerFactorList(updatedCompanyDangerFactors);

                      const dangerFactorData = await getDangerFactorTitle(selectedOption.value as string);

                      const formattedTitles =
                        dangerFactorData?.dangerFactorTitleList?.map(title => ({
                          value: title ?? '',
                          label: title ?? '',
                        })) ?? [];
                      const updatedTitleList = [...titleList];
                      while (updatedTitleList.length < companyProcessTitle.length) {
                        updatedTitleList.push([]);
                      }
                      updatedTitleList[index] = formattedTitles;
                      setTitleList(updatedTitleList);
                    }}
                    isFullWidth
                  />
                </Table.Cell>
                <Table.Cell>
                  <DropdownButton
                    options={titleList[index]}
                    selectedOption={titleList[index]?.find(title => title.value === item?.title)}
                    onSelected={option => {
                      const newCompanyDangerFactorList = [...companyDangerFactorList];
                      newCompanyDangerFactorList[index].title = option.value as any;
                      setCompanyDangerFactorList(newCompanyDangerFactorList);
                    }}
                    isFullWidth
                  />
                </Table.Cell>
                <Table.Cell>
                  <TextField.Multi
                    defaultValue={item?.description}
                    isFullWidth
                    onChange={event => {
                      const newCompanyDangerFactorList = [...companyDangerFactorList];
                      newCompanyDangerFactorList[index].description = event.target.value;
                      setCompanyDangerFactorList(newCompanyDangerFactorList);
                    }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-row gap-2">
                    <TextField.Multi
                      defaultValue={item?.legalDescription}
                      isFullWidth
                      onChange={event => {
                        const newCompanyDangerFactorList = [...companyDangerFactorList];
                        newCompanyDangerFactorList[index].legalDescription = event.target.value;
                        setCompanyDangerFactorList(newCompanyDangerFactorList);
                      }}
                    />
                    <IconButton
                      variant="outline"
                      size="m"
                      icon="trash"
                      onClick={() => {
                        const newCompanyDangerFactorList = [...companyDangerFactorList];
                        newCompanyDangerFactorList.splice(index, 1);
                        setCompanyDangerFactorList(newCompanyDangerFactorList);
                      }}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {/* 3.3. button */}
        <div className="flex flex-col items-end self-stretch">
          <ActionButton
            variant="tonal-blue"
            size="s"
            showIcon="left"
            icon={<Icon icon="save" />}
            onClick={() => {
              handleUpdateCompanyDangerFactor(companyDangerFactorList);
            }}
          >
            저장하기
          </ActionButton>
        </div>
      </div>

      {/* 4. 버튼 */}
      <div className="flex items-center self-stretch justify-center gap-2">
        <ActionButton variant="tonal-gray" size="l" onClick={handleClickPreviousStepButton}>
          저장 후 이전 단계
        </ActionButton>
        <ActionButton variant="filled" size="l" onClick={handleClickNextStepButton}>
          저장 후 다음 단계
        </ActionButton>
      </div>
    </div>
  );
}
