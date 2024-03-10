import { Headline, Label } from '@/components/typography';
import { ADVANCE_INFORMATION_STEP, StepType } from '../constants';

type AdvanceInformationHeaderProps = { step: StepType };

export const AdvanceInformationHeader = ({ step }: AdvanceInformationHeaderProps) => {
  const stepHeader = ADVANCE_INFORMATION_STEP.find(item => item.step === step);
  if (!stepHeader) return null;
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {ADVANCE_INFORMATION_STEP.map((item, idx) => (
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
        <div className="flex flex-col items-center gap-1">
          <Headline size="s" color="gray800">
            {stepHeader?.title}
          </Headline>
          <Label size="l" color="gray600">
            {stepHeader?.description}
          </Label>
        </div>
      </div>
    </div>
  );
};
