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
	// TODO: API 오타 수정되면 아래 코드로 변경
	// getAllState: () => CompanyInfoFormState;
	getAllState: () => {
		sectorId: number;
		processLit: CompanyInfoFormState['processList'];
	};
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
				// TODO: API 오타 수정되면 아래 코드로 변경
				// return { sectorId, processList };
				return { sectorId, processLit: processList };
			},
		},
	})),
);

export default useCompanyInfoFormStore;
