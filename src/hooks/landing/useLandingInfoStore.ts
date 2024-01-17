import { type AdditionalCompanyAccountInfoRequest } from '@/services';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type LandingInfoState = {
  landingInfo: AdditionalCompanyAccountInfoRequest;
};

type LandingInfoActions = {
  setLandingInfo: (landingInfo: AdditionalCompanyAccountInfoRequest) => void;
};

export const useLandingInfoStore = create(
  devtools<LandingInfoState & LandingInfoActions>(set => ({
    landingInfo: {},
    setLandingInfo: landingInfo => set({ landingInfo }),
  }))
);
