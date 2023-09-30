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

		// TODO: accessToken을 어떻게 받아올지 고민
		const accessToken =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjE1LCJ1c2VyX25hbWUiOiJDT01QQU5ZXzE1Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY5NjE3Njk2MywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT01QQU5ZIl0sImp0aSI6IjliMDBjMjJkLTU4OWEtNDAwMC1hODdiLTRkZWVjNjUzNGFkYiIsImNsaWVudF9pZCI6InNld29yay1hcGkifQ.3tS2fDfrlUajRXDI0o3-pkyQwyWCxTiLQeuxQ9qE1Og';

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
