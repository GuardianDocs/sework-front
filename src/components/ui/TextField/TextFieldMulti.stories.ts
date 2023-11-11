import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField.Multi> = {
  title: 'Design System/UI/TextField.Multi',
  component: TextField.Multi,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField.Multi>;

export const TextFieldMulti: Story = {
  args: {
    sizeVariant: 's',
    placeholder: '텍스트를 입력해주세요',
    isFullWidth: false,
    disabled: false,
  },
};
