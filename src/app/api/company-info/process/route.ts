import { NextResponse } from 'next/server';
// import { useSearchParams } from 'next/navigation';

export async function GET(request: Request): Promise<any> {
	try {
		const { searchParams } = new URL(request.url);
		const sectorId = searchParams.get('sectorId');

		const authorizationBearer = request.headers.get('Authorization');

		// TODO: useSearchParams 사용하는 방법도 있다
		// const searchParams = useSearchParams();
		// const sectorId = searchParams.get('sectorId');

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/process?sectorId=${sectorId}`,
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
