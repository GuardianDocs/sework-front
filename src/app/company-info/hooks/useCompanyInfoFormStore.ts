import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type CompanyInfoFormState = {
	sectorId: number;

	accidentCount: number;
	employeeNumber: number;
	nearAccidentCount: number;

	additionalInfo: {
		// 근로자 구성
		employeeDemographyList: any[];
		// 작업환경 측정
		environmentMeasurementYn: string;
		// 건강검진
		healthScreeningYn: 'true' | 'false' | '';
		// 특별안전교육 필요공정
		processWithSpecialEducation: 'true' | 'false' | '';
		// 안전교육 필요공정
		ptwRequiredYn: 'true' | 'false' | '';
		// 운반수단
		transportationMethodList: any[];
		// 중량물 취급 형태
		weightTreatmentList: any[];
	};

	processList: any[];
};

type CompanyInfoFormAction = {
	setSectorId: (sectorId: number) => void;
	setProcessList: (processList: CompanyInfoFormState['processList']) => void;
	setAccidentCount: (count: number) => void;
	setAdditionalInfo: (info: CompanyInfoFormState['additionalInfo']) => void;
	setEmployeeNumber: (num: number) => void;
	setNearAccidentCount: (count: number) => void;

	getSectorId: () => CompanyInfoFormState['sectorId'];
	getProcessList: () => CompanyInfoFormState['processList'];
	getAllState: () => CompanyInfoFormState;
};

type CompanyInfoFormStore = CompanyInfoFormState & CompanyInfoFormAction;

const initialState: CompanyInfoFormState = {
	sectorId: 0,
	processList: [],
	accidentCount: 0,
	additionalInfo: {
		employeeDemographyList: [],
		environmentMeasurementYn: '',
		healthScreeningYn: '',
		processWithSpecialEducation: '',
		ptwRequiredYn: '',
		transportationMethodList: [],
		weightTreatmentList: [],
	},
	employeeNumber: 0,
	nearAccidentCount: 0,
};

const useCompanyInfoFormStore = create(
	devtools<CompanyInfoFormStore>((set, get) => ({
		...initialState,
		setSectorId: sectorId => set({ sectorId }),
		setProcessList: processList => set({ processList }),
		setAccidentCount: count => set({ accidentCount: count }),
		setAdditionalInfo: info =>
			set(state => ({
				additionalInfo: {
					...state.additionalInfo,
					...info,
				},
			})),

		setEmployeeNumber: num => set({ employeeNumber: num }),
		setNearAccidentCount: count => set({ nearAccidentCount: count }),

		getSectorId: () => get().sectorId,
		getProcessList: () => get().processList,
		getAllState: () => {
			const {
				sectorId,
				processList,
				accidentCount,
				additionalInfo,
				employeeNumber,
				nearAccidentCount,
			} = get();
			return {
				sectorId,
				processList,
				accidentCount,
				additionalInfo,
				employeeNumber,
				nearAccidentCount,
			};
		},
	})),
);

export default useCompanyInfoFormStore;
