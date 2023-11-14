import type { Meta, StoryObj } from '@storybook/react';

import IconButton from './IconButton';
import { iconKeys } from '../Icon/Icon';

const iconOptions = iconKeys;
const iconMapping = iconOptions.reduce((acc: Record<string, string>, key) => {
  acc[key] = key;
  return acc;
}, {});

const meta: Meta<typeof IconButton> = {
  title: 'Design System/UI/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: iconOptions,
      mapping: iconMapping,
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const SaveButton: Story = {
  args: {
    variant: 'outline',
    size: 'm',
    icon: 'save',
  },
};

export const DeleteButton: Story = {
  args: {
    variant: 'outline',
    size: 'm',
    icon: 'trash',
  },
};

export const EditButton: Story = {
  args: {
    variant: 'outline',
    size: 'm',
    icon: 'edit',
  },
};
