import { type CompanyProcessVO } from '@/services';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Step1State = {
  step1: Array<CompanyProcessVO>;
};

type Step1Actions = {
  setStep1: (step1: Array<CompanyProcessVO>) => void;
};

export const useStep1Store = create(
  devtools<Step1State & Step1Actions>(set => ({
    step1: [],
    setStep1: (step1: Array<CompanyProcessVO>) => set({ step1 }),
  }))
);
