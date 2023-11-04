import type { Meta, StoryObj } from '@storybook/react';

import ActionButton from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'Design System/UI/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'l',
    children: '버튼',
    isFullWidth: false,
    disabled: false,
  },
};

export const TonalBlue: Story = {
  args: {
    variant: 'tonal-blue',
    size: 'l',
    children: '버튼',
    isFullWidth: false,
    disabled: false,
  },
};

export const TonalGray: Story = {
  args: {
    variant: 'tonal-gray',
    size: 'l',
    children: '버튼',
    isFullWidth: false,
    disabled: false,
  },
};

export const TonalRed: Story = {
  args: {
    variant: 'tonal-red',
    size: 'l',
    children: '버튼',
    isFullWidth: false,
    disabled: false,
  },
};
