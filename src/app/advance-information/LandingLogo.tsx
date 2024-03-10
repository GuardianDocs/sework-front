'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/AlertDialog/AlertDialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const LandingLogo = () => {
  const router = useRouter();
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  return (
    <div className="w-full h-[100px] flex items-center justify-center">
      <Image
        src="/main-logo.png"
        width={60}
        height={20}
        alt="logo"
        className="cursor-pointer"
        onClick={() => setAlertDialogOpen(true)}
      />
      <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>작성 중인 페이지를 나가시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              페이지를 나가면 작성 중인 정보는 모두
              <br />
              저장되지 않습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction variant="tonal-gray" size="l" onClick={() => router.push('/')}>
              나가기
            </AlertDialogAction>
            <AlertDialogCancel variant="filled" size="l" onClick={() => setAlertDialogOpen(false)}>
              계속 작성
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
