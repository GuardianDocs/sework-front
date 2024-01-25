'use client';

import { Body, Headline, Label, Title } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import Icon from '@/components/ui/Icon/Icon';
import TextField from '@/components/ui/TextField/TextField';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/Dialog/Dialog';
import style from './page.module.scss';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup/RadioGroup';
import { Label as HtmlLabel } from '@/components/ui/Label/Label';
import { useRouter } from 'next/navigation';

export default function Prepare1Page() {
  const router = useRouter();

  const handleNextPageClick = () => {
    router.push('/assessment/step2');
  };

  return (
    <div className="flex pt-12 pb-[60px] flex-col items-center gap-12">
      {/* 타이틀 */}
      <div className="flex flex-col items-center gap-4">
        {/* 1,2 */}
        <div className="inline-flex items-start gap-[8px] relative">
          <div className="relative w-[30px] h-[28px]">
            <div className="bg-blue-500 relative w-[28px] h-[28px] rounded-[14px]">
              <div className="absolute top-[4px] left-[10px] font-label-s font-[number:var(--label-s-font-weight)] text-white text-[length:var(--label-s-font-size)] text-center tracking-[var(--label-s-letter-spacing)] leading-[var(--label-s-line-height)] whitespace-nowrap [font-style:var(--label-s-font-style)]">
                1
              </div>
            </div>
          </div>
          <div className="mr-[-2.00px] relative w-[30px] h-[28px]">
            <div className="bg-gray-100 relative w-[28px] h-[28px] rounded-[14px]">
              <div className="absolute top-[4px] left-[10px] font-label-s font-[number:var(--label-s-font-weight)] text-gray-400 text-[length:var(--label-s-font-size)] text-center tracking-[var(--label-s-letter-spacing)] leading-[var(--label-s-line-height)] whitespace-nowrap [font-style:var(--label-s-font-style)]">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Headline color="gray800" size="s">
            평가 관련 정보를 알려주세요
          </Headline>
          <Label color="gray600" size="l">
            설문을 통해 보다 정확한 보고서를 출력해드릴 수 있습니다.
          </Label>
        </div>
      </div>
      {/* 정보 입력 */}
      <div className="flex flex-col items-start gap-12">
        {/* 업종 검색 등 */}
        <div className="flex flex-col items-start gap-3">
          <Title color="gray800" size="l">
            평가하고자 하는 업종은 어떻게 되시나요?
          </Title>
          <div className="flex flex-col items-start gap-2">
            <div className="flex w-[792px] items-start gap-2">
              <TextField.Single value="" isFullWidth sizeVariant="s" />
              <Dialog>
                <DialogTrigger asChild>
                  <div className="min-w-[100px]">
                    <ActionButton size="m" variant="tonal-blue">
                      업종 검색
                    </ActionButton>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[588px]">
                  {/* <div
                    className={`flex max-h-[448px] w-[712px] flex-col items-start gap-8 overflow-y-auto ${style.dialogScrollbar}`}
                  ></div> */}
                  <div className="flex flex-col items-start gap-3">
                    <Title color="gray800" size="l">
                      평가하고자 하는 업종을 검색해주세요
                    </Title>
                    <div className="flex items-center gap-2">
                      <TextField.Single
                        placeholder="업종을 검색하세요"
                        value=""
                        isFullWidth
                        sizeVariant="s"
                        style={{ width: '508px' }}
                      />
                    </div>
                    <div
                      className={`flex w-[508px] h-[220px] p-3 items-start border rounded border-gray-200 overflow-y-auto ${style.dialogScrollbar}`}
                    >
                      {/* 컨데이너 */}
                      <div className="flex flex-col items-start flex-grow gap-4">
                        <RadioGroup className="flex flex-col items-start gap-[10px] self-stretch">
                          <div className="flex items-start gap-3">
                            <RadioGroupItem value="default" id="r1" />
                            <HtmlLabel htmlFor="r1">
                              <Label size="s">
                                <div className="text-gray-800 hover:text-blue-500">Default</div>
                              </Label>
                            </HtmlLabel>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <div className="flex items-start gap-2">
                      <DialogClose asChild>
                        <ActionButton type="button" variant="tonal-gray" size="l">
                          취소하기
                        </ActionButton>
                      </DialogClose>
                      <ActionButton type="button" variant="filled" size="l">
                        업종 선택
                      </ActionButton>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex items-start gap-1">
            <Icon icon="circle-info" size={20} color="gray600" />
            <Body color="gray600" size="s">
              아이라스는 한 평가에 한 종목만 평가할 수 있습니다. 다른 종목 평가를 원하시면 이후 새로운 평가를
              생성해주세요.
            </Body>
          </div>
        </div>
        {/* 재해, 사고 건수 */}
        <div className="flex items-start gap-[72px]">
          {/* 재해 건수 */}
          <div className="flex w-[360px] flex-col items-start gap-3">
            <Title color="gray800" size="l">
              최근 3년간 재해 발생 사례 (건수)
            </Title>
            <div className="flex items-center self-stretch gap-6">
              <Label color="gray800" size="m">
                {new Date().getFullYear() - 1}년
              </Label>
              <div className="flex items-center flex-grow gap-2">
                <TextField.Single value="" placeholder="발생 건수 입력" isFullWidth sizeVariant="s" />
                <Body color="gray800" size="m">
                  건
                </Body>
              </div>
            </div>
            <div className="flex items-center self-stretch gap-6">
              <Label color="gray800" size="m">
                {new Date().getFullYear() - 2}년
              </Label>
              <div className="flex items-center flex-grow gap-2">
                <TextField.Single value="" placeholder="발생 건수 입력" isFullWidth sizeVariant="s" />
                <Body color="gray800" size="m">
                  건
                </Body>
              </div>
            </div>
            <div className="flex items-center self-stretch gap-6">
              <Label color="gray800" size="m">
                {new Date().getFullYear() - 3}년
              </Label>
              <div className="flex items-center flex-grow gap-2">
                <TextField.Single value="" placeholder="발생 건수 입력" isFullWidth sizeVariant="s" />
                <Body color="gray800" size="m">
                  건
                </Body>
              </div>
            </div>
          </div>
          {/* 사고 건수 */}
          <div className="flex w-[360px] flex-col items-start gap-3">
            <Title color="gray800" size="l">
              아차 사고사례 및 발굴 (건수)
            </Title>
            <div className="flex items-center self-stretch gap-6">
              <Label color="gray800" size="m">
                {new Date().getFullYear() - 1}년
              </Label>
              <div className="flex items-center flex-grow gap-2">
                <TextField.Single value="" placeholder="발생 건수 입력" isFullWidth sizeVariant="s" />
                <Body color="gray800" size="m">
                  건
                </Body>
              </div>
            </div>
            <div className="flex items-center self-stretch gap-6">
              <Label color="gray800" size="m">
                {new Date().getFullYear() - 2}년
              </Label>
              <div className="flex items-center flex-grow gap-2">
                <TextField.Single value="" placeholder="발생 건수 입력" isFullWidth sizeVariant="s" />
                <Body color="gray800" size="m">
                  건
                </Body>
              </div>
            </div>
            <div className="flex items-center self-stretch gap-6">
              <Label color="gray800" size="m">
                {new Date().getFullYear() - 3}년
              </Label>
              <div className="flex items-center flex-grow gap-2">
                <TextField.Single value="" placeholder="발생 건수 입력" isFullWidth sizeVariant="s" />
                <Body color="gray800" size="m">
                  건
                </Body>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActionButton variant="filled" size="l" onClick={handleNextPageClick}>
        다음 단계
      </ActionButton>
    </div>
  );
}
