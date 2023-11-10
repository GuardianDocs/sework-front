import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Design System/UI/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <>
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
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};
