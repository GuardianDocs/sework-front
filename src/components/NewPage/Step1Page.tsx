'use client';

import { useRouter } from 'next/navigation';
import Body from '../typography/Body/Body';
import Label from '../typography/Label/Label';
import Title from '../typography/Title/Title';
import ActionButton from '../ui/ActionButton/ActionButton';
import ProgressBox from '../ui/ProgressBox/ProgressBox';
import Table from '../ui/Table/Table';
import TextField from '../ui/TextField/TextField';
import Icon from '../ui/Icon/Icon';
import IconButton from '../ui/IconButton/IconButton';
import EtcIcon from '../ui/Icon/EtcIcon/EtcIcon';
import Headline from '../typography/Headline/Headline';
import Tooltip from '../ui/Tooltip/Tooltip';
import { Class1Api, Configuration } from '@/services';
import { useEffect, useState } from 'react';

export default function Step1Page() {
  const router = useRouter();

  const temporaryAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjIwLCJ1c2VyX25hbWUiOiJDT01QQU5ZXzIwIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTcwMDkxMjQ3OCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT01QQU5ZIl0sImp0aSI6IjU1ZDZiYzZhLTg3Y2MtNDE4Ny1hMjc4LWI4YTMzOTI3YTk2OSIsImNsaWVudF9pZCI6InNld29yay1hcGkifQ._WYF19tsOPuUsnJ-VvQlkM-EMO1IA3q2hbO4w5-kkx0';

  const apiConfiguration: Configuration = new Configuration({
    basePath: 'https://api-dev.iras.kr',
    baseOptions: {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${temporaryAccessToken}`,
      },
    },
  });

  const apiController = new Class1Api(apiConfiguration);

  const getData = async () => {
    const response = await apiController.recommendProcessUsingGET(5);
    return response.data;
  };

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getData().then(res => setData(res));
  }, []);

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
      },
    ],
  };

  const steps = [
    { number: 1, label: '사전준비', active: true, selected: true, url: '/dashboard/step1' },
    { number: 2, label: '유해 위험요인 파악', active: false, selected: false, url: '/dashboard/step2' },
    { number: 3, label: '위험성 수준 판단', active: false, selected: false, url: '/dashboard/step3' },
    { number: 4, label: '감소대책 수립', active: false, selected: false, url: '/dashboard/step4' },
  ];

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
  };

  const handleClickNextStepButton = () => {
    router.push('/dashboard/step2');
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
            음식 및 숙박업
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
          <ActionButton variant="tonal-gray" size="s" showIcon="left" icon={<Icon icon="line-add" />}>
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
            <ActionButton variant="tonal-blue" size="s" showIcon="left" icon={<Icon icon="line-add" />}>
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
            {dummyData.data.map((item, index) => (
              <Table.Row
                key={index}
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <Table.Cell>
                  <div className="flex items-center justify-center h-[40px] w-9">
                    <Body size="m" color="gray800">
                      {index + 1}
                    </Body>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <TextField.Multi defaultValue={item.detailJob} {...(item.id && { disabled: true })} isFullWidth />
                </Table.Cell>
                <Table.Cell>
                  <TextField.Multi defaultValue={item.target} isFullWidth />
                </Table.Cell>
                <Table.Cell>
                  <TextField.Multi defaultValue={item.target2} isFullWidth />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-row gap-2">
                    <TextField.Multi defaultValue={item.target3} isFullWidth />
                    <IconButton variant="outline" size="m" icon="trash" onClick={() => console.log('trash')} />
                    <button>
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
          <ActionButton variant="tonal-blue" size="s" showIcon="left" icon={<Icon icon="save" />}>
            저장하기
          </ActionButton>
        </div>
      </div>

      {/* 4. 버튼 */}
      <ActionButton variant="filled" size="l" onClick={handleClickNextStepButton}>
        저장 후 다음 단계
      </ActionButton>
    </div>
  );
}
