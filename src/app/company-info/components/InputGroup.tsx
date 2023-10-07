import useCompanyInfoFormStore from '../hooks/useCompanyInfoFormStore';

export default function InputGroup() {
	const employeeNumber = useCompanyInfoFormStore(
		state => state.employeeNumber,
	);
	const accidentCount = useCompanyInfoFormStore(state => state.accidentCount);
	const nearAccidentCount = useCompanyInfoFormStore(
		state => state.nearAccidentCount,
	);

	const setEmployeeNumber = useCompanyInfoFormStore(
		state => state.setEmployeeNumber,
	);
	const setAccidentCount = useCompanyInfoFormStore(
		state => state.setAccidentCount,
	);
	const setNearAccidentCount = useCompanyInfoFormStore(
		state => state.setNearAccidentCount,
	);

	const handleEmployeeNumberChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setEmployeeNumber(Number(e.target.value));
	};

	const handleAccidentCountChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setAccidentCount(Number(e.target.value));
	};

	const handleNearAccidentCountChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setNearAccidentCount(Number(e.target.value));
	};

	return (
		<>
			<label className="block text-sm font-medium leading-6 text-gray-900">
				귀사의 재직자 수는 어떻게 되나요?
				<input
					id="employeeNumber"
					name="employeeNumber"
					type="number"
					className="w-full p-2 border"
					onChange={handleEmployeeNumberChange}
					value={employeeNumber}
				/>
			</label>

			<label className="block text-sm font-medium leading-6 text-gray-900">
				최근 3년간 재해 발생 사례 (건수)
				<input
					id="accidentCount"
					name="accidentCount"
					type="number"
					className="w-full p-2 border"
					onChange={handleAccidentCountChange}
					value={accidentCount}
				/>
			</label>

			<label className="block text-sm font-medium leading-6 text-gray-900">
				사고사례 및 발굴 (건수)
				<input
					id="nearAccidentCount"
					name="nearAccidentCount"
					type="number"
					className="w-full p-2 border"
					onChange={handleNearAccidentCountChange}
					value={nearAccidentCount}
				/>
			</label>
		</>
	);
}
