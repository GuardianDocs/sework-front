'use client';

import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import useCompanyInfoFormStore from '../hooks/useCompanyInfoFormStore';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';

export default function Setup3Table() {
	const { getSectorId, processList, setProcessList } =
		useCompanyInfoFormStore(state => ({
			getSectorId: state.getSectorId,
			processList: state.processList,
			setProcessList: state.setProcessList,
		}));

	const { accessToken } = useLoginInfoStore(state => ({
		accessToken: state.accessToken,
	}));

	const fetchProcessList = async () => {
		const response = await fetch(
			`/api/company-info/process?sectorId=${getSectorId()}`,
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
		return data.data.data.processList;
	};

	const {
		data: fetchedProcessList,
		error,
		isLoading,
	} = useQuery('processList', fetchProcessList);

	useEffect(() => {
		if (fetchedProcessList) {
			setProcessList(
				fetchedProcessList.map((item: any) => ({
					...item,
					ogId: item.id,
				})),
			);
		}
	}, [fetchedProcessList, setProcessList]);

	if (error) return <span>Error loading data</span>;
	if (isLoading) return <span>Loading...</span>;

	const handleRemoveRow = (index: number) => {
		// index 번째 row를 삭제
		const newProcessList = [...processList];
		newProcessList.splice(index, 1);
		setProcessList(newProcessList);
	};

	const handleAddRow = () => {
		const newId = null;

		setProcessList([
			...processList,
			{ id: newId, ogId: newId, title: '', description: '' },
		]);
	};

	const handleChange = (index: number, field: string, value: string) => {
		const newProcessList = [...processList];
		newProcessList[index][field] = value;

		if (field === 'description') {
			newProcessList[index].id = null;
		}
		if (field === 'title') {
			newProcessList[index].id = null;
			newProcessList[index].ogId = null;
		}

		setProcessList(newProcessList);
	};

	return (
		<Table aria-label="공정 추가">
			<TableHeader>
				<TableColumn>공정명</TableColumn>
				<TableColumn>공정설명</TableColumn>
				<TableColumn>
					<Button color="primary" onClick={handleAddRow}>
						+
					</Button>
				</TableColumn>
			</TableHeader>
			<TableBody>
				{processList.map((process: any, index: any) => (
					<TableRow key={index}>
						<TableCell>
							<input
								type="text"
								id={`title-${index}`}
								value={process.title}
								onChange={e =>
									handleChange(index, 'title', e.target.value)
								}
							/>
						</TableCell>
						<TableCell>
							<input
								type="text"
								id={`description-${index}`}
								value={process.description}
								onChange={e =>
									handleChange(
										index,
										'description',
										e.target.value,
									)
								}
							/>
						</TableCell>
						<TableCell>
							<Button
								color="danger"
								onClick={() => handleRemoveRow(index)}
							>
								-
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
