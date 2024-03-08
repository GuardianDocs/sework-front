'use client';
// import { DefaultApi } from '@/lib/axios/oas-axios';
import { NewReportHeader } from './components/NewReportHeader';
import { AccidentAndWorkerInfo, CompanyInfo, ManagerStructure, AssessmentInfo } from './components/section';
import { useNewReportData } from './hooks/useReportStep';

const Page = () => {
  const { newReportData, Funnel, Step, currentStep, nextStep, preventStep } = useNewReportData();

  return (
    <div className="flex-col-center gap-y-12 w-full">
      <NewReportHeader step={currentStep} />
      <Funnel>
        <Step name="assessmentInfo">
          <AssessmentInfo data={newReportData?.assessmentInfo} nextStep={nextStep['assessmentInfo']} />
        </Step>
        <Step name="accidentAndWorkerInfo">
          <AccidentAndWorkerInfo
            data={newReportData?.accidentAndWorkerInfo}
            nextStep={nextStep['accidentAndWorkerInfo']}
            preventStep={preventStep}
          />
        </Step>
        <Step name="managerStructure">
          <ManagerStructure />
        </Step>
        <Step name="companyInfo">
          <CompanyInfo />
        </Step>
        {/*           
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
          </div> */}
      </Funnel>
    </div>
  );
};

export default Page;
