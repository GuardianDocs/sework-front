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
  argTypes: {
    icon: {
      options: iconOptions,
      mapping: iconMapping,
      control: { type: 'select' },
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: 'check',
    className: 'w-[50px] h-[50px] text-blue-500',
  },
};
