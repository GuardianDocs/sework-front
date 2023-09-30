import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const page = searchParams.get('page');
		const size = searchParams.get('size');
		// TODO: 필요없을 것 같은데 확인 필요
		// const title = searchParams.get('title');

		// TODO: accessToken을 어떻게 받아올지 고민
		const accessToken =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjE1LCJ1c2VyX25hbWUiOiJDT01QQU5ZXzE1Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY5NjE3Njk2MywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT01QQU5ZIl0sImp0aSI6IjliMDBjMjJkLTU4OWEtNDAwMC1hODdiLTRkZWVjNjUzNGFkYiIsImNsaWVudF9pZCI6InNld29yay1hcGkifQ.3tS2fDfrlUajRXDI0o3-pkyQwyWCxTiLQeuxQ9qE1Og';

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/sector?page=${page}&size=${size}`,
			{
				method: 'GET',
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
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
	}
}