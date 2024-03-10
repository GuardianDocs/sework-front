'use client';
import { AdvanceInformationHeader } from './components/AdvanceInformationHeader';
import { Complete } from './components/Complete';
import { InformationBasic } from './components/InformationBasic';
import { InformationCompany } from './components/InformationCompany';
import { useAdvanceInformationStep } from './hooks/useAdvanceInformationStep';

const Page = () => {
  const { advanceInformation, isMutating, Funnel, Step, currentStep, nextStep, preventStep } =
    useAdvanceInformationStep();

  return (
    <div className="flex-col-center gap-y-12 w-[588px]">
      <AdvanceInformationHeader step={currentStep} />
      <Funnel>
        <Step name="basic">
          <InformationBasic data={advanceInformation} nextStep={nextStep.basicInformation} />
        </Step>
        <Step name="company">
          <InformationCompany
            data={advanceInformation}
            nextStep={nextStep.companyInformation}
            preventStep={preventStep}
            isLoading={isMutating}
          />
        </Step>
        <Step name="complete">
          <Complete />
        </Step>
      </Funnel>
    </div>
  );
};

export default Page;
