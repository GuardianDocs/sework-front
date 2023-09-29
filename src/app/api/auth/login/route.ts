import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const requestBody = await request.json();

		const responseData = await fetch(
			'https://api-dev.iras.kr/api/account/v1/company/login',
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

		const tokens = responseData.headers.getSetCookie();

		const data = await responseData.json();

		if (!responseData.ok) {
			return NextResponse.error();
		}

		const response = NextResponse.json({ data });

		if (tokens && Array.isArray(tokens)) {
			tokens.forEach(token => {
				response.headers.append('Set-Cookie', token);
			});
		}

		return response;
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
