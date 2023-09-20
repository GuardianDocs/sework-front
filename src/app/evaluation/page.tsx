'use client';

import {
	Button,
	Select,
	SelectItem,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react';
import styles from './page.module.css';

import { btype1, btype2 } from './dummyData';

export default function Page() {
	const menuList = [
		{
			number: 1,
			title: '사전준비',
		},
		{
			number: 2,
			title: '유해 위험요인 파악',
		},
		{
			number: 3,
			title: '위험성 수준판단',
		},
		{
			number: 4,
			title: '감소대책 수립',
		},
		{
			number: 5,
			title: '감도대책 실행',
		},
	];

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
							className="flex flex-col items-center p-2 text-white border rounded-lg bg-slate-500 border-slate-500"
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
						<Select
							items={btype1}
							label="업종 선택"
							placeholder="업종을 선택해주세요."
							className="max-w"
						>
							{item => (
								<SelectItem key={item.value}>
									{item.label}
								</SelectItem>
							)}
						</Select>
						<Select
							items={btype2}
							label="공정 선택"
							placeholder="공정을 선택해주세요."
							className="max-w"
						>
							{item => (
								<SelectItem key={item.value}>
									{item.label}
								</SelectItem>
							)}
						</Select>
					</div>
					{/* 세부작업 추가 */}
					<div className="flex flex-col">
						<div className="flex items-center gap-2 align-center">
							<span>세부작업 추가</span>
							<Button color="primary">자동 추가</Button>
						</div>
						<div>
							<Table aria-label="세부작업 추가">
								<TableHeader>
									<TableColumn>세부작업</TableColumn>
									<TableColumn>세부작업 설명</TableColumn>
									<TableColumn>설비</TableColumn>
									<TableColumn>유해인자</TableColumn>
								</TableHeader>
								<TableBody>
									<TableRow key="1">
										<TableCell>식재료 입고/검수</TableCell>
										<TableCell>
											식자재 운반 후 이상 유뮤를 확인
										</TableCell>
										<TableCell>운반대차</TableCell>
										<TableCell>-</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
