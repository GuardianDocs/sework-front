import { Headline, Label } from '@/components/typography';
import { NEW_REPORT_STEP, StepType } from '../constants';

type NewReportHeaderProps = { step: StepType };

export const NewReportHeader = ({ step }: NewReportHeaderProps) => {
  const stepHeader = NEW_REPORT_STEP.find(item => item.step === step);
  return (
    <div className="flex-col-center gap-y-4">
      <div className="flex-center gap-x-2">
        {NEW_REPORT_STEP.map((item, idx) => (
          <div
            key={item.step}
            className={`flex-center w-7 h-7 rounded-full ${step === item.step ? 'bg-blue-500' : 'bg-gray-100'}`}
          >
            <Label size="s" color={step === item.step ? 'white' : 'gray400'}>
              {idx + 1}
            </Label>
          </div>
        ))}
      </div>
      <div className="flex-col-center gap-y-1">
        <Headline size="s" color="gray800">
          {stepHeader?.title}
        </Headline>
        <Label size="l" color="gray600">
          {stepHeader?.description}
        </Label>
      </div>
    </div>
  );
};
