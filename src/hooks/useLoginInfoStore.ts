import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type LoginInfoState = {
	id: number;
	businessNumber: string;
	companyId: number | null;
	companyName: string;
	ownerName: string;
	accessToken: string;
	refreshTokenExpiredAt: string;
};

type LoginInfoAction = {
	setId: (id: number) => void;
	setBusinessNumber: (businessNumber: string) => void;
	setCompanyId: (companyId: LoginInfoState['companyId']) => void;
	setCompanyName: (companyName: string) => void;
	setOwnerName: (ownerName: string) => void;
	setAccessToken: (accessToken: string) => void;
	setRefreshTokenExpiredAt: (refreshTokenExpiredAt: string) => void;

	getId: () => number;
	getBusinessNumber: () => string;
	getCompanyId: () => LoginInfoState['companyId'];
	getCompanyName: () => string;
	getOwnerName: () => string;
	getAccessToken: () => string;
	getRefreshTokenExpiredAt: () => string;

	getAllState: () => LoginInfoState;
	reset: () => void;
};

type LoginInfoStore = LoginInfoState & {
	actions: LoginInfoAction;
};

const initialState: LoginInfoState = {
	id: 0,
	businessNumber: '',
	companyId: null,
	companyName: '',
	ownerName: '',
	accessToken: '',
	refreshTokenExpiredAt: '',
};

// TODO: persist로 보존시켜야할지?
const useLoginInfoStore = create(
	devtools<LoginInfoStore>((set, get) => ({
		...initialState,
		actions: {
			setId: (id: number) => set({ id }),
			setBusinessNumber: (businessNumber: string) =>
				set({ businessNumber }),
			setCompanyId: (companyId: LoginInfoState['companyId']) =>
				set({ companyId }),
			setCompanyName: (companyName: string) => set({ companyName }),
			setOwnerName: (ownerName: string) => set({ ownerName }),
			setAccessToken: (accessToken: string) => set({ accessToken }),
			setRefreshTokenExpiredAt: (refreshTokenExpiredAt: string) =>
				set({ refreshTokenExpiredAt }),

			getId: () => get().id,
			getBusinessNumber: () => get().businessNumber,
			getCompanyId: () => get().companyId,
			getCompanyName: () => get().companyName,
			getOwnerName: () => get().ownerName,
			getAccessToken: () => get().accessToken,
			getRefreshTokenExpiredAt: () => get().refreshTokenExpiredAt,

			getAllState: () => get(),

			reset: () => set({ ...initialState }),
		},
	})),
);

export default useLoginInfoStore;
