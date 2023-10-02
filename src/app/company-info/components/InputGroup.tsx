export default function InputGroup() {
	return (
		<>
			{/* TODO: zustand 연결 필요 */}
			<label className="block text-sm font-medium leading-6 text-gray-900">
				귀사의 재직자 수는 어떻게 되나요?
				<input
					id="employeeNumber"
					name="employeeNumber"
					type="number"
					className="w-full p-2 border"
				/>
			</label>

			<label className="block text-sm font-medium leading-6 text-gray-900">
				최근 3년간 재해 발생 사례 (건수)
				<input
					id="accidentCount"
					name="accidentCount"
					type="number"
					className="w-full p-2 border"
				/>
			</label>

			<label className="block text-sm font-medium leading-6 text-gray-900">
				사고사례 및 발굴 (건수)
				<input
					id="nearAccidentCount"
					name="nearAccidentCount"
					type="number"
					className="w-full p-2 border"
				/>
			</label>
		</>
	);
}
