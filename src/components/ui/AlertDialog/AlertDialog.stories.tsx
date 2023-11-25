import type { Meta, StoryObj } from '@storybook/react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/AlertDialog/AlertDialog';
import { useState } from 'react';

const meta: Meta<typeof AlertDialog> = {
  title: 'Design System/UI/AlertDialog',
  component: AlertDialog,
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const SingleAlertDialog: Story = {
  render: function SingleAlertDialog() {
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);

    return (
      <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <AlertDialogTrigger asChild>
          <button>Open</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>추천 세부작업 항목이 이미 존재해요</AlertDialogTitle>
            <AlertDialogDescription>
              자동으로 추천한 항목 중 일부를 수정하거나
              <br />
              삭제했을 때 추천 항목을 다시 추가할 수 있습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="filled" size="l" onClick={() => setAlertDialogOpen(false)}>
              닫기
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

export const ConfirmAlertDialog: Story = {
  render: function ConfirmAlertDialog() {
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);

    return (
      <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <AlertDialogTrigger asChild>
          <button>Open</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>해당 세부작업 내용을 삭제하시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              삭제 시 해당 세부작업 관련된 데이터가
              <br />
              모두 삭제됩니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="tonal-gray" size="l" onClick={() => setAlertDialogOpen(false)}>
              취소하기
            </AlertDialogCancel>
            <AlertDialogAction variant="tonal-red" size="l" onClick={() => setAlertDialogOpen(false)}>
              삭제하기
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};
