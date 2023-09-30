import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react';
import { useState, useRef, useCallback } from 'react';

export default function Prepare1Table() {
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
			isEditable: true,
		},
	]);

	const dragIndex = useRef<number | null>(null);

	const handleDragStart = useCallback((index: number) => {
		dragIndex.current = index;
	}, []);

	const handleDrop = useCallback(
		(index: number) => {
			const from = dragIndex.current;
			if (from === null) return;
			const newRow = [...rows];
			const movedItem = newRow.splice(from, 1)[0];
			newRow.splice(index, 0, movedItem);

			setRows(newRow);
			dragIndex.current = null;
		},
		[rows],
	);

	const handleDragOver = useCallback(
		(e: React.DragEvent<HTMLTableRowElement>) => {
			e.preventDefault();
		},
		[],
	);

	const addRow = () => {
		setRows([
			...rows,
			{
				task: '',
				description: '',
				equipment: '',
				quantity: '',
				harmfulFactor: '',
				isEditable: true,
			},
		]);
	};

	const deleteRow = (index: number) => {
		const newRows = [...rows];
		newRows.splice(index, 1);
		setRows(newRows);
	};

	const autoAddRows = () => {
		const newRows = [
			{
				task: '작업1',
				description: '설명1',
				equipment: '장비1',
				quantity: '1',
				harmfulFactor: '유해인자1',
				isEditable: false,
			},
			{
				task: '작업2',
				description: '설명2',
				equipment: '장비2',
				quantity: '2',
				harmfulFactor: '유해인자2',
				isEditable: false,
			},
		];
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
							<Button onClick={addRow} color="primary">
								+
							</Button>
						</TableColumn>
					</TableHeader>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow
								key={index}
								draggable
								onDragStart={() => handleDragStart(index)}
								onDrop={() => handleDrop(index)}
								onDragOver={handleDragOver}
							>
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
										readOnly={!row.isEditable}
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
									<Button onClick={() => deleteRow(index)}>
										-
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
