export const STEP = ['basic', 'company', 'complete'] as const;

export type StepType = (typeof STEP)[number];

type AdvanceInformationStepType = {
  step: StepType;
  title: string;
  description: string;
};

export const ADVANCE_INFORMATION_STEP: AdvanceInformationStepType[] = [
  {
    step: 'basic',
    title: '기본 정보를 알려주세요',
    description: '환영합니다. 귀사에 맞춘 환경을 설정해드릴게요.',
  },
  {
    step: 'company',
    title: '기업 정보를 확인해주세요',
    description: '기업 정보가 맞는지 확인해주시고, 틀린 부분이 있으면 수정해주세요.',
  },
];

export const JOB_POSITION = [{ label: 'WORKER', value: 'WORKER' }];
