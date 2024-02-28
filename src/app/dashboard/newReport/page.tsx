'use client';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
// import { DefaultApi } from '@/lib/axios/oas-axios';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { FormProvider, useForm } from 'react-hook-form';
import { NewReportHeader } from './components/NewReportHeader';
import { AccidentAndWorkerInfo, CompanyInfo, ManagerStructure, ReportInfo } from './components/section';
import { useReportStep } from './hooks/useReportStep';
import { resolver } from './validationSchema';

const Page = () => {
  const formMethods = useForm<RegisterCompanyAssessmentAdditionalInfoRequest>({
    resolver,
    mode: 'all',
  });

  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = formMethods;

  const values = getValues();

  const { step, nextStep, prevStep, isFirstStep, isLastStep, isPassibleToNextStep } = useReportStep(values, errors);

  const handeSaveCompanyAssessmentAdditionalInfo = async (data: RegisterCompanyAssessmentAdditionalInfoRequest) => {
    // const response = await DefaultApi.saveAdditionalInfoUsingPOST(data);
    // response.data;
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(handeSaveCompanyAssessmentAdditionalInfo)}
        className="flex-col-center gap-y-12 w-full"
      >
        <NewReportHeader step={step} />
        {step === 1 && <ReportInfo />}
        {step === 2 && <AccidentAndWorkerInfo />}
        {step === 3 && <ManagerStructure />}
        {step === 4 && <CompanyInfo />}
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
            // <ActionButton type="button" variant="filled" size="l" onClick={nextStep} disabled={!isPassibleToNextStep}>
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
