'use client';

import { useRouter } from 'next/navigation';
import CircleHelpIcon from '../assets/CircleHelpIcon';
import Body from '../typography/Body/Body';
import Label from '../typography/Label/Label';
import Title from '../typography/Title/Title';
import ActionButton from '../ui/ActionButton/ActionButton';
import Table from '../ui/Table/Table';
import TextField from '../ui/TextField/TextField';
import InfoIcon from '../assets/InfoIcon';
import DropdownButton from '../ui/DropdownButton/DropdownButton';
import Icon from '../ui/Icon/Icon';
import IconButton from '../ui/IconButton/IconButton';

export default function Step2Page() {
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

  const handleClickPreviousStepButton = () => {
    router.push('/dashboard/step1');
  };

  const handleClickNextStepButton = () => {
    router.push('/dashboard/step3');
  };

  return (
    <div className="flex flex-col items-start w-[1200px]">
      {/* 1. 작성 가이드 버튼 */}
      <div className="flex py-4 flex-col items-end gap-2.5 w-full">
        <div className="flex items-start gap-1">
          <CircleHelpIcon />
          <Label size="s" color="blue500">
            위험성평가 작성 가이드
          </Label>
        </div>
      </div>
      {/* 2. 작성내용 */}
      <div className="flex flex-col items-center w-full gap-12">
        {/* 2.1 상단 */}
        <div className="flex flex-col items-center gap-8">
          <Title size="xxl" color="gray800">
            세부작업별 유해위험요인을 파악하여 작성해주세요
          </Title>
          {/* TODO: 과정 단계 */}
          {/* <ProgressBox /> */}
          <div>TODO: 과정 단계</div>
        </div>
        {/* 2.2 업종 */}
        <div className="flex flex-col items-start w-full gap-3">
          <div className="flex items-start gap-2">
            <Title size="l" color="gray800">
              세부작업 선택
            </Title>
            <div>
              <Title size="l" color="blue500">
                1
              </Title>
              <Title size="l" color="gray300">
                &nbsp;/&nbsp;
              </Title>
              <Title size="l" color="gray400">
                4
              </Title>
            </div>
          </div>
          <div className="flex items-center w-full gap-4 p-6 rounded-lg bg-gray-50">
            <div className="flex flex-grow">
              {/* TODO: Dropdown */}
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
                onSelected={() => {}}
                isFullWidth
              />
            </div>
            <div className="flex items-center gap-2">
              <ActionButton variant="tonal-gray" size="m" disabled>
                이전
              </ActionButton>
              <ActionButton variant="filled" size="m">
                다음
              </ActionButton>
            </div>
          </div>
        </div>
        {/* 2.3 세부작업 */}
        <div className="flex flex-col items-start w-full gap-3">
          <div className="flex items-center w-full gap-2">
            <div className="flex flex-grow">
              <Title size="l" color="gray800">
                유해 위험요인 파악
              </Title>
            </div>
            <ActionButton variant="tonal-gray" size="s" showIcon="left" icon={<Icon icon="line-add" />}>
              직접 추가
            </ActionButton>
            <ActionButton variant="tonal-blue" size="s" showIcon="left" icon={<Icon icon="line-add" />} disabled>
              자동 추천 추가
            </ActionButton>
          </div>
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
              {dummyData.data.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <TextField.Single defaultValue={item.detailJob} {...(item.id && { disabled: true })} />
                  </Table.Cell>
                  <Table.Cell>
                    <TextField.Single defaultValue={item.target} />
                  </Table.Cell>
                  <Table.Cell>
                    <TextField.Single defaultValue={item.target2} />
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-row gap-2">
                      <TextField.Single defaultValue={item.target3} isFullWidth />
                      <IconButton variant="outline" size="m" icon="trash" onClick={() => console.log('trash')} />
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
        <InfoIcon />
        <Body size="s" color="gray600">
          내용을 수정한 후 ‘저장' 버튼을 클릭해 저장을 완료해주세요.
        </Body>
      </div>
      {/* 4. 버튼 */}
      <div className="flex items-center self-stretch justify-center gap-2 pt-12 pb-16">
        <ActionButton variant="tonal-gray" size="l" onClick={handleClickPreviousStepButton}>
          이전 단계
        </ActionButton>
        <ActionButton variant="filled" size="l" onClick={handleClickNextStepButton}>
          다음 단계
        </ActionButton>
      </div>
    </div>
  );
}
