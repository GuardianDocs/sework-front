import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { Label } from '@/components/ui/Label/Label';

const meta: Meta<typeof RadioGroup> = {
  title: 'Design System/UI/RadioGroup',
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: function Default() {
    return (
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const Style: Story = {
  render: function Style() {
    return (
      <RadioGroup>
        <div className="flex flex-row gap-4">
          <RadioGroupItem value="1" id="r1" />
          <RadioGroupItem value="2" id="r2" checked />
          <RadioGroupItem value="3" id="r3" disabled />
          <RadioGroupItem value="4" id="r4" checked disabled />
        </div>
      </RadioGroup>
    );
  },
};
