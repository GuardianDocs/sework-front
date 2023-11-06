'use client';

import Body from '../typography/Body/Body';
import Title from '../typography/Title/Title';
import ActionButton from '../ui/ActionButton/ActionButton';
import ProgressBox from '../ui/ProgressBox/ProgressBox';
import Table from '../ui/Table/Table';
import TextField from '../ui/TextField/TextField';

export default function Step1Page() {
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

  return (
    <>
      <Title size="xxl" color="gray800">
        평가대상 세부작업을 선택 또는 직접 입력해주세요
      </Title>
      {/* TODO: 과정 단계 */}
      {/* <ProgressBox /> */}
      <div>TODO: 과정 단계</div>
      <Title size="l" color="gray800">
        업종
      </Title>
      <div className="flex items-center w-full gap-4 p-6 rounded bg-gray-50">
        <Body size="l" color="gray800">
          인쇄업
        </Body>
      </div>
      <div className="flex items-center">
        <div>
          <Title size="l" color="gray800">
            세부작업 확정
          </Title>
        </div>
        <div>
          <ActionButton variant="tonal-gray" size="s">
            직접 추가
          </ActionButton>
          <ActionButton variant="filled" size="s">
            자동 추천 추가
          </ActionButton>
          <ActionButton variant="filled" size="s">
            저장
          </ActionButton>
        </div>
      </div>
      {/* TODO: 테이블 */}

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
      <ActionButton variant="filled" size="l">
        저장 후 다음 단계
      </ActionButton>
    </>
  );
}
