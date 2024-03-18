'use client';

import report from '@/assets/images/report.svg';
import { Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { CardButton } from '@/components/ui/CardButton/CardButton';
import Icon from '@/components/ui/Icon/Icon';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutateAssessmentStart } from '../../hooks/useMutateAssessmentStart';

type ReportType = 'new-assessment' | string | null;

export default function Page() {
  const router = useRouter();
  const [selectedAssessment, setSelectedAssessment] = useState<ReportType>(null);
  const { trigger } = useMutateAssessmentStart();

  const handleCardClick = (report: ReportType) => {
    setSelectedAssessment(report);
  };

  const handleSelectReport = async () => {
    if (!selectedAssessment) return;

    if (selectedAssessment === 'new-assessment') {
      const response = await trigger();

      if (response) {
        router.push(`/dashboard/${response.assessmentId}`);
        return;
      }
    }

    router.push(`/dashboard/${selectedAssessment}`);
  };

  return (
    <div className="pt-12 w-full flex justify-center">
      <div className="flex-col-center gap-y-12 w-[712px]">
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
        <div className="flex flex-col w-full gap-y-6">
          <CardButton
            title="새로운 평가 만들기"
            icon="lineAdd"
            actived={selectedAssessment === 'new-assessment'}
            onClick={() => {
              handleCardClick('new-assessment');
            }}
          />
          <div className="border-t border-gray-200" />
          <div className="flex flex-col w-full gap-y-3">
            <CardButton
              title="version 1 (2023-02-18)"
              subContents="최초평가 | 김담당 선임 | A업종 ..."
              updatedAt="최종 수정 2024.02.23 오후 1:24"
            />
            <CardButton
              title="version 1 (2023-02-18)"
              subContents="최초평가 | 김담당 선임 | A업종 ..."
              updatedAt="최종 수정 2024.02.23 오후 1:24"
            />
            <ActionButton
              className="self-end"
              icon={<Icon icon="edit" className="w-5 h-5" />}
              showIcon="left"
              variant="tonal-gray"
              size="s"
            >
              평가 편집하기
            </ActionButton>
          </div>
        </div>
        <ActionButton variant="filled" size="l" disabled={!selectedAssessment} onClick={handleSelectReport}>
          선택 완료
        </ActionButton>
      </div>
    </div>
  );
}
