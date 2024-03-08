import { ReactElement, ReactNode, useState } from 'react';

export type StepProps = {
  name: string;
  children: ReactNode;
};

export type FunnelProps = {
  children: Array<ReactElement<StepProps>>;
};

export const useFunnel = <T extends string>(defaultStep: T) => {
  const [step, setStep] = useState<T>(defaultStep);

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(childStep => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
