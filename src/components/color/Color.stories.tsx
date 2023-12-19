import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from '@/components/typography';

const meta: Meta = {
  title: 'Design System/Color',
};

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {
  render: function Default() {
    return (
      <div className="flex flex-col items-start gap-20">
        <Headline size="l" color="gray800">
          Colors
        </Headline>
        <div className="flex flex-col items-start gap-10">
          <div className="flex items-start">
            <div className="w-[96px] h-[64px] shrink-0 bg-white border-1 border-gray-200"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-black"></div>
          </div>
          <div className="flex items-start">
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-50"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-100"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-200"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-300"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-400"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-500"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-600"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-700"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-800"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-gray-900"></div>
          </div>

          <div className="flex items-start">
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-50"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-100"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-200"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-300"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-400"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-500"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-600"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-700"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-800"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-blue-900"></div>
          </div>

          <div className="flex items-start">
            <div className="w-[96px] h-[64px] shrink-0 bg-red-50"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-100"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-200"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-300"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-400"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-500"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-600"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-700"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-800"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-red-900"></div>
          </div>

          <div className="flex items-start">
            <div className="w-[96px] h-[64px] shrink-0 bg-green-50"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-100"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-200"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-300"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-400"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-500"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-600"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-700"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-800"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-green-900"></div>
          </div>

          <div className="flex items-start">
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-50"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-100"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-200"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-300"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-400"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-500"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-600"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-700"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-800"></div>
            <div className="w-[96px] h-[64px] shrink-0 bg-yellow-900"></div>
          </div>
        </div>
      </div>
    );
  },
};
