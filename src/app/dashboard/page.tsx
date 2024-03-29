'use client';

import report from '@/assets/images/report.svg';
import { Headline, Label } from '@/components/typography';
import { CardButton } from '@/components/ui/CardButton/CardButton';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutateAssessmentStart } from '../../hooks/useMutateAssessmentStart';
import { AssessmentList } from './components/AssessmentList';

export type ReportType = 'new-assessment' | number | null;

export default function Page() {
  const router = useRouter();
  const { trigger, isMutating } = useMutateAssessmentStart();

  const handleSelectReport = async (assessmentId?: number) => {
    if (assessmentId) {
      router.push(`/dashboard/${assessmentId}`);
    } else {
      const response = await trigger();

      if (response) {
        router.push(`/dashboard/${response.assessmentId}`);
      }
    }
  };

  return (
    <div className="pt-12 w-full flex justify-center h-full">
      <div className="flex-col flex gap-y-12 w-[712px]">
        <div className="flex-col-center gap-y-3">
          <Link href="/">
            <Image src={report} width={72} height={72} alt="report" />
          </Link>
          <div className="flex-col-center gap-y-1 text-center">
            <Headline color="gray800" size="s">
              확인할 평가 버전을 선택해주세요
            </Headline>
            <Label color="gray600" size="l" className="whitespace-pre-wrap">
              {`새로운 버전의 평가를 시작하거나\n기존에 진행한 평가를 선택하여 업데이트 할 수 있습니다.`}
            </Label>
          </div>
        </div>
        <div className="flex flex-col w-full gap-y-6 h-full overflow-auto">
          <AssessmentList onClickAssessment={handleSelectReport} disabled={isMutating} />
          <div className="border-t border-gray-200" />
          <CardButton
            title="새로운 평가 만들기"
            icon="lineAdd"
            onClick={() => handleSelectReport()}
            disabled={isMutating}
          />
        </div>
      </div>
    </div>
  );
}
