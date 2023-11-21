import type { Meta, StoryObj } from '@storybook/react';

import ColorBox from './ColorBox';

const meta: Meta<typeof ColorBox> = {
  title: 'Design System/UI/ColorBox',
  component: ColorBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColorBox>;

export const Low: Story = {
  args: {
    value: 1,
  },
};

export const Medium: Story = {
  args: {
    value: 5,
  },
};

export const High: Story = {
  args: {
    value: 9,
  },
};
