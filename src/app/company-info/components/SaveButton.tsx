'use client';

import useCompanyInfoFormStore from '../hooks/useCompanyInfoFormStore';

export default function SaveButton() {
	const { getAllState } = useCompanyInfoFormStore(state => ({
		getAllState: state.actions.getAllState,
	}));

	const handleButtonClick = async () => {
		const response = await fetch('/api/company-info', {
			method: 'POST',
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(getAllState()),
		});

		const responseData = await response.json();

		const { code, message } = responseData.data;

		console.log('code', code);
		alert(message);
	};

	return (
		<button
			className="px-6 py-3 text-white bg-blue-500 rounded-full"
			onClick={handleButtonClick}
		>
			저장(완료)
		</button>
	);
}
