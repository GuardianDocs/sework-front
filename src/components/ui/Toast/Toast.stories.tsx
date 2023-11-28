import type { Meta, StoryObj } from '@storybook/react';

import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { useToast } from '@/components/ui/Toast/use-toast';
import { Toast } from '@/components/ui/Toast/Toast';
import { Toaster } from '@/components/ui/Toast/Toaster';
import EtcIcon from '../Icon/EtcIcon/EtcIcon';
import Label from '@/components/typography/Label/Label';

const meta: Meta<typeof Toast> = {
  title: 'Design System/UI/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const SimpleToast: Story = {
  decorators: [
    Story => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
  render: function SimpleToast() {
    const { toast } = useToast();

    return (
      <ActionButton
        variant="filled"
        size="l"
        onClick={() => {
          toast({
            description: (
              <div className="inline-flex items-center gap-2">
                <EtcIcon icon="complete-s" />
                <Label size="s" color="gray100">
                  작성한 내용이 저장되었습니다
                </Label>
              </div>
            ),
            duration: 1400,
          });
        }}
      >
        Show Toast
      </ActionButton>
    );
  },
};
