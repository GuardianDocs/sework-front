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
      </Funnel>
    </div>
  );
};

export default Page;
