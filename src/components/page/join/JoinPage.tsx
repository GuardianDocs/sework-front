'use client';

import { Body, Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import TextField from '@/components/ui/TextField/TextField';
import Image from 'next/image';

export default function JoinPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 로고 */}
      <div className="flex flex-col items-center self-stretch justify-center py-10">
        <Image src="/main-logo.png" width={60} height={20} alt="logo" />
      </div>
      {/* 회원가입 */}
      <div className="flex items-start mb-[60px] border border-gray-200 rounded-xl">
        <div className="flex flex-col items-center gap-12 px-10 py-12">
          <Headline size="s" color="gray800">
            회원가입
          </Headline>
          {/* Form */}
          <div className="flex flex-col items-start gap-8 self-stretch w-[384px]">
            {/* 이메일 */}
            <div className="flex flex-col items-start self-stretch gap-2">
              <Label size="s" color="gray600">
                이메일
              </Label>
              <div className="flex items-start self-stretch gap-2">
                <div className="flex flex-grow">
                  <TextField.Single sizeVariant="m" placeholder="example@email.com" isFullWidth />
                </div>
                <ActionButton variant="tonal-blue" size="l">
                  중복 확인
                </ActionButton>
              </div>
            </div>
            {/* 비밀번호 */}
            <div className="flex flex-col items-start self-stretch gap-2">
              <Label size="s" color="gray600">
                비밀번호
              </Label>
              <Body size="s" color="gray400">
                영문, 숫자, 특수문자 중 2종류 이상을 조합하여 10자리 이상으로 입력해주세요
              </Body>
              <TextField.Single sizeVariant="m" placeholder="비밀번호" isFullWidth type="password" />
              <TextField.Single sizeVariant="m" placeholder="비밀번호 확인" isFullWidth type="password" />
            </div>
            {/* 회사이름 */}
            <div className="flex flex-col items-start self-stretch gap-2">
              <Label size="s" color="gray600">
                회사 이름
              </Label>
              <TextField.Single sizeVariant="m" placeholder="(주) 아이라스" isFullWidth />
            </div>
            {/* 사업자 등록번호 */}
            <div className="flex flex-col items-start self-stretch gap-2">
              <Label size="s" color="gray600">
                사업자 등록번호
              </Label>
              <div className="flex items-start self-stretch gap-2">
                <div className="flex flex-grow">
                  <TextField.Single sizeVariant="m" placeholder="000-00-00000" isFullWidth />
                </div>
                <ActionButton variant="tonal-blue" size="l">
                  중복 확인
                </ActionButton>
              </div>
            </div>
            {/* TODO: 동의 */}
            <div className="flex flex-col items-start self-stretch gap-4">
              {/* 모두 동의합니다. */}
              <div className="flex items-center gap-3">
                <Checkbox id="all-agree" />
                <label htmlFor="all-agree">
                  <Body size="m" color="gray800">
                    모두 동의합니다.
                  </Body>
                </label>
              </div>
              {/* border */}
              <div className="flex w-full h-[1px] bg-gray-200" />
              {/* 4개 항목 */}
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="agree-1" />
                  <label htmlFor="agree-1">
                    <div className="flex flex-start gap-0.5">
                      <Body size="m" color="blue500">
                        [필수]
                      </Body>
                      <Body size="m" color="gray600" className="underline underline-offset-2 ">
                        이용약관
                      </Body>
                      <Body size="m" color="gray600">
                        에 동의합니다.
                      </Body>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="agree-2" />
                  <label htmlFor="agree-2">
                    <div className="flex flex-start gap-0.5">
                      <Body size="m" color="blue500">
                        [필수]
                      </Body>
                      <Body size="m" color="gray600" className="underline underline-offset-2 ">
                        개인정보 수집 및 이용 동의서
                      </Body>
                      <Body size="m" color="gray600">
                        에 동의합니다.
                      </Body>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="agree-3" />
                  <label htmlFor="agree-3">
                    <div className="flex flex-start gap-0.5">
                      <Body size="m" color="blue500">
                        [필수]
                      </Body>
                      <Body size="m" color="gray600" className="underline underline-offset-2 ">
                        회원가입 수집 이용
                      </Body>
                      <Body size="m" color="gray600">
                        에 동의합니다.
                      </Body>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="agree-4" />
                  <label htmlFor="agree-4">
                    <div className="flex flex-start gap-0.5">
                      <Body size="m" color="gray600">
                        [선택]
                      </Body>
                      <Body size="m" color="gray600" className="underline underline-offset-2 ">
                        마케팅 정보 수신
                      </Body>
                      <Body size="m" color="gray600">
                        에 동의합니다.
                      </Body>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <ActionButton variant="filled" size="l">
            회원가입
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
