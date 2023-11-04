import type { Meta, StoryObj } from '@storybook/react';

import Headline from './Headline';

const meta: Meta<typeof Headline> = {
  title: 'Design System/Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const Default: Story = {
  args: {
    children: 'Headline',
  },
};
