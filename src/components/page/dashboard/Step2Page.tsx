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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/AlertDialog/AlertDialog';

import { useState } from 'react';
import { toast } from '@/components/ui/Toast/Toast';

export default function Step2Page() {
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

  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [deleteConfirmDialogOpen, setDeleteConfirmDialogOpen] = useState(false);
  const [deleteConfirmDialogIndex, setDeleteConfirmDialogIndex] = useState(0);

  // 1 단계 공정 목록 조회 (Dropdown)
  const getCompanyProcessTitle = async () => {
    const response = await Step2Api.getCompanyProcessTitleUsingGET(Number(getParameterFromUrl('assessmentId')));

    const { data } = response?.data as ResponseResultGetCompanyProcessTitleResponse;

    const options = data?.companyProcessTitleList?.map(item => {
      return {
        value: item?.id ?? '',
        label: item?.title ?? '',
        completed: item?.dangerFactorDoneYn,
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

    setCompanyDangerFactorList([...(data?.companyDangerFactorList || [])]);

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

    if (data?.companyDangerFactorList?.length) {
      const newCompanyDangerFactorList = [...companyDangerFactorList];
      newCompanyDangerFactorList.push(...data?.companyDangerFactorList);
      setCompanyDangerFactorList(newCompanyDangerFactorList);
    } else {
      setAlertDialogOpen(true);
    }

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
  } = useQuery(['getCompanyProcessTitle'], getCompanyProcessTitle, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

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
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  const { mutate: updateCompanyDangerFactorMutate, isLoading: updateCompanyDangerFactorIsLoading } = useMutation(
    updateCompanyDangerFactor,
    {
      onSuccess: () => {
        toast.info('작성한 내용이 저장되었습니다');
      },
      onError: () => {
        toast.danger('저장에 실패했습니다. 다시 시도해주시기 바랍니다');
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
    {
      number: 5,
      label: '감소대책 실행',
      active: false,
      selected: false,
      url: `/dashboard/step5?assessmentId=${getParameterFromUrl('assessmentId')}`,
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
    handleUpdateCompanyDangerFactor(companyDangerFactorList);
    router.push(`/dashboard/step3?assessmentId=${getParameterFromUrl('assessmentId')}`);
  };

  return (
    <div className="flex flex-col items-center gap-12 pb-[60px]">
      {/* 1. 상단 */}
      <div className="flex flex-col items-center w-full">
        {/* 1.1. 작성 가이드 버튼 */}
        <div className="flex pt-6 pb-4 flex-col items-end gap-2.5 w-full">
          <div className="flex items-start gap-1">
            <Icon icon="circleHelp" className="w-[20px] h-[20px] text-blue-500" />
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
            icon={<Icon icon="lineAdd" />}
            onClick={() => {
              // const newCompanyDangerFactorList = [...companyDangerFactorList];
              // newCompanyDangerFactorList.push({
              //   id: 0,
              //   category: undefined,
              //   description: '',
              //   legalDescription: undefined,
              // });
              // setCompanyDangerFactorList(newCompanyDangerFactorList);
            }}
          >
            직접 추가
          </ActionButton>
          <ActionButton
            variant="tonal-blue"
            size="s"
            showIcon="left"
            icon={<Icon icon="lineAdd" />}
            onClick={() => {
              getRecommendDangerFactor(Number(companyProcessTitle[selectedCompanyProcessTitleIndex]?.value) || 0);
            }}
          >
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
                      updatedCompanyDangerFactors[index].title = '';
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
                    value={item?.description}
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
                      value={item?.legalDescription}
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
                        setDeleteConfirmDialogOpen(true);
                        setDeleteConfirmDialogIndex(index);
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

      {/* 모달 */}

      <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>추천 유해 위험요인 항목이 이미 존재해요</AlertDialogTitle>
            <AlertDialogDescription>
              자동으로 추천한 항목 중 일부를 수정하거나
              <br />
              삭제했을 때 추천 항목을 다시 추가할 수 있습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="filled" size="l" onClick={() => setAlertDialogOpen(false)}>
              닫기
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={deleteConfirmDialogOpen} onOpenChange={setDeleteConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>해당 유해 위험요인 내용을 삭제하시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              삭제 시 해당 유해 위험요인 관련된 데이터가
              <br />
              모두 삭제됩니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="tonal-gray" size="l" onClick={() => setDeleteConfirmDialogOpen(false)}>
              취소하기
            </AlertDialogCancel>
            <AlertDialogAction
              variant="tonal-red"
              size="l"
              onClick={() => {
                const newCompanyDangerFactorList = [...companyDangerFactorList];
                newCompanyDangerFactorList.splice(deleteConfirmDialogIndex, 1);
                setCompanyDangerFactorList(newCompanyDangerFactorList);

                setDeleteConfirmDialogOpen(false);
              }}
            >
              삭제하기
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
