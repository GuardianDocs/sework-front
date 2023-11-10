import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Design System/UI/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const LineAdd: Story = {
  args: {
    icon: 'line-add',
    size: 20,
    color: 'black',
  },
};

export const ChevronDownS: Story = {
  args: {
    icon: 'chevron-down-s',
    size: 20,
    color: 'black',
  },
};
