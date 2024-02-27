'use client';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
// import { DefaultApi } from '@/lib/axios/oas-axios';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { FormProvider, useForm } from 'react-hook-form';
import { NewReportHeader } from './components/NewReportHeader';
import { AccidentAndWorkerInfo, ReportInfo } from './components/section';
import { useReportStep } from './hooks/useReportStep';

const Page = () => {
  const { step, nextStep, prevStep, isFirstStep, isLastStep } = useReportStep();

  const formMethods = useForm<RegisterCompanyAssessmentAdditionalInfoRequest>({
    mode: 'all',
  });

  const handeSubmit = (data: RegisterCompanyAssessmentAdditionalInfoRequest) => {
    console.log(data);
    // DefaultApi.saveAdditionalInfoUsingPOST(data);
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handeSubmit)} className="flex-col-center gap-y-12 w-full">
        <NewReportHeader step={step} />
        {step === 1 && <ReportInfo />}
        {step === 2 && <AccidentAndWorkerInfo />}
        {step === 3 && <AccidentAndWorkerInfo />}
        {step === 4 && <AccidentAndWorkerInfo />}
        <div className="flex-center gap-x-3">
          {!isFirstStep && (
            <ActionButton type="button" variant="tonal-gray" size="l" onClick={prevStep}>
              이전 단계
            </ActionButton>
          )}
          {isLastStep ? (
            <ActionButton type="submit" variant="filled" size="l">
              완료하기
            </ActionButton>
          ) : (
            <ActionButton type="button" variant="filled" size="l" onClick={nextStep}>
              다음 단계
            </ActionButton>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default Page;
