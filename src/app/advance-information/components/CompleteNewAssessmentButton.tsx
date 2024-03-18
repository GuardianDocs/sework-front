'use client';

import Image from 'next/image';
import evaluation from '../../../assets/images/evaluation.svg';
import { Label, Title } from '@/components/typography';
import { cn } from '@/lib/utils';
import { useMutateAssessmentStart } from '@/hooks/useMutateAssessmentStart';
import { useRouter } from 'next/navigation';

export const CompleteNewAssessmentButton = () => {
  const router = useRouter();
  const { trigger, isMutating } = useMutateAssessmentStart();

  const handleClickNewAssessment = async () => {
    const response = await trigger();

    router.push(`/dashboard/${response.assessmentId}`);
  };

  return (
    <button
      onClick={handleClickNewAssessment}
      className={cn(
        'border w-full p-8 rounded-xl bg-blue-500 flex gap-x-6 items-center transition-all ease-out duration-100 text-start',
        'hover:-translate-y-1 hover:shadow-[0_8px_24px_0px_rgba(0,0,0,0.3)]'
      )}
      disabled={isMutating}
    >
      <Image src={evaluation} alt="welcome" width={72} height={72} />
      <div className="flex-1 self-stretch flex flex-col gap-y-1 justify-center">
        <Title size="xl" color="white">
          평가를 생성하세요!
        </Title>
        <Label size="s" color="blue200">
          IRAS의 스마트한 위험성 평가를 실시합니다.
        </Label>
      </div>
      <div className="py-[6px] px-[10px] border border-blue-200 rounded-small">
        <Label size="xs" color="white">
          평가 생성하기
        </Label>
      </div>
    </button>
  );
};
