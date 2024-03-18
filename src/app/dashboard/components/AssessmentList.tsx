import { CardButton } from '@/components/ui/CardButton/CardButton';
import { useGetAssessmentList } from '../hooks/useGetAssessmentList';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import Icon from '@/components/ui/Icon/Icon';
import { ReportType } from '../page';

type AssessmentListProps = {
  selectedAssessment: ReportType;
  onClickAssessment: (report?: number) => void;
};

export const AssessmentList = ({ selectedAssessment, onClickAssessment }: AssessmentListProps) => {
  const { data: assessmentList, isLoading } = useGetAssessmentList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full gap-y-3">
      {assessmentList?.data?.companyAssessmentList?.map(assessment => (
        <CardButton
          key={assessment.assessmentId}
          title={`version ${assessment.title} (${assessment.createdAt}) - ${assessment.assessmentId}`}
          subContents={`${assessment.type} | ${assessment.supervisor} | ${assessment.sector}`}
          updatedAt={`최종 수정 ${assessment.updatedAt}`}
          actived={selectedAssessment === assessment.assessmentId}
          onClick={() => {
            onClickAssessment(assessment.assessmentId);
          }}
        />
      ))}
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
  );
};
