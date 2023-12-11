'use client';

import { useRouter } from 'next/navigation';
import { Body, Label, Title, Headline } from '@/components/typography';
import ActionButton from '../../ui/ActionButton/ActionButton';
import ProgressBox from '../../ui/ProgressBox/ProgressBox';
import Table from '../../ui/Table/Table';
import TextField from '../../ui/TextField/TextField';
import Icon from '../../ui/Icon/Icon';
import IconButton from '../../ui/IconButton/IconButton';
import EtcIcon from '../../ui/Icon/EtcIcon/EtcIcon';
import Tooltip from '../../ui/Tooltip/Tooltip';
import { getParameterFromUrl } from '@/utils/urlUtil';
import { Step1Api } from '@/lib/axios/oas-axios';
import {
  type ResponseResultGetCompanyProcessResponse,
  type ResponseResultRecommendProcessResponse,
  type ResponseResultUpsertCompanyProcessResponse,
  type CompanyProcessVO,
} from '@/services';
import { useMutation, useQuery } from 'react-query';
import { useStep1Store } from '@/hooks/dashboard/Step1Store';
import { useToast } from '@/components/ui/Toast/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/AlertDialog/AlertDialog';
import { useState } from 'react';

export default function Step1Page() {
  const { toast } = useToast();
  const router = useRouter();
  const { step1, setStep1 } = useStep1Store();

  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [deleteConfirmDialogOpen, setDeleteConfirmDialogOpen] = useState(false);
  const [deleteConfirmDialogIndex, setDeleteConfirmDialogIndex] = useState(0);

  // 페이지 진입 시, 세부작업 불러오기
  const getCompanyProcess = async () => {
    const response = await Step1Api.getCompanyProcessUsingGET(Number(getParameterFromUrl('assessmentId')));

    const { data } = response?.data as ResponseResultGetCompanyProcessResponse;
    setStep1(data?.companyProcessList || []);

    return data;
  };

  // 자동 추천 추가 버튼 클릭 시, 추천 세부작업 불러오기
  const getRecommendProcess = async () => {
    const response = await Step1Api.recommendProcessUsingGET(Number(getParameterFromUrl('assessmentId')));

    const { data } = response?.data as ResponseResultRecommendProcessResponse;

    if (data?.companyProcessList?.length) {
      const newStep1 = [...step1];
      data?.companyProcessList?.map(item => {
        newStep1.push({
          id: undefined,
          processId: item.processId,
          title: item.title,
          description: item.description,
          equipment: item.equipment,
          material: item.material,
          viewOrder: step1.length + 1,
        });
      });
      setStep1(newStep1);
    } else {
      setAlertDialogOpen(true);
    }

    return data;
  };

  // 세부작업 저장하기
  const updateCompanyProcess = async (companyProcessList: Array<CompanyProcessVO>) => {
    const response = await Step1Api.upsertCompanyProcessUsingPUT(Number(getParameterFromUrl('assessmentId')), {
      companyProcessList: companyProcessList,
    });
    const { data } = response?.data as ResponseResultUpsertCompanyProcessResponse;
    return data;
  };

  const {
    data: companyProcess,
    isLoading: isLoadingCompanyProcess,
    isError: isErrorCompanyProcess,
    error: errorCompanyProcess,
  } = useQuery(['getCompanyProcess'], getCompanyProcess, {
    enabled: !!getParameterFromUrl('assessmentId'),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const { mutate: updateCompanyProcessMutate, isLoading: isLoadingUpdateCompanyProcess } = useMutation(
    updateCompanyProcess,
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

  const handleUpdateCompanyProcess = (companyProcessList: any) => {
    updateCompanyProcessMutate(companyProcessList);
  };

  const steps = [
    {
      number: 1,
      label: '사전준비',
      active: true,
      selected: true,
      url: `/dashboard/step1?assessmentId=${getParameterFromUrl('assessmentId')}`,
    },
    {
      number: 2,
      label: '유해 위험요인 파악',
      active: false,
      selected: false,
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

  const handleDragStart = (e: any, index: number) => {
    const targetRow = e.currentTarget.closest('tr'); // 현재 드래그하는 행을 찾음

    // 행의 복사본 생성
    const cloneRow = targetRow.cloneNode(true);
    cloneRow.style.width = `${targetRow.clientWidth}px`;
    cloneRow.style.height = `${targetRow.clientHeight}px`;
    cloneRow.style.backgroundColor = '#f3f3f3'; // 배경 색상 조정
    cloneRow.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.2)'; // 그림자 효과 추가

    // 문서에 복사본 추가 (화면에 보이지 않는 위치에)
    document.body.appendChild(cloneRow);
    cloneRow.style.position = 'absolute';
    cloneRow.style.top = '-9999px';

    // 드래그 이미지의 초기 위치 조정
    const rect = targetRow.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    // 드래그 이미지 설정
    e.dataTransfer.setDragImage(cloneRow, offsetX, offsetY);

    // 드래그 후 복사본 제거
    setTimeout(() => {
      document.body.removeChild(cloneRow);
    }, 0);

    e.dataTransfer.setData('text/plain', index);
  };

  const handleDrop = (e: any, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('text/plain');

    const newStep1 = [...step1];
    const dragItem = newStep1[dragIndex];
    newStep1.splice(dragIndex, 1);
    newStep1.splice(dropIndex, 0, dragItem);

    // change viewOrder
    newStep1.map((item, index) => {
      item.viewOrder = index + 1;
    });

    setStep1(newStep1);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleClickNextStepButton = () => {
    router.push(`/dashboard/step2?assessmentId=${getParameterFromUrl('assessmentId')}`);
  };

  return (
    <div className="flex flex-col items-center gap-12 pb-[64px]">
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
              1단계 : 위험성평가를 시작하기 위해 자동 추천된 세부작업을 선택 또는 직접 입력해주세요
            </Label>
          </div>
          <ProgressBox steps={steps} />
        </div>
      </div>

      {/* 2. 업종 */}
      <div className="flex flex-col items-start w-full gap-3">
        <Title size="l" color="gray800">
          업종
        </Title>
        <div className="flex items-center w-full gap-4 p-6 rounded-lg bg-gray-50">
          <Body size="l" color="gray800">
            {companyProcess?.sector?.title}
          </Body>
        </div>
      </div>

      {/* 3. 세부작업 */}
      <div className="flex flex-col items-start w-full gap-3">
        {/* 3.1. title */}
        <div className="flex items-center w-full gap-2">
          <div className="flex items-center flex-grow gap-3">
            <Title size="l" color="gray800">
              세부작업 확정
            </Title>
            <Body size="s" color="gray600">
              IRAS에서 각 업종에 맞는 세부작업을 자동으로 추천해 보여드립니다.
            </Body>
          </div>
          <ActionButton
            variant="tonal-gray"
            size="s"
            showIcon="left"
            icon={<Icon icon="line-add" />}
            onClick={() => {
              const newStep1 = [...step1];
              newStep1.push({
                id: undefined,
                processId: undefined,
                title: '',
                description: '',
                equipment: '',
                material: '',
                viewOrder: step1.length + 1,
              });
              setStep1(newStep1);
            }}
          >
            직접 추가
          </ActionButton>
          <Tooltip
            content={
              <div className="flex flex-col items-center">
                <Body color="gray50" size="xs">
                  IRAS에서 자동으로 추천한 세부작업 중
                </Body>
                <Body color="gray50" size="xs">
                  수정하거나 삭제한 항목을 다시 추가시킵니다.
                </Body>
              </div>
            }
            placement="top"
          >
            <ActionButton
              variant="tonal-blue"
              size="s"
              showIcon="left"
              icon={<Icon icon="line-add" />}
              onClick={getRecommendProcess}
            >
              자동 추천 추가
            </ActionButton>
          </Tooltip>
        </div>
        {/* 3.2. table */}
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header style={{ width: '36px', textAlign: 'center' }}>단계</Table.Header>
              <Table.Header required>세부작업</Table.Header>
              <Table.Header required>세부작업 설명</Table.Header>
              <Table.Header>설비 및 장비</Table.Header>
              <Table.Header>유해 인자</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {step1?.map((item, index) => (
              <Table.Row key={index} onDragOver={handleDragOver} onDrop={e => handleDrop(e, index)}>
                <Table.Cell>
                  <div className="flex items-center justify-center h-[40px] w-9">
                    <Body size="m" color="gray800">
                      {index + 1}
                    </Body>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <TextField.Multi
                    value={item?.title || ''}
                    {...(item?.processId && { disabled: true })}
                    isFullWidth
                    onChange={event => {
                      const { value } = event.target;
                      const newStep1 = [...step1];
                      newStep1[index].title = value;
                      setStep1(newStep1);
                    }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <TextField.Multi
                    value={item?.description || ''}
                    isFullWidth
                    onChange={event => {
                      const { value } = event.target;
                      const newStep1 = [...step1];
                      newStep1[index].description = value;
                      setStep1(newStep1);
                    }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <TextField.Multi
                    value={item?.equipment || ''}
                    isFullWidth
                    onChange={event => {
                      const { value } = event.target;
                      const newStep1 = [...step1];
                      newStep1[index].equipment = value;
                      setStep1(newStep1);
                    }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-row gap-2">
                    <TextField.Multi
                      value={item?.material || ''}
                      isFullWidth
                      onChange={event => {
                        const { value } = event.target;
                        const newStep1 = [...step1];
                        newStep1[index].material = value;
                        setStep1(newStep1);
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
                    <button className="h-[42px]" draggable onDragStart={e => handleDragStart(e, index)}>
                      <EtcIcon icon="drag-and-drop" />
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {/* 3.3. 저장하기 버튼 */}
        <div className="flex flex-col items-end self-stretch">
          <ActionButton
            variant="tonal-blue"
            size="s"
            showIcon="left"
            icon={<Icon icon="save" />}
            onClick={() => handleUpdateCompanyProcess(step1)}
          >
            저장하기
          </ActionButton>
        </div>
      </div>

      {/* 4. 버튼 */}
      <ActionButton variant="filled" size="l" onClick={handleClickNextStepButton}>
        저장 후 다음 단계
      </ActionButton>

      {/* 모달 */}

      <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>추천 세부작업 항목이 이미 존재해요</AlertDialogTitle>
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
            <AlertDialogTitle>해당 세부작업 내용을 삭제하시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              삭제 시 해당 세부작업 관련된 데이터가
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
                const newStep1 = [...step1];
                newStep1.splice(deleteConfirmDialogIndex, 1);
                setStep1(newStep1);
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
