import Image from 'next/image';
import welcome from '../../../assets/images/welcome.svg';
import evaluation from '../../../assets/images/evaluation.svg';
import imgTry from '../../../assets/images/try.svg';
import { Headline, Label, Title } from '@/components/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Complete = () => {
  return (
    <div className="flex-col-center gap-y-12">
      <div className="flex-col-center gap-y-3">
        <Image src={welcome} alt="welcome" width={72} height={72} />
        <div className="flex-col-center gap-y-1">
          <Headline size="s" color="gray800">
            환영합니다
          </Headline>
          <Label size="l" color="gray600">
            IRAS 서비스를 바로 경험하세요!
          </Label>
        </div>
      </div>
      <div className="flex-col-center gap-y-4 w-[792px]">
        <Link
          href="/dashboard/newReport"
          className={cn(
            'border w-full p-8 rounded-xl bg-blue-500 flex gap-x-6 items-center transition-all ease-out duration-100 text-start',
            'hover:-translate-y-1 hover:shadow-[0_8px_24px_0px_rgba(0,0,0,0.3)]'
          )}
        >
          <Image src={evaluation} alt="welcome" width={72} height={72} />
          <div className="flex-1 self-stretch flex flex-col gap-y-1 justify-center">
            <Title size="xl" color="white">
              평가를 생성하세요!
            </Title>
            <Label size="s" color="blue200">
              IRAS의 스마트한 위험성 평가를 실시합니다.
            </Label>
          </div>
          <div className="py-[6px] px-[10px] border border-blue-200 rounded-small">
            <Label size="xs" color="white">
              평가 생성하기
            </Label>
          </div>
        </Link>
        <button
          className={cn(
            'border w-full p-8 rounded-xl bg-blue-800 flex gap-x-6 items-center transition-all ease-out duration-100 text-start',
            'hover:-translate-y-1 hover:shadow-[0_8px_24px_0px_rgba(0,0,0,0.3)]'
          )}
        >
          <Image src={imgTry} alt="welcome" width={72} height={72} />
          <div className="flex-1 self-stretch flex flex-col gap-y-1 justify-center">
            <Title size="xl" color="white">
              IRAS를 체험해보세요!
            </Title>
            <Label size="s" color="blue200">
              Demo 데이터를 활용해 IRAS의 기능들을 체험해보세요.
            </Label>
          </div>
          <div className="py-[6px] px-[10px] border border-blue-200 rounded-small">
            <Label size="xs" color="white">
              체험하러 바로가기
            </Label>
          </div>
        </button>
      </div>
    </div>
  );
};
