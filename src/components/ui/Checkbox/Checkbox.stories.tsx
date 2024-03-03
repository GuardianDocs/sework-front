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
        <Checkbox>기본</Checkbox>
        <Checkbox checked>체크됨</Checkbox>
        <Checkbox disabled>비활성화</Checkbox>
        <Checkbox checked disabled>
          체크된 비활성화
        </Checkbox>
      </div>
    );
  },
};
