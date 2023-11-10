import type { Meta, StoryObj } from '@storybook/react';

import Icon, { iconKeys } from './Icon';

const iconOptions = iconKeys;
const iconMapping = iconOptions.reduce((acc: Record<string, string>, key) => {
  acc[key] = key;
  return acc;
}, {});

const meta: Meta<typeof Icon> = {
  title: 'Design System/UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: iconOptions,
      mapping: iconMapping,
      control: { type: 'select' },
    },
  },
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
