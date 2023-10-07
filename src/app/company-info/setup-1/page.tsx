import type { Metadata } from 'next';
import Setup1Page from './components/Setup1Page';

export const metadata: Metadata = {
	title: '우리회사 진단하기 : 1단계',
};

export default function CompanyInfoPage() {
	return <Setup1Page />;
}
