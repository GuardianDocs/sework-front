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

export default function Step1Page() {
  const router = useRouter();

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
    { number: 1, label: '사전준비', active: true, selected: true },
    { number: 2, label: '유해 위험요인 파악', active: false, selected: false },
    { number: 3, label: '위험성 수준 판단', active: false, selected: false },
    { number: 4, label: '감소대책 수립', active: false, selected: false },
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
    <>
      {/* 1. 작성 가이드 버튼 */}
      <div className="flex py-4 flex-col items-end gap-2.5 w-full">
        <div className="flex items-start gap-1">
          <Icon icon="circle-help" color="blue500" />
          <Label size="s" color="blue500">
            위험성평가 작성 가이드
          </Label>
        </div>
      </div>
      {/* 2. 작성내용 */}
      <div className="flex flex-col items-center w-full gap-12">
        {/* 2.1 상단 */}
        <div className="flex flex-col items-center gap-8">
          <Headline size="s" color="gray800">
            위험성평가
          </Headline>
          <Label size="l" color="gray600">
            1단계 : 위험성평가를 시작하기 위해 자동 추천된 세부작업을 선택 또는 직접 입력해주세요
          </Label>
          <ProgressBox steps={steps} />
        </div>
        {/* 2.2 업종 */}
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
        {/* 2.3 세부작업 */}
        <div className="flex flex-col items-start w-full gap-3">
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
            <ActionButton variant="tonal-blue" size="s" showIcon="left" icon={<Icon icon="line-add" />}>
              자동 추천 추가
            </ActionButton>
          </div>
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
                    <div className="flex justify-center w-9">
                      <Body size="m" color="gray800">
                        {index + 1}
                      </Body>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <TextField.Single defaultValue={item.detailJob} {...(item.id && { disabled: true })} isFullWidth />
                  </Table.Cell>
                  <Table.Cell>
                    <TextField.Single defaultValue={item.target} isFullWidth />
                  </Table.Cell>
                  <Table.Cell>
                    <TextField.Single defaultValue={item.target2} isFullWidth />
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-row gap-2">
                      <TextField.Single defaultValue={item.target3} isFullWidth />
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
        </div>
      </div>
      {/* 3. 저장 안내 */}
      <div className="flex items-center self-stretch justify-end gap-1 pt-3">
        <ActionButton variant="tonal-blue" size="s" showIcon="left" icon={<Icon icon="save" />}>
          저장하기
        </ActionButton>
      </div>
      {/* 4. 버튼 */}
      <div className="flex flex-col items-center self-stretch justify-center pt-12 pb-16">
        <ActionButton variant="filled" size="l" onClick={handleClickNextStepButton}>
          저장 후 다음 단계
        </ActionButton>
      </div>
    </>
  );
}
