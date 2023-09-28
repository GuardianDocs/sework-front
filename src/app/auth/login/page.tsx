'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
	const [formData, setFormData] = useState({
		id: 'test@email.com',
		password: 'qwer1234',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const response = await fetch(
			// 'https://api-dev.iras.kr/api/account/v1/company/login',
			'/api/auth/login',
			{
				method: 'POST',
				headers: {
					Accept: '*/*',
					'X-SEWORK-PID': '1',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			},
		);

		const data = await response.json();

		const { code, message } = data.data;

		alert(message);
	};

	return (
		<>
			<div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								이메일 주소
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={formData.id}
									onChange={handleChange}
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
									>
										비밀번호를 잊으셨나요?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={formData.password}
									onChange={handleChange}
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
				</div>
			</div>
		</>
	);
}
