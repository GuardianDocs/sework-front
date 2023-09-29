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
import { useState } from 'react';

export default function Page() {
	const menuList = [
		{
			number: 1,
			title: '사전준비',
			selected: true,
		},
		{
			number: 2,
			title: '유해 위험요인 파악',
			selected: false,
		},
		{
			number: 3,
			title: '위험성 수준판단',
			selected: false,
		},
	];

	interface Row {
		task: string;
		description: string;
		equipment: string;
		quantity: string;
		harmfulFactor: string;
		isEditable?: boolean;
	}

	const [rows, setRows] = useState<Row[]>([
		{
			task: '',
			description: '',
			equipment: '',
			quantity: '',
			harmfulFactor: '',
			isEditable: true, // 일반적으로 행을 추가할 때는 수정 가능하도록 설정
		},
	]);

	const exampleRows = [
		{
			task: '작업1',
			description: '설명1',
			equipment: '장비1',
			quantity: '1',
			harmfulFactor: '유해인자1',
		},
		{
			task: '작업2',
			description: '설명2',
			equipment: '장비2',
			quantity: '2',
			harmfulFactor: '유해인자2',
		},
	];

	const addRow = () => {
		const newRow = {
			task: '',
			description: '',
			equipment: '',
			quantity: '',
			harmfulFactor: '',
			isEditable: true, // 일반적으로 행을 추가할 때는 수정 가능하도록 설정
		};
		setRows([...rows, newRow]);
	};

	const deleteRow = (index: number) => {
		const newRows = [...rows];
		newRows.splice(index, 1);
		setRows(newRows);
	};

	const autoAddRows = () => {
		const newRows = exampleRows.map(row => ({ ...row, isEditable: false }));
		setRows([...rows, ...newRows]);
	};

	const handleInputChange = <K extends keyof Row>(
		index: number,
		field: K,
		value: Row[K],
	) => {
		const newRows = [...rows];
		newRows[index][field] = value;
		setRows(newRows);
	};

	return (
		<>
			<span>
				1. 사전준비 : 위험성평가를 시작하기 위해 평가대상 표준공정을
				선택 또는 업체의 공정을 직접 입력해주세요.
			</span>
			<div className="flex flex-row h-full space-x-4">
				{/* 좌측 메뉴 */}
				<div className="flex flex-col gap-2">
					{menuList.map((item, index) => (
						<div
							key={index}
							className={`flex flex-col items-center p-2 text-white border rounded-lg bg-slate-500 border-slate-500 ${
								item.selected && 'bg-slate-700'
							}`}
						>
							<span>{item.number}</span>
							<span className="text-xs whitespace-nowrap">
								{item.title}
							</span>
						</div>
					))}
				</div>
				{/* 우측 메인 */}
				<div className="w-full h-full">
					{/* 업종 선택 */}
					<div className="flex space-x-4">
						<div className="flex-1">
							<p className="mb-2">업종선택</p>
							{/* 스타일링 : https://stackoverflow.com/questions/68137362/using-tailwind-forms-plugin-with-react-select */}
							<Select
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
								options={btype2}
								defaultValue={btype1[2]}
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
					<div className="flex flex-col">
						<div className="flex items-center gap-2 align-center">
							<span>세부작업</span>
							<Button onClick={autoAddRows} color="primary">
								자동 추가
							</Button>
						</div>
						<div>
							<Table aria-label="세부작업 추가">
								<TableHeader>
									<TableColumn>세부작업</TableColumn>
									<TableColumn>세부작업 설명</TableColumn>
									<TableColumn>설비</TableColumn>
									<TableColumn>수량</TableColumn>
									<TableColumn>유해인자</TableColumn>
									<TableColumn>
										<Button
											onClick={addRow}
											color="primary"
										>
											+
										</Button>
									</TableColumn>
								</TableHeader>
								<TableBody>
									{rows.map((row, index) => (
										<TableRow key={index}>
											<TableCell>
												<input
													type="text"
													value={row.task}
													onChange={e =>
														row.isEditable &&
														handleInputChange(
															index,
															'task',
															e.target.value,
														)
													}
													readOnly={!row.isEditable} // isEditable이 false이면 읽기 전용
												/>
											</TableCell>
											<TableCell>
												<input
													type="text"
													value={row.description}
													onChange={e =>
														handleInputChange(
															index,
															'description',
															e.target.value,
														)
													}
												/>
											</TableCell>
											<TableCell>
												<input
													type="text"
													value={row.equipment}
													onChange={e =>
														handleInputChange(
															index,
															'equipment',
															e.target.value,
														)
													}
												/>
											</TableCell>
											<TableCell>
												<input
													type="number"
													value={row.quantity}
													onChange={e =>
														handleInputChange(
															index,
															'quantity',
															e.target.value,
														)
													}
												/>
											</TableCell>
											<TableCell>
												<input
													type="text"
													value={row.harmfulFactor}
													onChange={e =>
														handleInputChange(
															index,
															'harmfulFactor',
															e.target.value,
														)
													}
												/>
											</TableCell>
											<TableCell>
												<Button
													onClick={() =>
														deleteRow(index)
													}
												>
													-
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>

					{/* 저장 버튼 */}
					<Button color="primary">저장</Button>
				</div>
			</div>
		</>
	);
}
