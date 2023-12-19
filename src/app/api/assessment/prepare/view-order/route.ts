import { NextResponse } from 'next/server';

export async function PUT(request: Request): Promise<any> {
	try {
		const authorizationBearer = request.headers.get('Authorization');

		const url = new URL(request.url);
		const versionId = url.searchParams.get('versionId');
		const companyProcessId = url.searchParams.get('companyProcessId');
		const toViewOrder = url.searchParams.get('toViewOrder');

		const body = await request.json();

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/assessment/${versionId}/process/${companyProcessId}/order?toViewOrder=${toViewOrder}`,
			{
				method: 'PUT',
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					Authorization: `${authorizationBearer}`,
				},
				body: JSON.stringify(body),
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
