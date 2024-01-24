'use client';

import { useRouter } from 'next/navigation';
import Label from '../../typography/Label/Label';
import Title from '../../typography/Title/Title';
import ActionButton from '../../ui/ActionButton/ActionButton';
import Table from '../../ui/Table/Table';
import TextField from '../../ui/TextField/TextField';
import DropdownButton from '../../ui/DropdownButton/DropdownButton';
import Icon from '../../ui/Icon/Icon';
import Headline from '../../typography/Headline/Headline';
import ProgressBox from '../../ui/ProgressBox/ProgressBox';
import IconButton from '../../ui/IconButton/IconButton';
import Body from '../../typography/Body/Body';
import { DotIconGreen, DotIconRed, DotIconYellow } from '../../ui/Icon/EtcIcon/DotIcon';
import ColorBox from '../../ui/ColorBox/ColorBox';
import { useToast } from '@/components/ui/Toast/use-toast';
import { Step2Api, Step34Api } from '@/lib/axios/oas-axios';
import { getParameterFromUrl } from '@/utils/urlUtil';
import {
  type ResponseResultRecommendDangerSolutionResponse,
  type ResponseResultGetCompanyDangerFactorAndSolutionResponse,
  type ResponseResultUpsertCompanyDangerSolutionResponse,
  type ResponseResultGetCompanyProcessTitleResponse,
  type UpsertCompanyDangerSolutionRequest,
  CompanyDangerSolutionVOResTypeEnum,
  type UpdateCompanyDangerFactorPossibilityRequest,
  type UpdateCompanyDangerFactorSevereRequest,
} from '@/services';
import { useMutation, useQuery } from 'react-query';
import EtcIcon from '@/components/ui/Icon/EtcIcon/EtcIcon';
import { useStep3Store } from '@/hooks/dashboard/Step3Store';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/Dialog/Dialog';
import style from './page.module.scss';

