import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type LoginInfoState = {
  id: number;
  companyName: string;
  accessToken: string;
  refreshTokenExpiredAt: string;
  requireAdditionalInfoYn: boolean;
};

type LoginInfoAction = {
  setId: (id: LoginInfoState['id']) => void;
  setCompanyName: (companyName: LoginInfoState['companyName']) => void;
  setAccessToken: (accessToken: LoginInfoState['accessToken']) => void;
  setRefreshTokenExpiredAt: (refreshTokenExpiredAt: LoginInfoState['refreshTokenExpiredAt']) => void;
  setRequireAdditionalInfoYn: (requireAdditionalInfoYn: LoginInfoState['requireAdditionalInfoYn']) => void;

  getId: () => LoginInfoState['id'];
  getCompanyName: () => LoginInfoState['companyName'];
  getAccessToken: () => LoginInfoState['accessToken'];
  getRefreshTokenExpiredAt: () => LoginInfoState['refreshTokenExpiredAt'];
  getRequireAdditionalInfoYn: () => LoginInfoState['requireAdditionalInfoYn'];

  getAllState: () => LoginInfoState;
  reset: () => void;
};

type LoginInfoStore = LoginInfoState & LoginInfoAction;

const initialState: LoginInfoState = {
  id: 0,
  companyName: '',
  accessToken: '',
  refreshTokenExpiredAt: '',
  requireAdditionalInfoYn: false,
};

// TODO: persist로 보존시켜야할지?
const useLoginInfoStore = create(
  persist(
    devtools<LoginInfoStore>((set, get) => ({
      ...initialState,
      setId: (id: number) => set({ id }),
      setCompanyName: (companyName: string) => set({ companyName }),
      setAccessToken: (accessToken: string) => set({ accessToken }),
      setRefreshTokenExpiredAt: (refreshTokenExpiredAt: string) => set({ refreshTokenExpiredAt }),
      setRequireAdditionalInfoYn: (requireAdditionalInfoYn: boolean) => set({ requireAdditionalInfoYn }),

      getId: () => get().id,
      getCompanyName: () => get().companyName,
      getAccessToken: () => get().accessToken,
      getRefreshTokenExpiredAt: () => get().refreshTokenExpiredAt,
      getRequireAdditionalInfoYn: () => get().requireAdditionalInfoYn,

      getAllState: () => get(),

      reset: () => set({ ...initialState }),
    })),
    {
      name: 'loginInfo',
      skipHydration: true,
    }
  )
);

export default useLoginInfoStore;
