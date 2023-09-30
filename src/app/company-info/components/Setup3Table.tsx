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
import { useQuery } from 'react-query';
import useCompanyInfoFormStore from '../hooks/useCompanyInfoFormStore';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';

export default function Setup3Table() {
	const { getSectorId, processList, setProcessList, getAllState } =
		useCompanyInfoFormStore(state => ({
			getSectorId: state.actions.getSectorId,
			processList: state.processList,
			setProcessList: state.actions.setProcessList,
			getAllState: state.actions.getAllState,
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
		data: processListData,
		error,
		isLoading,
		refetch,
	} = useQuery('processList', fetchProcessList, {
		enabled: false,
	});

	const handleButtonClick = async () => {
		try {
			const { data } = await refetch();

			if (data) {
				const formattedData = data.map((item: any) => ({
					...item,
					ogId: item.id,
				}));
				setProcessList(formattedData);
			}
		} catch (error) {
			console.error('Error fetching process list:', error);
		}
	};

	if (error) return <span>Error loading data</span>;

	return (
		<>
			<Button color="secondary" onClick={handleButtonClick}>
				IRAS 추천
			</Button>
			<Table aria-label="세부작업 추가">
				<TableHeader>
					<TableColumn>sectorName</TableColumn>
					<TableColumn>processTitle</TableColumn>
					<TableColumn>processDescription</TableColumn>
					<TableColumn>
						<Button color="primary">+</Button>
					</TableColumn>
				</TableHeader>
				<TableBody>
					{processListData && !isLoading
						? processListData.map((process: any, index: any) => (
								<TableRow key={index}>
									<TableCell>sectorName</TableCell>
									<TableCell>{process.title}</TableCell>
									<TableCell>{process.description}</TableCell>
									<TableCell>
										<Button color="danger">-</Button>
									</TableCell>
								</TableRow>
						  ))
						: null}
				</TableBody>
			</Table>
		</>
	);
}