export default function Step3Page() {
  const { toast } = useToast();
  const router = useRouter();

  const severeOptionList = [
    {
      value: 1,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconRed />
          <Body size="m" color="gray800">
            1(소)
          </Body>
        </div>
      ),
    },
    {
      value: 2,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconYellow />
          <Body size="m" color="gray800">
            2(중)
          </Body>
        </div>
      ),
    },
    {
      value: 3,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconGreen />
          <Body size="m" color="gray800">
            3(대)
          </Body>
        </div>
      ),
    },
  ];
  const possibilityOptionList = [
    {
      value: 1,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconRed />
          <Body size="m" color="gray800">
            1(하)
          </Body>
        </div>
      ),
    },
    {
      value: 2,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconYellow />
          <Body size="m" color="gray800">
            2(중)
          </Body>
        </div>
      ),
    },
    {
      value: 3,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconGreen />
          <Body size="m" color="gray800">
            3(상)
          </Body>
        </div>
      ),
    },
  ];

  const {
    companyProcessTitle,
    selectedCompanyProcessTitleIndex,
    companyDangerFactorAndSolution,
    dialogDangerFactorList,
    selectedDialogDangerFactorIndex,
    dialogCompanyDangerSolutionList,
    setCompanyDangerFactorAndSolution,
    setCompanyProcessTitle,
    setSelectedCompanyProcessTitleIndex,
    setDialogDangerFactorList,
    setSelectedDialogDangerFactorIndex,
    setDialogCompanyDangerSolutionList,
  } = useStep3Store();

  // 1 단계 공정 목록 조회 (Dropdown)
  const getCompanyProcessTitle = async () => {
    const response = await Step2Api.getCompanyProcessTitleUsingGET(Number(getParameterFromUrl('assessmentId')));

    const { data } = response?.data as ResponseResultGetCompanyProcessTitleResponse;

    const options = data?.companyProcessTitleList?.map(item => {
      return {
        value: item?.id ?? '',
        label: item?.title ?? '',
        completed: item?.currentDangerSolutionDoneYn,
      };
    });

    setCompanyProcessTitle(options ?? []);
    setSelectedCompanyProcessTitleIndex(0);

    return data;
  };

  const getCompanyDangerFactorAndSolution = async (companyProcessId: number) => {
    const response = await Step34Api.getCompanyDangerFactorAndSolutionUsingGET(
      Number(getParameterFromUrl('assessmentId')),
      companyProcessId
    );

    const { data } = response?.data as ResponseResultGetCompanyDangerFactorAndSolutionResponse;

    setCompanyDangerFactorAndSolution(data?.companyDangerFactorAndSolutionList ?? []);

    return data;
  };

  const getRecommendDangerSolution = async (companyDangerFactorId: number) => {
    const response = await Step34Api.recommendDangerSolutionUsingGET(
      Number(getParameterFromUrl('assessmentId')),
      companyDangerFactorId
    );

    const { data } = response?.data as ResponseResultRecommendDangerSolutionResponse;

    setDialogCompanyDangerSolutionList(data?.dangerSolutionList ?? []);

    return data;
  };

  const updateCompanyDangerSolution = async ({
    companyDangerFactorId,
    companyDangerSolutionRequest,
  }: {
    companyDangerFactorId: number;
    companyDangerSolutionRequest: UpsertCompanyDangerSolutionRequest;
  }) => {
    const response = await Step34Api.upsertCompanyDangerSolutionUsingPUT(
      Number(getParameterFromUrl('assessmentId')),
      companyDangerFactorId,
      companyDangerSolutionRequest
    );

    const { data } = response?.data as ResponseResultUpsertCompanyDangerSolutionResponse;
    return data;
  };

  // 가능성 수정
  const updateCompanyDangerFactorPossibility = async ({
    companyDangerFactorId,
    updateCompanyDangerFactorPossibilityRequest,
  }: {
    companyDangerFactorId: number;
    updateCompanyDangerFactorPossibilityRequest: UpdateCompanyDangerFactorPossibilityRequest;
  }) => {
    const response = await Step34Api.updateCompanyDangerFactorAfterRiskUsingPUT1(
      Number(getParameterFromUrl('assessmentId')),
      companyDangerFactorId,
      updateCompanyDangerFactorPossibilityRequest
    );

    const { data } = response?.data as ResponseResultUpsertCompanyDangerSolutionResponse;
    return data;
  };

  // 중대성 수정
  const updateCompanyDangerFactorSevere = async ({
    companyDangerFactorId,
    updateCompanyDangerFactorSevereRequest,
  }: {
    companyDangerFactorId: number;
    updateCompanyDangerFactorSevereRequest: UpdateCompanyDangerFactorSevereRequest;
  }) => {
    const response = await Step34Api.updateCompanyDangerFactorAfterRiskUsingPUT2(
      Number(getParameterFromUrl('assessmentId')),
      companyDangerFactorId,
      updateCompanyDangerFactorSevereRequest
    );

    const { data } = response?.data as ResponseResultUpsertCompanyDangerSolutionResponse;
    return data;
  };

  const {
    data: companyProcessTitleData,
    isLoading: companyProcessTitleIsLoading,
    isError: companyProcessTitleIsError,
    error: companyProcessTitleError,
  } = useQuery('getCompanyProcessTitle', getCompanyProcessTitle, {
    refetchOnWindowFocus: false,
  });

  const {
    data: companyDangerFactorAndSolutionData,
    isLoading: companyDangerFactorAndSolutionIsLoading,
    isError: companyDangerFactorAndSolutionIsError,
    error: companyDangerFactorAndSolutionError,
  } = useQuery(
    ['getCompanyDangerFactorAndSolution', selectedCompanyProcessTitleIndex],
    () => getCompanyDangerFactorAndSolution(Number(companyProcessTitle[selectedCompanyProcessTitleIndex]?.value) || 0),
    {
      enabled: !!companyProcessTitle.length,
      refetchOnWindowFocus: false,
    }
  );

  const {
    data: recommendDangerSolutionData,
    isLoading: recommendDangerSolutionIsLoading,
    isError: recommendDangerSolutionIsError,
    error: recommendDangerSolutionError,
  } = useQuery(
    ['getRecommendDangerSolution', selectedDialogDangerFactorIndex],
    () => getRecommendDangerSolution(Number(dialogDangerFactorList[selectedDialogDangerFactorIndex]?.value) || 0),
    {
      enabled: !!dialogDangerFactorList.length,
      refetchOnWindowFocus: false,
    }
  );

  const {
    mutate: updateCompanyDangerSolutionMutate,
    isLoading: updateCompanyDangerSolutionIsLoading,
    isError: updateCompanyDangerSolutionIsError,
    error: updateCompanyDangerSolutionError,
  } = useMutation(updateCompanyDangerSolution, {
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
  });

  const {
    mutate: updateCompanyDangerFactorPossibilityMutate,
    isLoading: updateCompanyDangerFactorPossibilityIsLoading,
    isError: updateCompanyDangerFactorPossibilityIsError,
    error: updateCompanyDangerFactorPossibilityError,
  } = useMutation(updateCompanyDangerFactorPossibility, {
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
  });

  const {
    mutate: updateCompanyDangerFactorSevereMutate,
    isLoading: updateCompanyDangerFactorSevereIsLoading,
    isError: updateCompanyDangerFactorSevereIsError,
    error: updateCompanyDangerFactorSevereError,
  } = useMutation(updateCompanyDangerFactorSevere, {
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
  });

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
      selected: false,
      url: `/dashboard/step2?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
    {
      number: 3,
      label: '위험성 수준 판단',
      active: true,
      selected: true,
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

  const handleClickPreviousStepButton = () => {
    router.push(`/dashboard/step2?assessmentId=${getParameterFromUrl('assessmentId')}`);
  };

  const handleClickNextStepButton = () => {
    router.push(`/dashboard/step4?assessmentId=${getParameterFromUrl('assessmentId')}`);
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
              3단계 : 유해 위험요인에 대한 현재의 안전보건조치 내용을 작성하고 현재의 위험성을 추정해주세요
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

      {/* 3. 위험성 추정 */}
      <div className="flex flex-col items-start w-full gap-3">
        <Title size="l" color="gray800">
          위험성 수준 판단
        </Title>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>유해 위험요인</Table.Header>
              <Table.Header>현재의 안전보건조치</Table.Header>
              <Table.Header required>가능성(빈도)</Table.Header>
              <Table.Header required>중대성(강도)</Table.Header>
              <Table.Header>위험성</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {companyDangerFactorAndSolution?.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {/* TODO: 무조건 disabled 처리해야하나? */}
                  <TextField.Single value={item?.companyDangerFactorDescription} disabled isFullWidth />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-row gap-2">
                    {/* 이거는 사실상 내용 미리보기 해주는 버튼임. onChange 없음 */}
                    <TextField.Multi
                      value={item?.companyDangerSolutionList
                        ?.filter(item => item?.type === CompanyDangerSolutionVOResTypeEnum.Current)
                        ?.map(item => `- ${item?.title ?? ''}`)
                        .join('\n')}
                      isFullWidth
                      disabled
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <IconButton
                          variant="outline"
                          size="m"
                          icon="edit"
                          onClick={async () => {
                            const dangerFactorIdAndDescription = companyDangerFactorAndSolution?.map(item => {
                              return {
                                value: item?.companyDangerFactorId as number,
                                label: item?.companyDangerFactorDescription as string,
                              };
                            });

                            setDialogDangerFactorList(dangerFactorIdAndDescription ?? []);
                            setSelectedDialogDangerFactorIndex(index);
                          }}
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-[792px]">
                        {/* 작성 내용 */}
                        <div
                          className={`flex max-h-[448px] w-[712px] flex-col items-start gap-8 overflow-y-auto ${style.dialogScrollbar}`}
                        >
                          {/* 유해 위험 요인 */}
                          <div className="flex flex-col items-start self-stretch gap-3">
                            {/* title */}
                            <div className="flex items-center self-stretch justify-between">
                              <div className="flex items-center flex-grow gap-2">
                                <Title size="l" color="gray800">
                                  유해 위험요인 선택
                                </Title>
                                <div>
                                  <Title size="l" color="blue500">
                                    {Number(selectedDialogDangerFactorIndex) + 1 || '-'}
                                  </Title>
                                  <Title size="l" color="gray300">
                                    {' '}
                                    /{' '}
                                  </Title>
                                  <Title size="l" color="gray400">
                                    {Number(dialogDangerFactorList?.length) || '-'}
                                  </Title>
                                </div>
                              </div>
                              <Label size="s" color="blue500">
                                다음 위험요인으로 바로 이동하세요!
                              </Label>
                            </div>
                            <div className="flex items-start w-full gap-8">
                              {/* 드롭다운 */}
                              <div className="flex flex-grow">
                                <DropdownButton
                                  options={dialogDangerFactorList}
                                  selectedOption={dialogDangerFactorList[selectedDialogDangerFactorIndex || 0]}
                                  onSelected={option => {
                                    setSelectedDialogDangerFactorIndex(
                                      dialogDangerFactorList.findIndex(item => item.value === option.value)
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
                                    setSelectedDialogDangerFactorIndex(selectedDialogDangerFactorIndex - 1);
                                  }}
                                  disabled={selectedDialogDangerFactorIndex === 0}
                                >
                                  이전
                                </ActionButton>
                                <ActionButton
                                  variant="filled"
                                  size="m"
                                  onClick={() => {
                                    setSelectedDialogDangerFactorIndex(selectedDialogDangerFactorIndex + 1);
                                  }}
                                  disabled={selectedDialogDangerFactorIndex === dialogDangerFactorList.length - 1}
                                >
                                  다음
                                </ActionButton>
                              </div>
                            </div>
                          </div>
                          {/* 현재의 안전보건조치 */}
                          <div className="flex flex-col items-start self-stretch gap-3">
                            <div className="flex items-start self-stretch justify-between">
                              <Title size="l" color="gray800">
                                현재의 안전보건조치
                              </Title>
                              <ActionButton
                                variant="tonal-gray"
                                size="s"
                                showIcon="left"
                                icon={<Icon icon="line-add" />}
                                onClick={() => {
                                  const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                                  newCompanyDangerFactorAndSolution[
                                    selectedDialogDangerFactorIndex
                                  ].companyDangerSolutionList?.push({
                                    title: '',
                                    type: CompanyDangerSolutionVOResTypeEnum.Current,
                                  });
                                  setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                                }}
                              >
                                직접 추가
                              </ActionButton>
                            </div>
                            {companyDangerFactorAndSolution?.[
                              selectedDialogDangerFactorIndex
                            ]?.companyDangerSolutionList?.filter(
                              item => item?.type === CompanyDangerSolutionVOResTypeEnum.Current
                            )?.length ? (
                              // 존재하는 경우
                              companyDangerFactorAndSolution?.[
                                selectedDialogDangerFactorIndex
                              ]?.companyDangerSolutionList?.map(
                                (item, index) =>
                                  item?.type === CompanyDangerSolutionVOResTypeEnum.Current && (
                                    <div className="flex items-start self-stretch gap-2" key={index}>
                                      <TextField.Single
                                        value={item.title}
                                        isFullWidth
                                        onChange={event => {
                                          const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                                          newCompanyDangerFactorAndSolution[
                                            selectedDialogDangerFactorIndex
                                          ].companyDangerSolutionList?.splice(index, 1, {
                                            ...item,
                                            title: event.target.value,
                                          });
                                          setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                                        }}
                                      />
                                      <IconButton
                                        variant="outline"
                                        size="m"
                                        icon="trash"
                                        onClick={() => {
                                          const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                                          newCompanyDangerFactorAndSolution[
                                            selectedDialogDangerFactorIndex
                                          ].companyDangerSolutionList?.splice(index, 1);
                                          setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                                        }}
                                      />
                                      <div className="inline-flex flex-col h-[42px] items-center justify-center relative rounded-[4px] border border-solid border-gray-200">
                                        <Icon icon="chevron-up-s" size={18} color="gray300" />
                                        <div className="relative w-[32px] h-px bg-gray-200" />
                                        <div
                                          onClick={() => {
                                            const newCompanyDangerFactorAndSolution = [
                                              ...companyDangerFactorAndSolution,
                                            ];
                                            newCompanyDangerFactorAndSolution[
                                              selectedDialogDangerFactorIndex
                                            ].companyDangerSolutionList?.splice(index, 1, {
                                              ...item,
                                              type: CompanyDangerSolutionVOResTypeEnum.Future,
                                            });
                                            setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                                          }}
                                          className="flex items-center justify-center w-full cursor-pointer"
                                        >
                                          <Icon icon="chevron-down-s" size={18} color="gray600" />
                                        </div>
                                      </div>
                                    </div>
                                  )
                              )
                            ) : (
                              // 존재하지 않는 경우
                              <div className="flex flex-col items-start self-stretch gap-3">
                                <div className="flex items-center self-stretch justify-center px-3 py-5 bg-white border border-gray-200 border-dashed rounded">
                                  <Body size="m" color="gray400" className="text-center">
                                    현재 시행하고 있는 안전보건조치를
                                    <br />
                                    아래 추천 항목의 + 버튼을 눌러 추가하거나 항목을 직접 추가해주세요
                                  </Body>
                                </div>
                              </div>
                            )}
                          </div>
                          {/* 위험성 감소대책 */}
                          {!!companyDangerFactorAndSolution?.[
                            selectedDialogDangerFactorIndex
                          ]?.companyDangerSolutionList?.filter(
                            item => item?.type === CompanyDangerSolutionVOResTypeEnum.Future
                          )?.length && (
                            <div className="flex flex-col items-start self-stretch gap-3">
                              {/* 타이틀 */}
                              <div className="flex items-center self-stretch justify-between">
                                <Title size="l" color="gray600">
                                  위험성 감소대책
                                </Title>
                                <Icon icon="chevron-up-s" size={24} />
                              </div>
                              {companyDangerFactorAndSolution?.[
                                selectedDialogDangerFactorIndex
                              ]?.companyDangerSolutionList?.map(
                                (item, index) =>
                                  item?.type === CompanyDangerSolutionVOResTypeEnum.Future && (
                                    <div className="flex items-start self-stretch gap-2" key={index}>
                                      <TextField.Single
                                        value={item.title}
                                        isFullWidth
                                        onChange={event => {
                                          const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                                          newCompanyDangerFactorAndSolution[
                                            selectedDialogDangerFactorIndex
                                          ].companyDangerSolutionList?.splice(index, 1, {
                                            ...item,
                                            title: event.target.value,
                                          });
                                          setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                                        }}
                                      />
                                      <div className="inline-flex flex-col h-[42px] items-center justify-center relative rounded-[4px] border border-solid border-gray-200">
                                        <div
                                          onClick={() => {
                                            const newCompanyDangerFactorAndSolution = [
                                              ...companyDangerFactorAndSolution,
                                            ];
                                            newCompanyDangerFactorAndSolution[
                                              selectedDialogDangerFactorIndex
                                            ].companyDangerSolutionList?.splice(index, 1, {
                                              ...item,
                                              type: CompanyDangerSolutionVOResTypeEnum.Current,
                                            });
                                            setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                                          }}
                                          className="flex items-center justify-center w-full cursor-pointer"
                                        >
                                          <Icon icon="chevron-up-s" size={18} color="gray600" />
                                        </div>
                                        <div className="relative w-[32px] h-px bg-gray-200" />
                                        <Icon icon="chevron-down-s" size={18} color="gray300" />
                                      </div>
                                    </div>
                                  )
                              )}
                            </div>
                          )}
                          {/* 표준 안전보건조치 추천 */}
                          <div className="flex flex-col items-start self-stretch gap-3">
                            {/* 타이틀 */}
                            <div className="flex items-center self-stretch justify-between">
                              <Title size="l" color="gray600">
                                표준 안전보건조치 추천
                              </Title>
                              <Icon icon="chevron-up-s" size={24} />
                            </div>
                            {dialogCompanyDangerSolutionList.map((item, index) => (
                              <div className="flex items-start self-stretch gap-2" key={index}>
                                <div className="flex items-center flex-grow gap-2 px-3 py-2 rounded bg-gray-50">
                                  {item?.title}
                                </div>
                                <IconButton
                                  variant="outline"
                                  size="m"
                                  icon="line-add"
                                  onClick={() => {
                                    const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                                    newCompanyDangerFactorAndSolution[
                                      selectedDialogDangerFactorIndex
                                    ].companyDangerSolutionList?.push({
                                      ...item,
                                      type: CompanyDangerSolutionVOResTypeEnum.Current,
                                    });
                                    setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                                  }}
                                  disabled={
                                    companyDangerFactorAndSolution?.[
                                      selectedDialogDangerFactorIndex
                                    ]?.companyDangerSolutionList?.findIndex(
                                      companyDangerSolution =>
                                        // TODO: id만 비교해도 되는지 확인
                                        companyDangerSolution?.dangerSolutionId === item?.dangerSolutionId
                                      // companyDangerSolution?.title === item?.title
                                    ) !== -1
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <ActionButton
                              type="button"
                              variant="filled"
                              size="l"
                              onClick={() => {
                                updateCompanyDangerSolutionMutate({
                                  companyDangerFactorId:
                                    Number(dialogDangerFactorList[selectedDialogDangerFactorIndex]?.value) || 0,
                                  companyDangerSolutionRequest: {
                                    companyDangerSolutionList: companyDangerFactorAndSolution?.[
                                      selectedDialogDangerFactorIndex
                                    ]
                                      ?.companyDangerSolutionList as UpsertCompanyDangerSolutionRequest['companyDangerSolutionList'],
                                    possibility:
                                      companyDangerFactorAndSolution?.[selectedDialogDangerFactorIndex]?.possibility,
                                    severe: companyDangerFactorAndSolution?.[selectedDialogDangerFactorIndex]?.severe,
                                  },
                                });
                              }}
                            >
                              저장 후 닫기
                            </ActionButton>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <DropdownButton
                    options={possibilityOptionList}
                    selectedOption={possibilityOptionList?.find(
                      possibilityOption => possibilityOption.value === item?.possibility
                    )}
                    onSelected={option => {
                      const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                      newCompanyDangerFactorAndSolution[index].possibility = option.value as number;

                      updateCompanyDangerFactorPossibilityMutate({
                        companyDangerFactorId: item?.companyDangerFactorId as number,
                        updateCompanyDangerFactorPossibilityRequest: {
                          possibility: option.value as number,
                        },
                      });

                      setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                    }}
                    isFullWidth
                  />
                </Table.Cell>
                <Table.Cell>
                  <DropdownButton
                    options={severeOptionList}
                    selectedOption={severeOptionList?.find(severeOption => severeOption.value === item?.severe)}
                    isFullWidth
                    onSelected={option => {
                      const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                      newCompanyDangerFactorAndSolution[index].severe = option.value as number;

                      updateCompanyDangerFactorSevereMutate({
                        companyDangerFactorId: item?.companyDangerFactorId as number,
                        updateCompanyDangerFactorSevereRequest: {
                          severe: option.value as number,
                        },
                      });

                      setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                    }}
                  />
                </Table.Cell>
                <Table.Cell style={{ width: '80px' }}>
                  <ColorBox value={(item?.possibility || 0) * (item?.severe || 0)} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
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
