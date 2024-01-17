'use client';

import { useRouter } from 'next/navigation';
import Body from '../../typography/Body/Body';
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
import { DotIconRed, DotIconYellow, DotIconGreen } from '../../ui/Icon/EtcIcon/DotIcon';
import ColorBox from '../../ui/ColorBox/ColorBox';
import { getParameterFromUrl } from '@/utils/urlUtil';
import { useToast } from '@/components/ui/Toast/use-toast';
import { useStep4Store } from '@/hooks/dashboard/Step4Store';
import { Step2Api, Step34Api } from '@/lib/axios/oas-axios';
import {
  type ResponseResultRecommendDangerSolutionResponse,
  type ResponseResultGetCompanyDangerFactorAndSolutionResponse,
  type ResponseResultUpsertCompanyDangerSolutionResponse,
  type ResponseResultGetCompanyProcessTitleResponse,
  type UpsertCompanyDangerSolutionRequest,
  CompanyDangerSolutionVOResTypeEnum,
  type UpdateCompanyDangerFactorAfterRiskRequest,
} from '@/services';
import { useMutation, useQuery } from 'react-query';
import EtcIcon from '@/components/ui/Icon/EtcIcon/EtcIcon';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/Dialog/Dialog';
import style from './page.module.scss';

export default function Step4Page() {
  const { toast } = useToast();
  const router = useRouter();

  const afterRiskOptionList = [
    {
      value: 1,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconGreen />
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
          <DotIconGreen />
          <Body size="m" color="gray800">
            2(소)
          </Body>
        </div>
      ),
    },
    {
      value: 3,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconYellow />
          <Body size="m" color="gray800">
            3(중)
          </Body>
        </div>
      ),
    },
    {
      value: 4,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconYellow />
          <Body size="m" color="gray800">
            4(중)
          </Body>
        </div>
      ),
    },
    {
      value: 5,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconYellow />
          <Body size="m" color="gray800">
            5(중)
          </Body>
        </div>
      ),
    },
    {
      value: 6,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconYellow />
          <Body size="m" color="gray800">
            6(중)
          </Body>
        </div>
      ),
    },
    {
      value: 7,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconRed />
          <Body size="m" color="gray800">
            7(대)
          </Body>
        </div>
      ),
    },
    {
      value: 8,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconRed />
          <Body size="m" color="gray800">
            8(대)
          </Body>
        </div>
      ),
    },
    {
      value: 9,
      label: (
        <div className="flex flex-row items-center gap-1">
          <DotIconRed />
          <Body size="m" color="gray800">
            9(대)
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
  } = useStep4Store();

  const dummyData = {
    data: [
      {
        detailJob: '123',
        target: '5t',
        target2: '인65쇄',
        target3: '455743',
        id: 1,
      },
      {
        detailJob: '345',
        target: '인347쇄',
        target2: '인735쇄',
        target3: '인3453쇄',
        id: 2,
      },
      {
        detailJob: '345',
        target: '인347쇄',
        target2: '인735쇄',
        target3: '인3453쇄',
        id: 3,
      },
    ],
  };

  // 1 단계 공정 목록 조회 (Dropdown)
  const getCompanyProcessTitle = async () => {
    const response = await Step2Api.getCompanyProcessTitleUsingGET(Number(getParameterFromUrl('assessmentId')));

    const { data } = response?.data as ResponseResultGetCompanyProcessTitleResponse;

    const options = data?.companyProcessTitleList?.map(item => {
      return {
        value: item?.id ?? '',
        label: item?.title ?? '',
        completed: item?.doneYn,
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

  const updateCompanyDangerFactorAfterRisk = async ({
    companyDangerFactorId,
    updateCompanyDangerFactorAfterRiskRequest,
  }: {
    companyDangerFactorId: number;
    updateCompanyDangerFactorAfterRiskRequest: UpdateCompanyDangerFactorAfterRiskRequest;
  }) => {
    const response = await Step34Api.updateCompanyDangerFactorAfterRiskUsingPUT(
      Number(getParameterFromUrl('assessmentId')),
      companyDangerFactorId,
      updateCompanyDangerFactorAfterRiskRequest
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
    mutate: updateCompanyDangerFactorAfterRiskMutate,
    isLoading: updateCompanyDangerFactorAfterRiskIsLoading,
    isError: updateCompanyDangerFactorAfterRiskIsError,
    error: updateCompanyDangerFactorAfterRiskError,
  } = useMutation(updateCompanyDangerFactorAfterRisk, {
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
      selected: false,
      url: `/dashboard/step3?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
    {
      number: 4,
      label: '감소대책 수립',
      active: true,
      selected: true,
      url: `/dashboard/step4?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
  ];

  const handleClickPreviousStepButton = () => {
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
              4단계 : 3단계에서 추정된 위험성이 허용가능한지를 결정하고 위험성 감소대책을 작성해주세요
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
          위험성 감소 대책
        </Title>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>유해 위험요인</Table.Header>
              <Table.Header>위험성</Table.Header>
              <Table.Header>추가 위험성 감소대책</Table.Header>
              <Table.Header required>개선 후 위험성</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {companyDangerFactorAndSolution.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {/* TODO: 무조건 disabled 처리해야하나? */}
                  <TextField.Single value={item?.companyDangerFactorDescription} disabled isFullWidth />
                </Table.Cell>
                <Table.Cell style={{ width: '80px' }}>
                  <ColorBox value={(item?.possibility || 0) * (item?.severe || 0)} />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-row gap-2">
                    <TextField.Multi
                      value={item?.companyDangerSolutionList
                        ?.filter(item => item?.type === CompanyDangerSolutionVOResTypeEnum.Future)
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
                          {/* 위험성 감소대책 */}
                          <div className="flex flex-col items-start self-stretch gap-3">
                            <div className="flex items-start self-stretch justify-between">
                              <Title size="l" color="gray800">
                                위험성 감소대책
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
                                    type: CompanyDangerSolutionVOResTypeEnum.Future,
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
                              item => item?.type === CompanyDangerSolutionVOResTypeEnum.Future
                            )?.length ? (
                              // 존재하는 경우
                              companyDangerFactorAndSolution?.[
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
                                      <div className="inline-flex flex-col h-[40px] items-center justify-center relative rounded-[4px] border border-solid border-gray-200">
                                        <Icon icon="chevron-up-s" size={18} />
                                        <div className="relative w-[32px] h-px bg-gray-200" />
                                        <Icon icon="chevron-down-s" size={18} />
                                      </div>
                                    </div>
                                  )
                              )
                            ) : (
                              // 존재하지 않는 경우
                              <div className="flex flex-col items-start self-stretch gap-3">
                                <div className="flex items-center self-stretch justify-center px-3 py-5 bg-white border border-gray-200 border-dashed rounded">
                                  <Body size="m" color="gray400" className="text-center">
                                    앞으로 추가로 시행할 안전보건조치를
                                    <br />
                                    아래 추천 항목의 + 버튼을 눌러 추가하거나 항목을 직접 추가해주세요
                                  </Body>
                                </div>
                              </div>
                            )}
                          </div>
                          {/* 현재의 안전보건조치 */}
                          <div className="flex flex-col items-start self-stretch gap-3">
                            {/* 타이틀 */}
                            <div className="flex items-center self-stretch justify-between">
                              <Title size="l" color="gray600">
                                현재의 안전보건조치
                              </Title>
                              <Icon icon="chevron-up-s" size={24} />
                            </div>
                            {companyDangerFactorAndSolution?.[
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
                                    <div className="inline-flex flex-col h-[40px] items-center justify-center relative rounded-[4px] border border-solid border-gray-200">
                                      <Icon icon="chevron-up-s" size={18} />
                                      <div className="relative w-[32px] h-px bg-gray-200" />
                                      <Icon icon="chevron-down-s" size={18} />
                                    </div>
                                  </div>
                                )
                            )}
                          </div>
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
                                      type: CompanyDangerSolutionVOResTypeEnum.Future,
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
                <Table.Cell style={{ width: '104px' }}>
                  <DropdownButton
                    options={afterRiskOptionList}
                    selectedOption={afterRiskOptionList.find(
                      afterRiskOption => afterRiskOption.value === item?.afterRisk
                    )}
                    onSelected={option => {
                      const newCompanyDangerFactorAndSolution = [...companyDangerFactorAndSolution];
                      newCompanyDangerFactorAndSolution[index].afterRisk = option.value as number;

                      updateCompanyDangerFactorAfterRiskMutate({
                        companyDangerFactorId: item?.companyDangerFactorId as number,
                        updateCompanyDangerFactorAfterRiskRequest: {
                          afterRisk: option.value as number,
                        },
                      });

                      setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                    }}
                    isFullWidth
                  />
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
        <ActionButton variant="filled" size="l" disabled>
          저장 후 보고서 생성
        </ActionButton>
      </div>
    </div>
  );
}
