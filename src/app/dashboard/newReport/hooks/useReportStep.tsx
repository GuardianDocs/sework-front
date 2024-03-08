'use client';
import { AccidentAndWorkerInfoType, AssessmentInfoType, CompanyInfoType, ManagerStructureType } from '../validations';
import { useFunnel } from '@/hooks';
import { STEP, StepType } from '../constants';
import { useState } from 'react';

type NewReportData = {
  assessmentInfo?: AssessmentInfoType;
  accidentAndWorkerInfo?: AccidentAndWorkerInfoType;
  managerStructure?: ManagerStructureType;
  companyInfo?: CompanyInfoType;
};

export const useNewReportData = () => {
  const [newReportData, setNewReportData] = useState<NewReportData>();
  const { Funnel, Step, currentStep, setStep } = useFunnel<StepType>('assessmentInfo');

  const assessmentInfoNextStep = (assessmentInfo: AssessmentInfoType) => {
    setNewReportData(prev => ({ ...prev, assessmentInfo }));
    setStep('accidentAndWorkerInfo');
  };

  const accidentAndWorkerInfoNextStep = (accidentAndWorkerInfo: AccidentAndWorkerInfoType) => {
    setNewReportData(prev => ({ ...prev, accidentAndWorkerInfo }));
    setStep('managerStructure');
  };

  const managerStructureNextStep = (managerStructure: ManagerStructureType) => {
    setNewReportData(prev => ({ ...prev, managerStructure }));
    setStep('companyInfo');
  };

  const companyInfoNextStep = (companyInfo: CompanyInfoType) => {
    setNewReportData(prev => ({ ...prev, companyInfo }));
    console.log('done', newReportData);
  };

  const nextStep = {
    assessmentInfo: assessmentInfoNextStep,
    accidentAndWorkerInfo: accidentAndWorkerInfoNextStep,
    managerStructure: managerStructureNextStep,
    companyInfo: companyInfoNextStep,
  };

  const preventStep = () => {
    const currentStepIndex = STEP.findIndex(s => s === currentStep);
    if (currentStepIndex === 0) return;
    setStep(STEP[currentStepIndex - 1]);
  };

  return {
    newReportData,
    Funnel,
    Step,
    currentStep,
    nextStep,
    preventStep,
  };
};
