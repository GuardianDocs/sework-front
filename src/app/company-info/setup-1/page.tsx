import type { Metadata } from 'next';
import TitleAndDescription from '../components/TitleAndDescription';
import NextButton from '../components/NextButton';
import Setup1SelectGroup from '../components/Setup1SelectGroup';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '우리회사 진단하기 : 1단계',
};

export default function CompanyInfoPage() {
	return (
		<div className="flex flex-col items-start p-10 space-y-6">
			<TitleAndDescription
				title="귀하의 회사에 대해서 알려주세요"
				description="다음 설문을 통해 보다 정확한 보고서를 출력해드릴 수 있습니다."
			/>
			<Setup1SelectGroup />
			<Link href="/company-info/setup-2">
				<NextButton />
			</Link>
		</div>
	);
}
