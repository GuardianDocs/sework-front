'use client';

import { Body, Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
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
      <div className="flex items-start pb-[60px]">
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
            <div></div>
          </div>
          <ActionButton variant="filled" size="l">
            회원가입
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
