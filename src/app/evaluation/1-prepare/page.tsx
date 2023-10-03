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
import Select from 'react-select';
import styles from './page.module.css';

import { btype1, btype2 } from './dummyData';
import TopDescription from '../components/TopDescription';
import Sidebar from '../components/Sidebar';
import Prepare1Table from '../components/Prepare1Table';

export default function Page() {
	return (
		<>
			<TopDescription description="1. 사전준비 : 위험성평가를 시작하기 위해 평가대상 표준공정을 선택 또는 업체의 공정을 직접 입력해주세요." />
			<div className="flex flex-row h-full space-x-4">
				<Sidebar />
				{/* 우측 메인 */}
				<div className="w-full h-full">
					{/* 업종 선택 */}
					<div className="flex space-x-4">
						<div className="flex-1">
							<p className="mb-2">업종선택</p>
							{/* 스타일링 : https://stackoverflow.com/questions/68137362/using-tailwind-forms-plugin-with-react-select */}
							<Select
								instanceId={'btype1'}
								options={btype1}
								defaultValue={btype1[0]}
								isSearchable={true}
								name="btype1"
								className="flex-1"
								styles={{
									input: base => ({
										...base,
										'input:focus': {
											boxShadow: 'none',
										},
									}),
									container: base => ({
										...base,
										flex: 1,
									}),
								}}
							/>
						</div>
						<div className="flex-1">
							<p className="mb-2">공정선택</p>
							<Select
								instanceId={'btype2'}
								options={btype2}
								defaultValue={btype2[0]}
								isSearchable={true}
								name="btype1"
								className="flex-1"
								styles={{
									input: base => ({
										...base,
										'input:focus': {
											boxShadow: 'none',
										},
									}),
									container: base => ({
										...base,
										flex: 1,
									}),
								}}
							/>
						</div>
					</div>

					{/* 세부작업 추가 */}
					<Prepare1Table />

					{/* 저장 버튼 */}
					<Button color="primary">저장</Button>
				</div>
			</div>
		</>
	);
}
