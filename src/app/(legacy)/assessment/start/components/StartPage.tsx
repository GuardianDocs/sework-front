'use client';

import { useMutation } from 'react-query';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function StartPage() {
	const router = useRouter();

	const { accessToken } = useLoginInfoStore(state => ({
		accessToken: state.accessToken,
	}));

	const fetchVersion = async () => {
		const response = await fetch('/api/assessment/start', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data.data.data.versionId;
	};

	const mutation = useMutation(fetchVersion, {
		onSuccess: data => {
			const newUrl = `/assessment/prepare/${data}`;
			router.push(newUrl);
		},
	});

	return (
		<div className="flex flex-row h-full space-x-4">
			<Button onClick={() => mutation.mutate()}>설문 시작하기</Button>
		</div>
	);
}
