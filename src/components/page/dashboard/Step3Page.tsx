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
  type ResponseResultGetCompanyDangerFactorResponse,
  type CompanyDangerFactorAndSolutionVO,
} from '@/services';
import { useMutation, useQuery } from 'react-query';
import EtcIcon from '@/components/ui/Icon/EtcIcon/EtcIcon';
import { useStep3Store } from '@/hooks/dashboard/Step3Store';

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
    setCompanyDangerFactorAndSolution,
    setCompanyProcessTitle,
    setSelectedCompanyProcessTitleIndex,
  } = useStep3Store();

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

  // 안전 위험 평가 1 단계 (위험 요인) 조회 (유해 위험요인 추출용)
  const getCompanyDangerFactor = async (companyProcessId: number) => {
    const response = await Step2Api.getCompanyDangerFactorUsingGET(
      Number(getParameterFromUrl('assessmentId')),
      companyProcessId
    );

    const { data } = response?.data as ResponseResultGetCompanyDangerFactorResponse;

    return data;
  };

  const getCompanyDangerFactorAndSolution = async (companyProcessId: number) => {
    const response = await Step34Api.getCompanyDangerFactorAndSolutionUsingGET(
      Number(getParameterFromUrl('assessmentId')),
      companyProcessId
    );

    const { data } = response?.data as ResponseResultGetCompanyDangerFactorAndSolutionResponse;

    // 아직 입력된 데이터가 없다면, 위험 요인을 조회해서 기본값으로 넣어준다
    if (!data?.companyDangerFactorAndSolutionList?.length) {
      const temp = await getCompanyDangerFactor(
        Number(companyProcessTitle[selectedCompanyProcessTitleIndex]?.value) || 0
      );
      const descriptionList = temp?.companyDangerFactorList?.map(item => {
        return {
          companyDangerFactorDescription: item?.description ?? '',
          possibility: 1,
          severe: 1,
          afterRisk: 1,
        } as CompanyDangerFactorAndSolutionVO;
      });

      setCompanyDangerFactorAndSolution(descriptionList ?? []);
    } else {
      setCompanyDangerFactorAndSolution(data?.companyDangerFactorAndSolutionList ?? []);
    }

    return data;
  };

  const getRecommendDangerSolution = async (companyDangerFactorId: number) => {
    const response = await Step34Api.recommendDangerSolutionUsingGET(
      Number(getParameterFromUrl('assessmentId')),
      companyDangerFactorId
    );

    const { data } = response?.data as ResponseResultRecommendDangerSolutionResponse;
    return data;
  };

  const updateCompanyDangerSolution = async ({
    companyDangerFactorId,
    companyDangerSolutionRequest,
  }: {
    companyDangerFactorId: number;
    companyDangerSolutionRequest: any;
  }) => {
    const response = await Step34Api.upsertCompanyDangerSolutionUsingPUT(
      Number(getParameterFromUrl('assessmentId')),
      companyDangerFactorId,
      companyDangerSolutionRequest
    );

    const { data } = response?.data as ResponseResultUpsertCompanyDangerSolutionResponse;
    return data;
  };

  const {
    data: companyProcessTitleData,
    isLoading: companyProcessTitleIsLoading,
    isError: companyProcessTitleIsError,
    error: companyProcessTitleError,
  } = useQuery('getCompanyProcessTitle', getCompanyProcessTitle);

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
    }
  );

  // TODO: param 수정, 모달에 들어갈 데이터임
  const {
    data: recommendDangerSolutionData,
    isLoading: recommendDangerSolutionIsLoading,
    isError: recommendDangerSolutionIsError,
    error: recommendDangerSolutionError,
  } = useQuery('getRecommendDangerSolution', () =>
    getRecommendDangerSolution(Number(getParameterFromUrl('companyDangerFactorId')))
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
                  <TextField.Single defaultValue={item?.companyDangerFactorDescription} disabled isFullWidth />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-row gap-2">
                    {/* 이거는 사실상 내용 미리보기 해주는 버튼임. onChange 없음 */}
                    <TextField.Multi defaultValue={item?.companyDangerFactorDescription} isFullWidth />
                    <IconButton variant="outline" size="m" icon="edit" onClick={() => console.log('trash')} />
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
                      newCompanyDangerFactorAndSolution[index].afterRisk = Number(option.value) * Number(item?.severe);
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
                      newCompanyDangerFactorAndSolution[index].afterRisk =
                        Number(option.value) * Number(item?.possibility);
                      setCompanyDangerFactorAndSolution(newCompanyDangerFactorAndSolution);
                    }}
                  />
                </Table.Cell>
                <Table.Cell style={{ width: '80px' }}>
                  <ColorBox value={item?.afterRisk || 1} />
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
