import type { Meta, StoryObj } from '@storybook/react';
import DropdownButton from './DropdownButton';

const defaultOptionList = [
  {
    value: '1',
    label: '기계적 요인',
  },
  {
    value: '2',
    label: '생물학적 요인',
  },
  {
    value: '3',
    label: '직업특성 요인',
  },
  {
    value: '4',
    label: '무슨 요인',
  },
  {
    value: '5',
    label: '저런 요인',
  },
  {
    value: '6',
    label: '그런 요인',
  },
];

const step2OptionList = [
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

const meta: Meta<typeof DropdownButton> = {
  title: 'Design System/UI/Button/DropdownButton',
  component: DropdownButton,
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

export const Default: Story = {
  args: {
    options: defaultOptionList,
    onSelected: () => {},
    width: '180px',
  },
};

export const Step2Dropdown: Story = {
  args: {
    options: step2OptionList,
    onSelected: () => {},
    width: '400px',
    isFullWidth: true,
  },
};
