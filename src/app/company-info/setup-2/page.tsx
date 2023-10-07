import type { Metadata } from 'next';
import Setup2Page from './components/Setup2Page';

export const metadata: Metadata = {
	title: '우리회사 진단하기 : 2단계',
};

export default function CompanyInfoPage() {
	return <Setup2Page />;
}
