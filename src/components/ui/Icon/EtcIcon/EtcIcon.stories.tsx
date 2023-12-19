import type { Meta, StoryObj } from '@storybook/react';

import EtcIcon, { iconKeys } from './EtcIcon';

const iconOptions = iconKeys;
const iconMapping = iconOptions.reduce((acc, cur) => {
  acc[cur] = cur;
  return acc;
}, {} as Record<string, string>);

const meta: Meta<typeof EtcIcon> = {
  title: 'Design System/UI/Icon/EtcIcon',
  component: EtcIcon,
  argTypes: {
    icon: {
      options: iconOptions,
      mapping: iconMapping,
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EtcIcon>;

export const Default: Story = {
  args: {
    icon: 'drag-and-drop',
  },
};
