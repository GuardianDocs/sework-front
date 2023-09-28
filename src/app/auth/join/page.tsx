'use client';

import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const RegisterPage: React.FC = () => {
	const [formData, setFormData] = useState({
		bsector: '음식업',
		btype: '한식',
		businessName: '더베스트 케이터링',
		businessNumber: '8973400618',
		corpNumber: '',
		companyName: '테스트',
		email: 'test@email.com',
		employeeNumber: 10,
		ownerName: '고금주',
		ownerName2: '',
		password: 'qwer1234',
		postNumber: '',
		baddress: '',
		detailAddress: '',
		startDate: '2019-09-05T12:24:38.157Z',
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
			// TODO: CORS 문제 해결
			// 'https://api-dev.iras.kr/api/account/v1/company/register',
			'/api/auth/join',
			{
				method: 'POST',
				headers: {
					Accept: '*/*',
					'Access-Control-Allow-Origin': '*',
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

	const openDaumPostCodePopup = useDaumPostcodePopup();

	const handleAddressComplete = (data: any) => {
		const { zonecode, roadAddress } = data;

		setFormData({
			...formData,
			postNumber: zonecode,
			baddress: roadAddress,
		});
	};

	const handleAddressClick = () => {
		openDaumPostCodePopup({ onComplete: handleAddressComplete });
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<form
				onSubmit={handleSubmit}
				className="w-1/2 p-6 bg-white rounded-lg shadow-md"
			>
				<h2 className="mb-6 text-2xl text-center">회원가입</h2>

				<h3 className="mb-4 text-lg">로그인 정보</h3>

				<div className="mb-4">
					<label className="block mb-2" htmlFor="email">
						이메일
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="w-full p-2 border rounded"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2" htmlFor="password">
						비밀번호
					</label>
					<input
						type="password"
						name="password"
						id="password"
						className="w-full p-2 border rounded"
						value={formData.password}
						onChange={handleChange}
					/>
				</div>

				{/* <div className="mb-4">
					<label className="block mb-2" htmlFor="passwordConfirm">
						비밀번호 확인
					</label>
					<input
						type="password"
						name="passwordConfirm"
						id="passwordConfirm"
						className="w-full p-2 border rounded"
						value={formData.passwordConfirm}
						onChange={handleChange}
					/>
				</div> */}

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
						value={formData.companyName}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2" htmlFor="businessName">
						사업장명 혹은 상호
					</label>
					<input
						type="text"
						name="businessName"
						id="businessName"
						className="w-full p-2 border rounded"
						value={formData.businessName}
						onChange={handleChange}
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
						value={formData.businessNumber}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2" htmlFor="corpNumber">
						법인 등록 번호
					</label>
					<input
						type="text"
						name="corpNumber"
						id="corpNumber"
						className="w-full p-2 border rounded"
						value={formData.corpNumber}
						onChange={handleChange}
					/>
				</div>

				<div className="flex mb-4">
					<div className="w-1/2 mr-2">
						<label className="block mb-2" htmlFor="bsector">
							주요 사업 업태 명칭
						</label>
						<input
							type="text"
							name="bsector"
							id="bsector"
							className="w-full p-2 border rounded"
							value={formData.bsector}
							onChange={handleChange}
						/>
					</div>
					<div className="w-1/2 ml-2">
						<label className="block mb-2" htmlFor="btype">
							주요 사업 종목 명칭
						</label>
						<input
							type="text"
							name="btype"
							id="btype"
							className="w-full p-2 border rounded"
							value={formData.btype}
							onChange={handleChange}
						/>
					</div>
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
						value={formData.ownerName}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2" htmlFor="ownerName2">
						공동 대표자 성명 (있을 경우)
					</label>
					<input
						type="text"
						name="ownerName2"
						id="ownerName2"
						className="w-full p-2 border rounded"
						value={formData.ownerName2}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2" htmlFor="startDate">
						개업 일자
					</label>
					<input
						type="datetime-local"
						name="startDate"
						id="startDate"
						className="w-full p-2 border rounded"
						value={formData.startDate}
						onChange={handleChange}
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
						value={formData.employeeNumber}
						onChange={handleChange}
					/>
				</div>

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
							value={formData.postNumber}
							onChange={handleChange}
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
						value={formData.baddress}
						onChange={handleChange}
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
						value={formData.detailAddress}
						onChange={handleChange}
					/>
				</div>

				<button
					type="submit"
					className="w-full py-2 text-white bg-blue-500 rounded"
				>
					가입하기
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
