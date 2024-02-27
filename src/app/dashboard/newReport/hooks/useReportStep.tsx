'use client';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { useState } from 'react';
import { FieldErrors } from 'react-hook-form';

export const useReportStep = (
  values: RegisterCompanyAssessmentAdditionalInfoRequest,
  errors: FieldErrors<RegisterCompanyAssessmentAdditionalInfoRequest>
) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const isFirstStep = step === 1;

  const isLastStep = step === 4;

  const isPassibleToNextStep = (() => {
    if (step === 1) {
      return (
        !!(values?.title && values?.type && values?.startAt && values?.endAt && values?.sectorId) &&
        !errors.title &&
        !errors.type &&
        !errors.startAt &&
        !errors.endAt &&
        !errors.sectorId
      );
    }

    if (step === 2) {
      // return values.accidentAndWorkerInfo?.accidentType && values.accidentAndWorkerInfo?.accidentDate;
    }

    if (step === 3) {
      // return values.accidentAndWorkerInfo?.accidentType && values.accidentAndWorkerInfo?.accidentDate;
    }

    if (step === 4) {
      // return values.accidentAndWorkerInfo?.accidentType && values.accidentAndWorkerInfo?.accidentDate;
    }
  })();

  return { step, nextStep, prevStep, isFirstStep, isLastStep, isPassibleToNextStep };
};
