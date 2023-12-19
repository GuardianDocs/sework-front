import type { Meta, StoryObj } from '@storybook/react';

import ActionButton from './ActionButton';
import Icon from '@/components/ui/Icon/Icon';
import { iconKeys } from '@/components/ui/Icon/Icon';

const iconOptions = iconKeys;
const iconMapping = iconKeys.reduce((acc, cur) => {
  acc[cur] = <Icon icon={cur} />;
  return acc;
}, {} as Record<string, React.ReactNode>);

const meta: Meta<typeof ActionButton> = {
  title: 'Design System/UI/Button/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: iconOptions,
      mapping: iconMapping,
    },
  },
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
