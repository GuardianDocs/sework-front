'use client';

import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { useState, useRef, useCallback } from 'react';

interface DataItem {
  amount: number | undefined;
  description: string;
  equipment: string;
  id: number | undefined;
  material: string;
  processId: number | undefined;
  processOgId: number | undefined;
  title: string;
  viewOrder: number;
}

interface TableProps {
  dataList: DataItem[];
  addRow?: (param: any) => void;
  deleteRow?: (companyProcessId: number) => void;
  editRow?: (companyProcessId: any, param: any) => void;
  editViewOrder?: (companyProcessId: number, toViewOrder: number) => void;
}

export default function Prepare1Table({ dataList = [], addRow, deleteRow, editRow, editViewOrder }: TableProps) {
  const [rows, setRows] = useState<DataItem[]>([...dataList]);

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
    [rows]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
  }, []);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        amount: undefined,
        description: '',
        equipment: '',
        id: undefined,
        material: '',
        processId: 0,
        processOgId: 0,
        title: '',
        viewOrder: rows.length,
      },
    ]);
  };

  const handleDeleteRow = (companyProcessId: number) => {
    deleteRow && deleteRow(companyProcessId);

    const newRows = rows.filter(row => row.id !== companyProcessId);
    setRows(newRows);
  };

  const handleSaveRow = (index: number) => {
    const row = rows[index];
    addRow && addRow(row);
  };

  // 흐음 뭐가 문제일까
  const handleEditRow = (companyProcessId: number) => {
    const row = rows.find(row => row.id === companyProcessId);
    console.log(row);
    editRow && editRow(companyProcessId, row);
  };

  const handleInputChange = <K extends keyof DataItem>(index: number, field: K, value: DataItem[K]) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRecommendRow = () => {
    setRows([
      ...rows,
      {
        amount: 0,
        description: '',
        equipment: '',
        id: undefined,
        material: '',
        processId: undefined,
        processOgId: undefined,
        title: '',
        viewOrder: rows.length + 1,
      },
    ]);
  };

  return (
    <div>
      <ActionButton variant="filled" size="l" onClick={addRecommendRow}>
        IRAS 추천
      </ActionButton>
      <Table aria-label="테이블">
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Equipment</TableColumn>
          <TableColumn>Material</TableColumn>
          <TableColumn>Amount</TableColumn>
          <TableColumn>
            <ActionButton onClick={handleAddRow} variant="tonal-blue" size="s">
              +
            </ActionButton>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDrop={() => handleDrop(index)}
              onDragOver={handleDragOver}
            >
              <TableCell>
                <input
                  type="text"
                  value={row.title}
                  onChange={e => handleInputChange(index, 'title', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.description}
                  onChange={e => handleInputChange(index, 'description', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.equipment}
                  onChange={e => handleInputChange(index, 'equipment', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.material || ''}
                  onChange={e => handleInputChange(index, 'material', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="number"
                  value={row.amount || 0}
                  onChange={e => handleInputChange(index, 'amount', e.target.value as any)}
                />
              </TableCell>
              <TableCell>
                <ActionButton variant="tonal-red" size="s" onClick={() => handleDeleteRow(row.id as any)}>
                  -
                </ActionButton>

                {row.id && (
                  <ActionButton variant="tonal-gray" size="s" onClick={() => handleEditRow(row.id as any)}>
                    수정
                  </ActionButton>
                )}
                {!row.id && (
                  <ActionButton variant="tonal-blue" size="s" onClick={() => handleSaveRow(index)}>
                    저장
                  </ActionButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
