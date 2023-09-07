import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		// TODO : 추후에 페이지에서 값을 넘겨받아서 처리하도록 수정
		// const formData = await request.json();

		const requestBody = {
			baddress: '서울특별시 송파구',
			bsector: '음식업',
			btype: '한식 및 케이터링',
			businessName: '더베스트 케이터링',
			businessNumber: '8973400618',
			companyName: '더베스트 케이터링',
			corpNumber: 'string',
			detailAddress: '지하1층 104호',
			email: 'test@example.com',
			employeeNumber: 7,
			ownerName: '고금주',
			ownerName2: '',
			password: 'asd123',
			postNumber: '05561',
			roadAddress: '백제고분로 75',
			startDate: '2019-09-05T11:32:20.579Z',
		};

		const response = await fetch('http://localhost:3000/api/auth/join', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		});

		return NextResponse.json(response);
	} catch (error) {
		console.error(error);
	}
}
