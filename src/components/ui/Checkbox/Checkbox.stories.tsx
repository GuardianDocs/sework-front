import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/UI/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: function Default() {
    return (
      <div className="flex flex-row gap-4">
        <Checkbox />
        <Checkbox checked />
        <Checkbox disabled />
        <Checkbox checked disabled />
      </div>
    );
  },
};
