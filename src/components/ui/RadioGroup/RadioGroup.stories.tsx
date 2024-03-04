import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './RadioGroup';

const meta: Meta<typeof Radio> = {
  title: 'Design System/UI/RadioGroup',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: function Default() {
    return (
      <div>
        <Radio>라디오버튼</Radio>

        <br />

        <Radio defaultChecked>라디오버튼 CHECK</Radio>

        <br />

        <Radio disabled>DISABLED</Radio>

        <br />

        <Radio disabled defaultChecked>
          DISABLED CHECK
        </Radio>
      </div>
    );
  },
};

export const Style: Story = {
  render: function Style() {
    return (
      <div className="flex flex-row gap-4">
        <Radio value="1" id="r1" />
        <Radio value="2" id="r2" checked />
        <Radio value="3" id="r3" disabled />
        <Radio value="4" id="r4" checked disabled />
      </div>
    );
  },
};
