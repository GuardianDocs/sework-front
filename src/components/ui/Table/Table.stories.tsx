import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';
import Body from '@/components/typography/Body/Body';
import TextField from '../TextField/TextField';
import IconButton from '../IconButton/IconButton';

const meta: Meta<typeof Table> = {
  title: 'Design System/UI/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const SimpleTable: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.Header>단계</Table.Header>
            <Table.Header required>세부작업</Table.Header>
            <Table.Header required>세부작업 설명</Table.Header>
            <Table.Header>설비 및 장비</Table.Header>
            <Table.Header>유해 인자</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>식재료 입고/검수</Table.Cell>
            <Table.Cell>식자재 운반 후 이상 유무를 확인</Table.Cell>
            <Table.Cell>운반대차</Table.Cell>
            <Table.Cell>유해 인자 텍스트</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};

const dummyData = {
  data: [
    {
      detailJob: '식재료 입고/검수',
      target: '식자재 운반 후 이상 유무를 확인',
      target2: '운반대차',
      target3: '유해 인자 텍스트',
      id: 1,
    },
    {
      detailJob: '조리/담기',
      target: '각종 재료를 잘 맞추어 음식을 요리',
      target2: '조리도구',
      target3: '',
      id: 2,
    },
    {
      detailJob: '직접 입력한 단계 이름',
      target: '직접 입력한 설명',
      target2: '인735쇄',
      target3: '인3453쇄',
    },
  ],
};

export const Step1Table: Story = {
  args: {
    children: (
      <>
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
            <Table.Row key={index}>
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
                  <IconButton variant="outline" size="m" icon="save" onClick={() => console.log('save')} />
                  <IconButton variant="outline" size="m" icon="trash" onClick={() => console.log('trash')} />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};
