import { convertZonedDateTimeToDate } from '@/utils/dataUtil';
import useJoinFormStore from '../hooks/useJoinFormStore';

export default function BusinessInfoInputGroup() {
	const {
		companyName,
		businessNumber,
		ownerName,
		startDate,
		employeeNumber,
		setCompanyName,
		setBusinessNumber,
		setOwnerName,
		setStartDate,
		setEmployeeNumber,
	} = useJoinFormStore(state => ({
		companyName: state.companyName,
		businessNumber: state.businessNumber,
		ownerName: state.ownerName,
		startDate: state.startDate,
		employeeNumber: state.employeeNumber,
		setCompanyName: state.actions.setCompanyName,
		setBusinessNumber: state.actions.setBusinessNumber,
		setOwnerName: state.actions.setOwnerName,
		setStartDate: state.actions.setStartDate,
		setEmployeeNumber: state.actions.setEmployeeNumber,
	}));

	return (
		<>
			<h3 className="mb-4 text-lg">사업자 정보</h3>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="companyName">
					회사명
				</label>
				<input
					type="text"
					name="companyName"
					id="companyName"
					className="w-full p-2 border rounded"
					value={companyName}
					onChange={e => setCompanyName(e.target.value)}
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="businessNumber">
					사업자 등록 번호 (-없이 입력)
				</label>
				<input
					type="text"
					name="businessNumber"
					id="businessNumber"
					className="w-full p-2 border rounded"
					value={businessNumber}
					onChange={e => setBusinessNumber(e.target.value)}
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="ownerName">
					대표자 성명
				</label>
				<input
					type="text"
					name="ownerName"
					id="ownerName"
					className="w-full p-2 border rounded"
					value={ownerName}
					onChange={e => setOwnerName(e.target.value)}
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="startDate">
					개업 일자
				</label>
				<input
					type="date"
					name="startDate"
					id="startDate"
					className="w-full p-2 border rounded"
					value={convertZonedDateTimeToDate(startDate)}
					onChange={e => setStartDate(e.target.value)}
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="employeeNumber">
					직원 수
				</label>
				<input
					type="number"
					name="employeeNumber"
					id="employeeNumber"
					className="w-full p-2 border rounded"
					value={employeeNumber}
					onChange={e => setEmployeeNumber(Number(e.target.value))}
				/>
			</div>
		</>
	);
}
