import { Headline, Label, Title } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import Header from '@/components/ui/Header/Header';
import { Toaster } from '@/components/ui/Toast/Toaster';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'IRAS',
};

const FeatureItem = ({ title, description }: { title: React.ReactNode; description: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 flex-1">
      <Title size="xl" color="gray800">
        {title}
      </Title>
      <Label size="m" color="gray600">
        <div className="text-center">{description}</div>
      </Label>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-row items-center justify-center bg-blue-100 h-[720px] gap-[200px]">
          <div className="flex flex-col items-start justify-center gap-4">
            <Headline size="l" color="gray800">
              빠르고 스마트한
              <br />
              위험성 평가 솔루션
            </Headline>
            <Label size="l" color="gray800">
              아이라스는 중소기업을 위해서
              <br />
              전문가와 기술이 만난 위험성 평가 솔루션입니다.
            </Label>
            <ActionButton size="l" variant="filled">
              아이라스 체험해보기
            </ActionButton>
          </div>
          <div className="flex">
            <Image src="/hero.svg" alt="hero" width={500} height={400} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-12 p-20 bg-white">
          <div className="flex flex-col items-center justify-center gap-2">
            <Headline size="m" color="gray800">
              위험성 평가
            </Headline>
            <Title size="xl" color="gray600">
              보고서에 담을 내용을 쉽고 스마트하게 관리하세요
            </Title>
          </div>
          {/* TODO: FeatureSection 컴포넌트 */}
          <div className="flex flex-row items-start self-stretch justify-between">
            <FeatureItem
              title="위험성 평가"
              description={
                <>
                  위험성 평가에 대한
                  <br />
                  디스크립션
                </>
              }
            />
            <FeatureItem
              title="아차사고 관리"
              description={
                <>
                  위험성 평가에 대한
                  <br />
                  디스크립션
                </>
              }
            />
            <FeatureItem
              title="근로자 참여"
              description={
                <>
                  위험성 평가에 대한
                  <br />
                  디스크립션
                </>
              }
            />
          </div>
          <div className="flex flex-row items-start self-stretch justify-between">
            <FeatureItem
              title="의무안전교육 관리"
              description={
                <>
                  위험성 평가에 대한
                  <br />
                  디스크립션
                </>
              }
            />
            <FeatureItem
              title="위험 장비 및 화학물질 파악"
              description={
                <>
                  위험성 평가에 대한
                  <br />
                  디스크립션
                </>
              }
            />
            <FeatureItem
              title="AI 및 전문가 자문 기반 보고서 생성"
              description={
                <>
                  위험성 평가에 대한
                  <br />
                  디스크립션
                </>
              }
            />
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}
