import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SelectOption = {
  label: React.ReactNode;
  value: string | number;
};

type Step2State = {
  companyProcessTitle: Array<SelectOption> | [];
  selectedCompanyProcessTitleIndex: number;
};

type Step2Actions = {
  setCompanyProcessTitle: (companyProcessTitle: Step2State['companyProcessTitle']) => void;
  setSelectedCompanyProcessTitleIndex: (
    selectedCompanyProcessTitleIndex: Step2State['selectedCompanyProcessTitleIndex']
  ) => void;
};

export const useStep2Store = create(
  devtools<Step2State & Step2Actions>(set => ({
    companyProcessTitle: [],
    selectedCompanyProcessTitleIndex: 0,
    setCompanyProcessTitle: (companyProcessTitle: Step2State['companyProcessTitle']) => set({ companyProcessTitle }),
    setSelectedCompanyProcessTitleIndex: (
      selectedCompanyProcessTitleIndex: Step2State['selectedCompanyProcessTitleIndex']
    ) => set({ selectedCompanyProcessTitleIndex }),
  }))
);
