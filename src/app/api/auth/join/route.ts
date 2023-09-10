import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const requestBody = await request.json();

		const response = await fetch(
			'https://api-dev.iras.kr/api/account/v1/company/register',
			{
				method: 'POST',
				headers: {
					Accept: '*/*',
					'X-SEWORK-PID': '1',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestBody),
			},
		);

		console.log('response', response);
		console.log('response.json()', await response.json());

		return NextResponse.json(response);
	} catch (error) {
		console.error(error);
	}
}
