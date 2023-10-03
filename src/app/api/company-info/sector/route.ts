// import { useSearchParams } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<any> {
	try {
		const { searchParams } = new URL(request.url);
		const page = searchParams.get('page');
		const size = searchParams.get('size');

		const authorizationBearer = request.headers.get('Authorization');

		// TODO: useSearchParams 사용하는 방법도 있다
		// const searchParams = useSearchParams();
		// const page = searchParams.get('page');
		// const size = searchParams.get('size');

		// TODO: 필요없을 것 같은데 확인 필요
		// const title = searchParams.get('title');

		const responseData = await fetch(
			`https://api-dev.iras.kr/api/company/v1/sector?page=${page}&size=${size}`,
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
