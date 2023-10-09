import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<any> {
	try {
		const authorizationBearer = request.headers.get('Authorization');

		const url = new URL(request.url);
		const versionId = url.searchParams.get('versionId');

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/assessment/${versionId}/process`,
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

export async function POST(request: Request): Promise<any> {
	try {
		const authorizationBearer = request.headers.get('Authorization');

		const url = new URL(request.url);
		const versionId = url.searchParams.get('versionId');

		const body = await request.json();

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/assessment/${versionId}/process`,
			{
				method: 'POST',
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

export async function DELETE(request: Request): Promise<any> {
	try {
		const authorizationBearer = request.headers.get('Authorization');

		const url = new URL(request.url);
		const versionId = url.searchParams.get('versionId');
		const companyProcessId = url.searchParams.get('companyProcessId');

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/assessment/${versionId}/process/${companyProcessId}`,
			{
				method: 'DELETE',
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

export async function PUT(request: Request): Promise<any> {
	try {
		const authorizationBearer = request.headers.get('Authorization');

		const url = new URL(request.url);
		const versionId = url.searchParams.get('versionId');
		const companyProcessId = url.searchParams.get('companyProcessId');

		const body = await request.json();

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/assessment/${versionId}/process/${companyProcessId}`,
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

		console.log(data);

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
