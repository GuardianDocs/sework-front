import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
	title: 'IRAS : Intelligent Risk Assurance System',
};

export default function Home() {
	return (
		<>
			<HeroSection
				backgroundImage="/hero1.jpg"
				title="Intelligent Risk Assurance System"
				subtitle="당신의 사업장의 위험 평가를 도와드립니다."
			/>
			<Features
				features={[
					{
						title: '위험성 평가 보고서 작성 지원',
						description:
							'위험성 평가 보고서를 쉽게 작성할 수 있도록 템플릿과 가이드라인을 제공합니다.',
					},
					{
						title: '설문조사 기능',
						description:
							'설문조사를 통해 사용자 의견을 신속하게 수집하고 분석할 수 있는 기능입니다.',
					},
				]}
			/>
			<HeroSection
				backgroundImage="/hero1.jpg"
				title="안전한 작업환경 구축 서비스"
				subtitle="당신의 업무 환경을 보호하고 개선합니다."
			/>
			<CTASection />
		</>
	);
}
