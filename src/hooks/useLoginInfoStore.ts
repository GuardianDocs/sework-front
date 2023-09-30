import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type LoginInfoState = {
	id: number;
	businessNumber: string;
	companyName: string;
	ownerName: string;
	accessToken: string;
};

type LoginInfoAction = {
	setId: (id: number) => void;
	setBusinessNumber: (businessNumber: string) => void;
	setCompanyName: (companyName: string) => void;
	setOwnerName: (ownerName: string) => void;
	setAccessToken: (accessToken: string) => void;

	getId: () => number;
	getBusinessNumber: () => string;
	getCompanyName: () => string;
	getOwnerName: () => string;
	getAccessToken: () => string;

	getAllState: () => LoginInfoState;
	reset: () => void;
};

type LoginInfoStore = LoginInfoState & {
	actions: LoginInfoAction;
};

const initialState: LoginInfoState = {
	id: 0,
	businessNumber: '',
	companyName: '',
	ownerName: '',
	accessToken: '',
};

// TODO: persist로 보존시켜야할지?
const useLoginInfoStore = create(
	devtools<LoginInfoStore>((set, get) => ({
		...initialState,
		actions: {
			setId: (id: number) => set({ id }),
			setBusinessNumber: (businessNumber: string) =>
				set({ businessNumber }),
			setCompanyName: (companyName: string) => set({ companyName }),
			setOwnerName: (ownerName: string) => set({ ownerName }),
			setAccessToken: (accessToken: string) => set({ accessToken }),

			getId: () => get().id,
			getBusinessNumber: () => get().businessNumber,
			getCompanyName: () => get().companyName,
			getOwnerName: () => get().ownerName,
			getAccessToken: () => get().accessToken,

			getAllState: () => get(),

			reset: () => set({ ...initialState }),
		},
	})),
);

export default useLoginInfoStore;
