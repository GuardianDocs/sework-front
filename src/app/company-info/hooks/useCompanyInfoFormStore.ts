import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type CompanyInfoFormState = {
	sectorId: number;
	processList: {
		description: string;
		id: number;
		ogId: number;
		title: string;
	};
};

type CompanyInfoFormAction = {
	setSectorId: (sectorId: number) => void;
	setProcessList: (processList: CompanyInfoFormState['processList']) => void;
	getSectorId: () => CompanyInfoFormState['sectorId'];
	getProcessList: () => CompanyInfoFormState['processList'];
	getAllState: () => CompanyInfoFormState;
};

type CompanyInfoFormStore = CompanyInfoFormState & {
	actions: CompanyInfoFormAction;
};

const initialState: CompanyInfoFormState = {
	sectorId: 0,
	processList: {
		description: '',
		id: 0,
		ogId: 0,
		title: '',
	},
};

const useCompanyInfoFormStore = create(
	devtools<CompanyInfoFormStore>((set, get) => ({
		...initialState,
		actions: {
			setSectorId: sectorId => set({ sectorId }),
			setProcessList: processList => set({ processList }),
			getSectorId: () => get().sectorId,
			getProcessList: () => get().processList,
			getAllState: () => {
				const { sectorId, processList } = get();
				return { sectorId, processList };
			},
		},
	})),
);

export default useCompanyInfoFormStore;
