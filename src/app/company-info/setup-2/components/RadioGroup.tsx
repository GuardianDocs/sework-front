'use client';

import { useQuery } from 'react-query';

import useLoginInfoStore from '@/hooks/useLoginInfoStore';
import useCompanyInfoFormStore, {
	CompanyInfoFormState,
} from '../../hooks/useCompanyInfoFormStore';

export default function RadioGroup() {
	const { accessToken } = useLoginInfoStore(state => ({
		accessToken: state.accessToken,
	}));

	const { setAdditionalInfo, additionalInfo } = useCompanyInfoFormStore(
		state => ({
			setAdditionalInfo: state.setAdditionalInfo,
			additionalInfo: state.additionalInfo,
		}),
	);

	const fetchAnswers = async () => {
		const response = await fetch('/api/company-info/answer', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data.data.data;
	};

	const {
		data: answers,
		error,
		isLoading,
	} = useQuery('answers', fetchAnswers);

	const handleInputChange = (
		type: keyof CompanyInfoFormState['additionalInfo'],
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		console.log('handleInputChange', type, event.target.value);

		const value = event.target.value;

		if (event.target.type === 'checkbox') {
			const prevValue = additionalInfo[type] as any[];
			const newValue = event.target.checked
				? [...prevValue, value]
				: prevValue.filter((v: any) => v !== value);
			setAdditionalInfo({ ...additionalInfo, [type]: newValue });
		} else {
			// radio 버튼인 경우
			// value가 string이므로 boolean으로 변환
			setAdditionalInfo({
				...additionalInfo,
				[type]: value,
			});
		}
	};

	const renderAnswers = (
		answerList: any[],
		inputType: string,
		type: keyof CompanyInfoFormState['additionalInfo'],
	) => {
		if (!answerList) return [];
		return answerList.map((answer: any) => (
			<div key={answer.value} className="flex items-center mb-2">
				<label className="flex items-center text-sm font-medium text-gray-700">
					<input
						name={type}
						type={inputType}
						className="w-4 h-4 mr-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
						value={answer.value}
						checked={
							inputType === 'checkbox'
								? (additionalInfo[type] as any[]).includes(
										answer.value,
								  )
								: additionalInfo[type] === answer.value
						}
						onChange={e => handleInputChange(type, e)}
					/>
					{answer.key}
				</label>
			</div>
		));
	};

	if (isLoading) return <span>Loading...</span>;
	if (error) return <span>Error loading data</span>;

	return (
		<>
			{[
				{
					label: '근로자 구성 및 경력 특성을 선택해주세요. (중복선택 가능)',
					answerList: answers?.employeeDemographyList,
					inputType: 'checkbox',
					type: 'employeeDemographyList',
				},
				{
					label: '귀사에서는 근로자 건강검진(건강보험공단 검진 제외)을 별도로 실시하고 있으신가요?',
					answerList: [
						{
							key: '실시하고 있음',
							value: 'true',
						},
						{
							key: '실시하고 있지 않음',
							value: 'false',
						},
					],
					inputType: 'radio',
					type: 'healthScreeningYn',
				},
				{
					label: '귀사에서는 작업환경측정을 하고 있으신가요?',
					answerList: answers?.environmentMeasurementAnswerList,
					inputType: 'radio',
					type: 'environmentMeasurementYn',
				},
				{
					label: '특별안전교육이 필요한 공정이 있으신가요? (유해물질, 크레인, 압력용기 등)',
					answerList: [
						{
							key: '있음',
							value: 'true',
						},
						{
							key: '없음',
							value: 'false',
						},
					],
					inputType: 'radio',
					type: 'processWithSpecialEducation',
				},
				{
					label: '안전작업허가증이 필요한 작업이 있나요?',
					answerList: [
						{
							key: '있음',
							value: 'true',
						},
						{
							key: '없음',
							value: 'false',
						},
					],
					inputType: 'radio',
					type: 'ptwRequiredYn',
				},
				{
					label: '귀사의 운반수단을 선택해주세요 (중복선택)',
					answerList: answers?.transportationMethodList,
					inputType: 'checkbox',
					type: 'transportationMethodList',
				},
				{
					label: '사람이 중량물을 취급 할 때의 형태를 체크해주세요 (중복선택)',
					answerList: answers?.weightTreatmentList,
					inputType: 'checkbox',
					type: 'weightTreatmentList',
				},
			].map(({ label, answerList, inputType, type }) => (
				<div className="mb-4" key={label}>
					<label className="block text-sm font-medium leading-6 text-gray-900">
						{label}
					</label>
					<div className="mt-2">
						{renderAnswers(answerList, inputType, type as any)}
					</div>
				</div>
			))}
		</>
	);
}
