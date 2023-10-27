'use client';

import { Button } from '@nextui-org/react';
import TopDescription from '../../../components/TopDescription';
import Sidebar from '../../../components/Sidebar';
import Prepare1Table from '../../../components/Prepare1Table';
import { useMutation, useQuery } from 'react-query';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';

interface PreparePageProps {
	versionId: string;
}

export default function PreparePage({ versionId }: PreparePageProps) {
	const { accessToken } = useLoginInfoStore(state => ({
		accessToken: state.accessToken,
	}));

	const fetchPrepareData = async () => {
		const response = await fetch(
			`/api/assessment/prepare?versionId=${versionId}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();

		return data.data.data;
	};

	const addPrepareData = async (param: any) => {
		const response = await fetch(
			`/api/assessment/prepare?versionId=${versionId}`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(param),
			},
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();

		return data.data.data;
	};

	const editPrepareData = async (companyProcessId: number, param: any) => {
		const response = await fetch(
			`/api/assessment/prepare?versionId=${versionId}&companyProcessId=${companyProcessId}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(param),
			},
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();

		return data.data.data;
	};

	const deletePrepareData = async (companyProcessId: number) => {
		const response = await fetch(
			`/api/assessment/prepare?versionId=${versionId}&companyProcessId=${companyProcessId}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return;
	};

	const editPrepareDataViewOrder = async (
		companyProcessId: number,
		toViewOrder: number,
	) => {
		const response = await fetch(
			`/api/assessment/prepare/view-order?versionId=${versionId}&companyProcessId=${companyProcessId}&toViewOrder=${toViewOrder}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();

		return data.data.data;
	};

	const { data, error, isLoading } = useQuery(
		'prepareData',
		fetchPrepareData,
		{
			enabled: !!accessToken, // accessToken이 있을 경우에만 API 호출
		},
	);

	const mutationAdd = useMutation(addPrepareData);
	const mutationEdit = useMutation(editPrepareData as any);
	const mutationEditViewOrder = useMutation(editPrepareDataViewOrder as any);
	const mutationDelete = useMutation(deletePrepareData);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <span>Error loading data</span>;

	return (
		<>
			<TopDescription description="1. 사전준비 : 위험성평가를 시작하기 위해 평가대상 표준공정을 선택 또는 업체의 공정을 직접 입력해주세요." />
			<div className="flex flex-row">
				<Sidebar />
				{/* 우측 메인 */}
				<div className="flex flex-col">
					{/* 업종 선택 */}
					<div className="flex space-x-4">
						<div className="flex-1">
							<p className="mb-2">업종</p>
							<p>{data?.sector?.title}</p>
						</div>
					</div>

					{/* 세부작업 추가 */}
					<Prepare1Table
						dataList={data?.processList}
						addRow={mutationAdd.mutate}
						editRow={mutationEdit.mutate}
						deleteRow={mutationDelete.mutate}
					/>
				</div>
			</div>
		</>
	);
}
