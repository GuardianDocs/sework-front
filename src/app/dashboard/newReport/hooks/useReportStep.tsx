'use client';
import { useState } from 'react';

export const useReportStep = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const isFirstStep = step === 1;

  const isLastStep = step === 4;

  return { step, nextStep, prevStep, isFirstStep, isLastStep };
};
