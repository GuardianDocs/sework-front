import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const requestBody = await request.json();

		const authorizationBearer = request.headers.get('Authorization');

		const responseData = await fetch(
			'https://api-dev.iras.kr/api/company/v1/info/basic',
			{
				method: 'POST',
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					Authorization: `${authorizationBearer}`,
				},
				body: JSON.stringify(requestBody),
			},
		);

		const data = await responseData.json();

		if (!responseData.ok) {
			return NextResponse.error();
		}

		const response = NextResponse.json({ data });

		return response;
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		);
	}
}
