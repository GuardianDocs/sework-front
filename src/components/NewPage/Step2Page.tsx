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

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
  };

  const handleClickPreviousStepButton = () => {
    router.push('/dashboard/step1');
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
            {/* TODO: Dropdown */}
            <div className="flex">TODO: Dropdown</div>
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
                세부작업 선택
              </Title>
            </div>
            <ActionButton variant="tonal-gray" size="s">
              직접 추가
            </ActionButton>
            <ActionButton variant="filled" size="s">
              자동 추천 추가
            </ActionButton>
          </div>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Header>단계</Table.Header>
                <Table.Header required>세부작업</Table.Header>
                <Table.Header required>평가대상</Table.Header>
                <Table.Header>평가대상</Table.Header>
                <Table.Header>평가대상</Table.Header>
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
                    <div className="flex justify-center">
                      <Body size="m" color="gray800">
                        {index + 1}
                      </Body>
                    </div>
                  </Table.Cell>
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
                    <div className="flex flex-row">
                      <TextField.Single defaultValue={item.target3} />
                      <button>::</button>
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
        <ActionButton variant="filled" size="l" disabled>
          다음 단계
        </ActionButton>
      </div>
    </div>
  );
}