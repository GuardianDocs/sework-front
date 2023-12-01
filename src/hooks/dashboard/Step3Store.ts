import { CompanyDangerFactorAndSolutionVO, CompanyDangerFactorVORes } from '@/services';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SelectOption = {
  label: React.ReactNode;
  value: string | number;
};

type Step3State = {
  companyProcessTitle: Array<SelectOption> | [];
  selectedCompanyProcessTitleIndex: number;

  companyDangerFactorAndSolution: Array<CompanyDangerFactorAndSolutionVO>;
};

type Step3Actions = {
  setCompanyProcessTitle: (companyProcessTitle: Step3State['companyProcessTitle']) => void;
  setSelectedCompanyProcessTitleIndex: (
    selectedCompanyProcessTitleIndex: Step3State['selectedCompanyProcessTitleIndex']
  ) => void;

  setCompanyDangerFactorAndSolution: (
    companyDangerFactorAndSolution: Step3State['companyDangerFactorAndSolution']
  ) => void;
};

export const useStep3Store = create(
  devtools<Step3State & Step3Actions>(set => ({
    companyProcessTitle: [],
    selectedCompanyProcessTitleIndex: 0,
    companyDangerFactorAndSolution: [],

    setCompanyProcessTitle: (companyProcessTitle: Step3State['companyProcessTitle']) => set({ companyProcessTitle }),
    setSelectedCompanyProcessTitleIndex: (
      selectedCompanyProcessTitleIndex: Step3State['selectedCompanyProcessTitleIndex']
    ) => set({ selectedCompanyProcessTitleIndex }),
    setCompanyDangerFactorAndSolution: (companyDangerFactorAndSolution: Step3State['companyDangerFactorAndSolution']) =>
      set({ companyDangerFactorAndSolution }),
  }))
);
