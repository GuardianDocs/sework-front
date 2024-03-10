'use client';
import { useFunnel } from '@/hooks';
import { useState } from 'react';
import { STEP, StepType } from '../constants';
import { BasicInfoType, CompanyInfoType } from '../validations';
import { AdditionalCompanyAccountInfoRequest } from '@/services';
import { useMutateCompayAdditionalInfo } from './useMutateCompayAdditionalInfo';

type AdvanceInformationData = AdditionalCompanyAccountInfoRequest;

export const useAdvanceInformationStep = () => {
  const { trigger, isMutating } = useMutateCompayAdditionalInfo();
  const [advanceInformation, setAdvanceInformation] = useState<AdvanceInformationData>();
  const { Funnel, Step, currentStep, setStep } = useFunnel<StepType>('basic');

  const basicInformationNextStep = (basicInformation: BasicInfoType) => {
    setAdvanceInformation(prev => ({ ...prev, ...basicInformation }));
    setStep('company');
  };

  const companyInfoNextStep = async (companyInfo: CompanyInfoType) => {
    const newAdvanceInformation = { ...advanceInformation, ...companyInfo };
    setAdvanceInformation(newAdvanceInformation);
    try {
      const result = await trigger(newAdvanceInformation);
      setStep('complete');
    } catch (error: any) {
      alert(error?.response?.data?.message);
      console.log(error);
    }
  };

  const nextStep = {
    basicInformation: basicInformationNextStep,
    companyInformation: companyInfoNextStep,
  };

  const preventStep = () => {
    const currentStepIndex = STEP.findIndex(s => s === currentStep);
    if (currentStepIndex === 0) return;
    setStep(STEP[currentStepIndex - 1]);
  };

  return {
    advanceInformation,
    Funnel,
    Step,
    currentStep,
    nextStep,
    preventStep,
    isMutating,
  };
};
