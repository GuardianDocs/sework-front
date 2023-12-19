import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<any> {
	try {
		const authorizationBearer = request.headers.get('Authorization');

		const url = new URL(request.url);
		const versionId = url.searchParams.get('versionId');

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/assessment/${versionId}/process/recommend`,
			{
				method: 'GET',
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					Authorization: `${authorizationBearer}`,
				},
			},
		);

		const data = await responseData.json();

		if (!responseData.ok) {
			return NextResponse.json(
				{ error: 'Internal Server Error' },
				{ status: 500 },
			);
		}

		return NextResponse.json({ data });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		);
	}
}
