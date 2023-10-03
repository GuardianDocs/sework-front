'use client';

import useLoginInfoStore from '@/hooks/useLoginInfoStore';
import useJoinFormStore from '../hooks/useJoinFormStore';
import AddressInfoInputGroup from './AddressInfoInputGroup';
import BusinessInfoInputGroup from './BusinessInfoInputGroup';
import LoginInfoInputGroup from './LoginInfoInputGroup';
import { useRouter } from 'next/navigation';

export default function JoinForm() {
	const { getAllState, setDummyState } = useJoinFormStore(state => ({
		getAllState: state.actions.getAllState,
		setDummyState: state.actions.setDummyState,
	}));

	const {
		setLoggedInId,
		setBusinessNumber,
		setCompanyId,
		setCompanyName,
		setOwnerName,
		setAccessToken,
		setRefreshTokenExpiredAt,
	} = useLoginInfoStore(state => ({
		setLoggedInId: state.setId,
		setBusinessNumber: state.setBusinessNumber,
		setCompanyId: state.setCompanyId,
		setCompanyName: state.setCompanyName,
		setOwnerName: state.setOwnerName,
		setAccessToken: state.setAccessToken,
		setRefreshTokenExpiredAt: state.setRefreshTokenExpiredAt,
	}));

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const response = await fetch('/api/auth/join', {
			method: 'POST',
			headers: {
				Accept: '*/*',
				'Access-Control-Allow-Origin': '*',
				'X-SEWORK-PID': '1',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(getAllState()),
		});

		const responseData = await response.json();

		const { code, message, data } = responseData.data;

		if (code === '0001') {
			setLoggedInId(data.id);
			setBusinessNumber(data.businessNumber);
			setCompanyId(data.companyId);
			setCompanyName(data.companyName);
			setOwnerName(data.ownerName);
			setAccessToken(data.accessToken);
			setRefreshTokenExpiredAt(data.refreshTokenExpiredAt);

			router.push('/company-info');
		} else {
			alert(message);
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="w-1/2 p-6 bg-white rounded-lg shadow-md"
		>
			<h2 className="mb-6 text-2xl text-center" onClick={setDummyState}>
				회원가입
			</h2>

			<LoginInfoInputGroup />
			<BusinessInfoInputGroup />
			<AddressInfoInputGroup />

			<button
				type="submit"
				className="w-full py-2 text-white bg-blue-500 rounded"
			>
				가입하기
			</button>
		</form>
	);
}
