import type { Meta, StoryObj } from '@storybook/react';

import ProgressBox from './ProgressBox';

const meta: Meta<typeof ProgressBox> = {
  title: 'Design System/UI/ProgressBox',
  component: ProgressBox,
};

export default meta;
type Story = StoryObj<typeof ProgressBox>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    steps: [
      { number: 1, label: '사전준비', active: true, selected: false, url: '#' },
      { number: 2, label: '유해 위험요인 파악', active: true, selected: false, url: '#' },
      { number: 3, label: '위험성 수준 판단', active: true, selected: true, url: '#' },
      { number: 4, label: '감소대책 수립', active: false, selected: false, url: '#' },
    ],
  },
};
