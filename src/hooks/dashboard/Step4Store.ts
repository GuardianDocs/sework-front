import { type DropdownOption } from '@/components/ui/DropdownButton/DropdownButton';
import { type CompanyDangerFactorAndSolutionVO, type CompanyDangerSolutionVORes } from '@/services';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SelectOption = DropdownOption;

type Step4State = {
  companyProcessTitle: Array<SelectOption> | [];
  selectedCompanyProcessTitleIndex: number;

  companyDangerFactorAndSolution: Array<CompanyDangerFactorAndSolutionVO>;

  dialogDangerFactorList: Array<SelectOption> | [];
  selectedDialogDangerFactorIndex: number;

  dialogCompanyDangerSolutionList: Array<CompanyDangerSolutionVORes> | [];
};

type Step4Actions = {
  setCompanyProcessTitle: (companyProcessTitle: Step4State['companyProcessTitle']) => void;
  setSelectedCompanyProcessTitleIndex: (
    selectedCompanyProcessTitleIndex: Step4State['selectedCompanyProcessTitleIndex']
  ) => void;

  setCompanyDangerFactorAndSolution: (
    companyDangerFactorAndSolution: Step4State['companyDangerFactorAndSolution']
  ) => void;

  setDialogDangerFactorList: (dialogDangerFactorList: Step4State['dialogDangerFactorList']) => void;
  setSelectedDialogDangerFactorIndex: (
    selectedDialogDangerFactorIndex: Step4State['selectedDialogDangerFactorIndex']
  ) => void;
  setDialogCompanyDangerSolutionList: (
    dialogCompanyDangerSolutionList: Step4State['dialogCompanyDangerSolutionList']
  ) => void;
};

export const useStep4Store = create(
  devtools<Step4State & Step4Actions>(set => ({
    companyProcessTitle: [],
    selectedCompanyProcessTitleIndex: 0,
    companyDangerFactorAndSolution: [],
    dialogDangerFactorList: [],
    selectedDialogDangerFactorIndex: 0,
    dialogCompanyDangerSolutionList: [],

    setCompanyProcessTitle: (companyProcessTitle: Step4State['companyProcessTitle']) => set({ companyProcessTitle }),
    setSelectedCompanyProcessTitleIndex: (
      selectedCompanyProcessTitleIndex: Step4State['selectedCompanyProcessTitleIndex']
    ) => set({ selectedCompanyProcessTitleIndex }),
    setCompanyDangerFactorAndSolution: (companyDangerFactorAndSolution: Step4State['companyDangerFactorAndSolution']) =>
      set({ companyDangerFactorAndSolution }),
    setDialogDangerFactorList: (dialogDangerFactorList: Step4State['dialogDangerFactorList']) =>
      set({ dialogDangerFactorList }),
    setSelectedDialogDangerFactorIndex: (
      selectedDialogDangerFactorIndex: Step4State['selectedDialogDangerFactorIndex']
    ) => set({ selectedDialogDangerFactorIndex }),
    setDialogCompanyDangerSolutionList: (
      dialogCompanyDangerSolutionList: Step4State['dialogCompanyDangerSolutionList']
    ) => set({ dialogCompanyDangerSolutionList }),
  }))
);
