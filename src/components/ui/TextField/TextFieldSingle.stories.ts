import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField.Single> = {
  title: 'Design System/UI/TextField/TextField.Single',
  component: TextField.Single,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField.Single>;

export const TextFieldSingle: Story = {
  args: {
    sizeVariant: 's',
    placeholder: '텍스트를 입력해주세요',
    isFullWidth: false,
    disabled: false,
  },
};

export const TextFieldSingleError: Story = {
  args: {
    sizeVariant: 's',
    placeholder: '텍스트를 입력해주세요',
    isFullWidth: false,
    disabled: false,
    error: '오류 메세지',
  },
};
