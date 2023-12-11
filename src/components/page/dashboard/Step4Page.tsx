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

export default function Step4Page() {
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
        id: 3,
      },
    ],
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
                1
              </Title>
              <Title size="l" color="gray300">
                {' '}
                /{' '}
              </Title>
              <Title size="l" color="gray400">
                5
              </Title>
            </div>
          </div>
          {/* 2.2. 세부작업 리스트 */}
          <div className="flex items-start w-full gap-8">
            {/* 드롭다운 */}
            <div className="flex flex-grow">
              <DropdownButton
                options={[
                  {
                    value: '1',
                    label: '1',
                  },
                  {
                    value: '2',
                    label: '2',
                    completed: true,
                  },
                  {
                    value: '3',
                    label: '3',
                  },
                ]}
                isFullWidth
              />
            </div>
            {/* 버튼 */}
            <div className="flex items-center gap-2">
              <ActionButton variant="tonal-gray" size="m">
                이전
              </ActionButton>
              <ActionButton variant="filled" size="m">
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
            {dummyData.data.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <TextField.Single defaultValue={item.detailJob} {...(item.id && { disabled: true })} isFullWidth />
                </Table.Cell>
                <Table.Cell style={{ width: '80px' }}>
                  <ColorBox value={9} />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-row gap-2">
                    <TextField.Multi defaultValue={item.target} isFullWidth />
                    <IconButton variant="outline" size="m" icon="edit" onClick={() => console.log('trash')} />
                  </div>
                </Table.Cell>
                <Table.Cell style={{ width: '104px' }}>
                  <DropdownButton
                    options={[
                      {
                        value: '1',
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
                        value: '2',
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
                        value: '3',
                        label: (
                          <div className="flex flex-row items-center gap-1">
                            <DotIconGreen />
                            <Body size="m" color="gray800">
                              3(대)
                            </Body>
                          </div>
                        ),
                      },
                    ]}
                    onSelected={() => {}}
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
