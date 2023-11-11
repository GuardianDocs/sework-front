import type { Meta, StoryObj } from '@storybook/react';

import DropdownButton from './DropdownButton';

const meta: Meta<typeof DropdownButton> = {
  title: 'Design System/UI/DropdownButton',
  component: DropdownButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

const optionList = [
  {
    value: '1',
    label: '1. 식재료 입고/검수',
    completed: true,
  },
  {
    value: '2',
    label: '2. 조리/담기',
    completed: true,
  },
  {
    value: '3',
    label: '3. 배식',
  },
  {
    value: '4',
    label: '4. 배달',
  },
  {
    value: '5',
    label: '5. 세척',
  },
];

export const Default: Story = {
  args: {
    options: optionList,
    onSelected: () => {},
    width: '400px',
  },
};
