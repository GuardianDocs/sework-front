import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';
import Body from '@/components/typography/Body/Body';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/UI/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <Body size="l">테스트</Body>,
    content: (
      <div className="flex flex-col items-center">
        <Body color="gray50" size="xs">
          IRAS에서 자동으로 추천한 세부작업 중
        </Body>
        <Body color="gray50" size="xs">
          수정하거나 삭제한 항목을 다시 추가시킵니다.
        </Body>
      </div>
    ),
    placement: 'bottom',
  },
};
