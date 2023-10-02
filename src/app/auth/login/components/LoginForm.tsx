'use client';

import Link from 'next/link';
import useLoginFormStore from '../hooks/useLoginFormStore';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
	const { id, password, setId, setPassword, getAllState, setDummyState } =
		useLoginFormStore(state => ({
			id: state.id,
			password: state.password,
			setId: state.actions.setId,
			setPassword: state.actions.setPassword,
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

		const response = await fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				Accept: '*/*',
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

			router.push('/');
		} else {
			alert(message);
		}
	};

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			<div>
				<label
					htmlFor="id"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					ID (사업자등록번호 10자리)
				</label>
				<div className="mt-2">
					<input
						type="text"
						id="id"
						name="id"
						autoComplete="id"
						required
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						value={id}
						onChange={e => setId(e.target.value)}
					/>
				</div>
			</div>

			<div>
				<div className="flex items-center justify-between">
					<label
						htmlFor="password"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						비밀번호
					</label>
					<div className="text-sm">
						<Link
							href="#"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
							onClick={setDummyState}
						>
							비밀번호를 잊으셨나요?
						</Link>
					</div>
				</div>
				<div className="mt-2">
					<input
						type="password"
						id="password"
						name="password"
						autoComplete="current-password"
						required
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					로그인
				</button>
			</div>
			<div className="mt-4 text-center">
				<Link
					href="/auth/join"
					className="font-semibold text-indigo-600 hover:text-indigo-500"
				>
					회원가입
				</Link>
			</div>
		</form>
	);
}
