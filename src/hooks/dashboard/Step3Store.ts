import { type DropdownOption } from '@/components/ui/DropdownButton/DropdownButton';
import { type CompanyDangerFactorAndSolutionVO, type CompanyDangerSolutionVORes } from '@/services';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SelectOption = DropdownOption;

type Step3State = {
  companyProcessTitle: Array<SelectOption> | [];
  selectedCompanyProcessTitleIndex: number;

  companyDangerFactorAndSolution: Array<CompanyDangerFactorAndSolutionVO>;

  dialogDangerFactorList: Array<SelectOption> | [];
  selectedDialogDangerFactorIndex: number;

  dialogCompanyDangerSolutionList: Array<CompanyDangerSolutionVORes> | [];
};

type Step3Actions = {
  setCompanyProcessTitle: (companyProcessTitle: Step3State['companyProcessTitle']) => void;
  setSelectedCompanyProcessTitleIndex: (
    selectedCompanyProcessTitleIndex: Step3State['selectedCompanyProcessTitleIndex']
  ) => void;

  setCompanyDangerFactorAndSolution: (
    companyDangerFactorAndSolution: Step3State['companyDangerFactorAndSolution']
  ) => void;

  setDialogDangerFactorList: (dialogDangerFactorList: Step3State['dialogDangerFactorList']) => void;
  setSelectedDialogDangerFactorIndex: (
    selectedDialogDangerFactorIndex: Step3State['selectedDialogDangerFactorIndex']
  ) => void;
  setDialogCompanyDangerSolutionList: (
    dialogCompanyDangerSolutionList: Step3State['dialogCompanyDangerSolutionList']
  ) => void;
};

export const useStep3Store = create(
  devtools<Step3State & Step3Actions>(set => ({
    companyProcessTitle: [],
    selectedCompanyProcessTitleIndex: 0,
    companyDangerFactorAndSolution: [],
    dialogDangerFactorList: [],
    selectedDialogDangerFactorIndex: 0,
    dialogCompanyDangerSolutionList: [],

    setCompanyProcessTitle: (companyProcessTitle: Step3State['companyProcessTitle']) => set({ companyProcessTitle }),
    setSelectedCompanyProcessTitleIndex: (
      selectedCompanyProcessTitleIndex: Step3State['selectedCompanyProcessTitleIndex']
    ) => set({ selectedCompanyProcessTitleIndex }),
    setCompanyDangerFactorAndSolution: (companyDangerFactorAndSolution: Step3State['companyDangerFactorAndSolution']) =>
      set({ companyDangerFactorAndSolution }),
    setDialogDangerFactorList: (dialogDangerFactorList: Step3State['dialogDangerFactorList']) =>
      set({ dialogDangerFactorList }),
    setSelectedDialogDangerFactorIndex: (
      selectedDialogDangerFactorIndex: Step3State['selectedDialogDangerFactorIndex']
    ) => set({ selectedDialogDangerFactorIndex }),
    setDialogCompanyDangerSolutionList: (
      dialogCompanyDangerSolutionList: Step3State['dialogCompanyDangerSolutionList']
    ) => set({ dialogCompanyDangerSolutionList }),
  }))
);
