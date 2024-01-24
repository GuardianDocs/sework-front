'use client';

import { Body, Headline, Label, Title } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import Icon from '@/components/ui/Icon/Icon';
import TextField from '@/components/ui/TextField/TextField';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/Dialog/Dialog';
import style from './page.module.scss';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup/RadioGroup';
import { Label as HtmlLabel } from '@/components/ui/Label/Label';
import { useRouter } from 'next/navigation';
import RadioGroup from '@/app/(legacy)/company-info/setup-2/components/RadioGroup';

export default function Prepare2Page() {
  const router = useRouter();

  const handlePrevPageClick = () => {
    router.push('/assessment/step1');
  };
  return (
    <div className="flex pt-12 pb-[60px] flex-col items-center gap-12">
      {/* 타이틀 */}
      <div className="flex flex-col items-center gap-4">
        {/* 1,2 */}
        <div className="inline-flex items-start gap-[8px] relative">
          <div className="relative w-[30px] h-[28px]">
            <div className="bg-gray-100 relative w-[28px] h-[28px] rounded-[14px]">
              <div className="absolute top-[4px] left-[10px] font-label-s font-[number:var(--label-s-font-weight)] text-gray-400 text-[length:var(--label-s-font-size)] text-center tracking-[var(--label-s-letter-spacing)] leading-[var(--label-s-line-height)] whitespace-nowrap [font-style:var(--label-s-font-style)]">
                1
              </div>
            </div>
          </div>
          <div className="mr-[-2.00px] relative w-[30px] h-[28px]">
            <div className="bg-blue-500 relative w-[28px] h-[28px] rounded-[14px]">
              <div className="absolute top-[4px] left-[10px] font-label-s font-[number:var(--label-s-font-weight)] text-white text-[length:var(--label-s-font-size)] text-center tracking-[var(--label-s-letter-spacing)] leading-[var(--label-s-line-height)] whitespace-nowrap [font-style:var(--label-s-font-style)]">
                2
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Headline color="gray800" size="s">
            귀하의 회사에 대해서 알려주세요
          </Headline>
          <Label color="gray600" size="l">
            설문을 통해 보다 정확한 보고서를 출력해드릴 수 있습니다.
          </Label>
        </div>
      </div>
      {/* 정보 입력 */}
      <div className="flex flex-col items-start gap-12 ">TODO</div>
      {/* 버튼 */}
      <div className="flex items-start gap-3">
        <ActionButton variant="tonal-gray" size="l" onClick={handlePrevPageClick}>
          이전 단계
        </ActionButton>
        <ActionButton variant="filled" size="l">
          완료하기
        </ActionButton>
      </div>
    </div>
  );
}
