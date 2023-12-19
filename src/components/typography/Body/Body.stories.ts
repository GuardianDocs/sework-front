import type { Meta, StoryObj } from '@storybook/react';

import Body from './Body';

const meta: Meta<typeof Body> = {
  title: 'Design System/Typography/Body',
  component: Body,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Body>;

export const Default: Story = {
  args: {
    children: 'Body',
  },
};
