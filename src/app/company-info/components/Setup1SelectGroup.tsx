'use client';

import { useQuery } from 'react-query';
import SelectWithLabel from './SelectWithLabel';
import useCompanyInfoFormStore from '../hooks/useCompanyInfoFormStore';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';

export default function Setup1SelectGroup() {
	const { sectorId, setSectorId } = useCompanyInfoFormStore(state => ({
		sectorId: state.sectorId,
		setSectorId: state.setSectorId,
	}));

	const { accessToken } = useLoginInfoStore(state => ({
		accessToken: state.accessToken,
	}));

	const fetchSectors = async () => {
		const response = await fetch(
			'/api/company-info/sector?page=0&size=999',
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
		return data.data.data.sectorList;
	};

	const {
		data: sectors,
		error,
		isLoading,
	} = useQuery('sectors', fetchSectors, {
		enabled: !!accessToken, // accessToken이 있을 경우에만 API 호출
	});

	if (error) return <span>Error loading data</span>;

	return (
		<SelectWithLabel
			id="bsector"
			label="귀사의 종목은 어떻게 되나요?"
			options={
				sectors
					? sectors.map((sector: any) => ({
							label: sector.title,
							value: sector.id,
					  }))
					: []
			}
			defaultSelectedOptionId={sectorId}
			isLoading={isLoading}
			onChange={selectedOption => setSectorId(selectedOption?.value)}
		/>
	);
}
