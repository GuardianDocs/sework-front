import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { Label as HtmlLabel } from '@/components/ui/Label/Label';
import { Label } from '@/components/typography';

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
          <HtmlLabel htmlFor="r1">
            <Label size="s" color="blue500">
              Default
            </Label>
          </HtmlLabel>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <HtmlLabel htmlFor="r2">
            <Label size="s" color="blue500">
              Comfortable
            </Label>
          </HtmlLabel>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <HtmlLabel htmlFor="r3">
            <Label size="s" color="blue500">
              Compact
            </Label>
          </HtmlLabel>
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
