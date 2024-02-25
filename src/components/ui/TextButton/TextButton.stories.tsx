import type { Meta, StoryObj } from '@storybook/react';

import Icon, { iconKeys } from '@/components/ui/Icon/Icon';
import TextButton from './TextButton';

const iconOptions = iconKeys;
const iconMapping = iconKeys.reduce(
  (acc, cur) => {
    acc[cur] = <Icon icon={cur} />;
    return acc;
  },
  {} as Record<string, React.ReactNode>
);

const meta: Meta<typeof TextButton> = {
  title: 'Design System/UI/Button/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: iconOptions,
      mapping: iconMapping,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    children: '텍스트 버튼',
    isFullWidth: false,
    disabled: false,
  },
};

export const TonalGray: Story = {
  args: {
    variant: 'secondary',
    size: 'm',
    children: '텍스트 버튼',
    isFullWidth: false,
    disabled: false,
  },
};

export const TonalRed: Story = {
  args: {
    variant: 'tertiary',
    size: 'm',
    children: '텍스트 버튼',
    isFullWidth: false,
    disabled: false,
  },
};
