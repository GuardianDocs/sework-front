import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const requestBody = await request.json();
		const accessToken =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjE1LCJ1c2VyX25hbWUiOiJDT01QQU5ZXzE1Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY5NjE3Njk2MywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT01QQU5ZIl0sImp0aSI6IjliMDBjMjJkLTU4OWEtNDAwMC1hODdiLTRkZWVjNjUzNGFkYiIsImNsaWVudF9pZCI6InNld29yay1hcGkifQ.3tS2fDfrlUajRXDI0o3-pkyQwyWCxTiLQeuxQ9qE1Og';

		const responseData = await fetch(
			'https://api-dev.iras.kr/api/company/v1/info/basic',
			{
				method: 'POST',
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
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
		return NextResponse.error();
	}
}
