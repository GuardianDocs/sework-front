'use client';
// import { DefaultApi } from '@/lib/axios/oas-axios';
import { NewAssessmentHeader } from './components/NewAssessmentHeader';
import { AccidentAndWorkerInfo, CompanyInfo, ManagerStructure, AssessmentInfo } from './components/section';
import { useNewReportData } from './hooks/useReportStep';

const Page = () => {
  const { newReportData, Funnel, Step, currentStep, nextStep, preventStep } = useNewReportData();

  return (
    <div className="flex-col-center gap-y-12 w-full">
      <NewAssessmentHeader step={currentStep} />
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
          <ManagerStructure
            data={newReportData?.managerStructure}
            nextStep={nextStep['managerStructure']}
            preventStep={preventStep}
          />
        </Step>
        <Step name="companyInfo">
          <CompanyInfo data={newReportData?.companyInfo} nextStep={nextStep['companyInfo']} preventStep={preventStep} />
        </Step>
      </Funnel>
    </div>
  );
};

export default Page;
