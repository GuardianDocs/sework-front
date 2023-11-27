import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField.Trigger> = {
  title: 'Design System/UI/TextField/TextField.Trigger',
  component: TextField.Trigger,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField.Trigger>;

export const TextFieldTrigger: Story = {
  args: {
    sizeVariant: 's',
    defaultValue: '뭔가 이미 입력된 텍스트 친구',
    isFullWidth: false,
    style: { width: '300px' },
  },
};
