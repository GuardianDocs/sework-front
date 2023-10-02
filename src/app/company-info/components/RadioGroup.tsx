'use client';

import { useQuery } from 'react-query';

import useLoginInfoStore from '@/hooks/useLoginInfoStore';

export default function RadioGroup() {
	const { accessToken } = useLoginInfoStore(state => ({
		accessToken: state.accessToken,
	}));

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

	if (isLoading) return <span>Loading...</span>;
	if (error) return <span>Error loading data</span>;

	const renderAnswers = (answerList: any, inputType: string) => {
		if (!answerList) return [];
		return answerList.map((answer: any) => (
			<div key={answer.value} className="flex items-center mb-2">
				<label className="flex items-center text-sm font-medium text-gray-700">
					<input
						id={answer.id}
						name="answer"
						type={inputType}
						className="w-4 h-4 mr-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
					/>
					{answer.key}
				</label>
			</div>
		));
	};

	return (
		<>
			{/* TODO: zustand 연결 필요 */}
			{[
				{
					label: '근로자 구성 및 경력 특성을 선택해주세요. (중복선택 가능)',
					answerList: answers?.employeeDemographyList,
					inputType: 'checkbox',
				},
				{
					label: '귀사에서는 작업환경측정을 하고 있으신가요?',
					answerList: answers?.environmentMeasurementAnswerList,
					inputType: 'radio',
				},
				{
					label: '귀사의 운반수단을 선택해주세요 (중복선택)',
					answerList: answers?.transportationMethodList,
					inputType: 'checkbox',
				},
				{
					label: '사람이 중량물을 취급 할 때의 형태를 체크해주세요 (중복선택)',
					answerList: answers?.weightTreatmentList,
					inputType: 'checkbox',
				},
			].map(({ label, answerList, inputType }) => (
				<div className="mb-4" key={label}>
					<label className="block text-sm font-medium leading-6 text-gray-900">
						{label}
					</label>
					<div className="mt-2">
						{renderAnswers(answerList, inputType)}
					</div>
				</div>
			))}
		</>
	);
}
