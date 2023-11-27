import type { Meta, StoryObj } from '@storybook/react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog/Dialog';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import Label from '@/components/typography/Label/Label';
import TextField from '@/components/ui/TextField/TextField';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/UI/Dialog',
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const SingleDialog: Story = {
  render: function SingleDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <ActionButton size="s" variant="filled">
            Open
          </ActionButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Dialog Header Title</DialogTitle>
            <DialogDescription>Dialog Header Description</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label>Link</Label>
              <TextField.Single id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
            </div>
            <ActionButton type="submit" size="s" variant="filled" className="px-3">
              <span className="sr-only">Copy</span>
            </ActionButton>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <ActionButton type="button" variant="tonal-red" size="l">
                Close
              </ActionButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
