import { useDaumPostcodePopup } from 'react-daum-postcode';
import useJoinFormStore from '../hooks/useJoinFormStore';

export default function AddressInfoInputGroup() {
	const {
		postNumber,
		baddress,
		detailAddress,
		setPostNumber,
		setBaddress,
		setDetailAddress,
	} = useJoinFormStore(state => ({
		postNumber: state.postNumber,
		baddress: state.baddress,
		detailAddress: state.detailAddress,
		setPostNumber: state.actions.setPostNumber,
		setBaddress: state.actions.setBaddress,
		setDetailAddress: state.actions.setDetailAddress,
	}));

	const handleAddressComplete = (data: any) => {
		const { zonecode, roadAddress } = data;

		setPostNumber(zonecode);
		setBaddress(roadAddress);
	};
	const openDaumPostCodePopup = useDaumPostcodePopup();

	const handleAddressClick = () => {
		openDaumPostCodePopup({ onComplete: handleAddressComplete });
	};

	return (
		<>
			<div className="mb-4">
				<label className="block mb-2" htmlFor="postNumber">
					우편번호
				</label>
				<div className="flex flex-row">
					<input
						readOnly
						type="text"
						name="postNumber"
						id="postNumber"
						className="w-full p-2 border rounded"
						value={postNumber}
						onChange={e => setPostNumber(e.target.value)}
					/>
					<button
						type="button"
						className="w-24 py-2 ml-2 text-white bg-blue-500 rounded"
						onClick={handleAddressClick}
						style={{ height: '100%' }}
					>
						검색
					</button>
				</div>
			</div>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="baddress">
					사업장의 기본 주소 (도로명 주소)
				</label>
				<input
					readOnly
					type="text"
					name="baddress"
					id="baddress"
					className="w-full p-2 border rounded"
					value={baddress}
					onChange={e => setBaddress(e.target.value)}
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="detailAddress">
					상세 주소
				</label>
				<input
					type="text"
					name="detailAddress"
					id="detailAddress"
					className="w-full p-2 border rounded"
					value={detailAddress}
					onChange={e => setDetailAddress(e.target.value)}
				/>
			</div>
		</>
	);
}
