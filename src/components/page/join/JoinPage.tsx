'use client';

import { Body, Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import TextField from '@/components/ui/TextField/TextField';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { DefaultApi } from '@/lib/axios/oas-axios';

export default function JoinPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyNumber, setCompanyNumber] = useState('');
  const [allAgree, setAllAgree] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agree4, setAgree4] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
  const handlePasswordCheckChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordCheck(event.target.value);
  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setCompanyName(event.target.value);
  const handleCompanyNumberChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCompanyNumber(event.target.value);

  const handleAllAgreeChange = () => {
    setAllAgree(!allAgree);
    setAgree1(!allAgree);
    setAgree2(!allAgree);
    setAgree3(!allAgree);
    setAgree4(!allAgree);
  };
  const handleAgree1Change = () => setAgree1(!agree1);
  const handleAgree2Change = () => setAgree2(!agree2);
  const handleAgree3Change = () => setAgree3(!agree3);
  const handleAgree4Change = () => setAgree4(!agree4);

  // 모두 동의 여부 확인
  useEffect(() => {
    if (agree1 && agree2 && agree3 && agree4) {
      setAllAgree(true);
    } else {
      setAllAgree(false);
    }
  }, [agree1, agree2, agree3, agree4]);

  // TODO: API 미구현
  const checkEmail = async () => {};
  const checkCompanyNumber = async () => {};

  // 회원가입
  const join = async () => {
    try {
      const response = await DefaultApi.registerCompanyUsingPOST('', {
        email: email,
        password: password,
        companyName: companyName,
        businessNumber: companyNumber,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
                  <TextField.Single
                    sizeVariant="m"
                    placeholder="example@email.com"
                    isFullWidth
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <ActionButton
                  variant="tonal-blue"
                  size="l"
                  disabled={!email}
                  onClick={() => {
                    console.log('중복 확인' + email);
                  }}
                >
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
              <TextField.Single
                sizeVariant="m"
                placeholder="비밀번호"
                isFullWidth
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <TextField.Single
                sizeVariant="m"
                placeholder="비밀번호 확인"
                isFullWidth
                type="password"
                value={passwordCheck}
                onChange={handlePasswordCheckChange}
              />
            </div>
            {/* 회사이름 */}
            <div className="flex flex-col items-start self-stretch gap-2">
              <Label size="s" color="gray600">
                회사 이름
              </Label>
              <TextField.Single
                sizeVariant="m"
                placeholder="(주) 아이라스"
                isFullWidth
                value={companyName}
                onChange={handleCompanyNameChange}
              />
            </div>
            {/* 사업자 등록번호 */}
            <div className="flex flex-col items-start self-stretch gap-2">
              <Label size="s" color="gray600">
                사업자 등록번호
              </Label>
              <div className="flex items-start self-stretch gap-2">
                <div className="flex flex-grow">
                  <TextField.Single
                    sizeVariant="m"
                    placeholder="000-00-00000"
                    isFullWidth
                    value={companyNumber}
                    onChange={handleCompanyNumberChange}
                  />
                </div>
                <ActionButton
                  variant="tonal-blue"
                  size="l"
                  disabled={!companyNumber}
                  onClick={() => {
                    console.log('중복 확인' + companyNumber);
                  }}
                >
                  중복 확인
                </ActionButton>
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch gap-4">
              {/* 모두 동의합니다. */}
              <div className="flex items-center gap-3">
                <Checkbox id="all-agree" checked={allAgree} onCheckedChange={handleAllAgreeChange} />
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
                  <Checkbox id="agree-1" checked={agree1} onCheckedChange={handleAgree1Change} />
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
                  <Checkbox id="agree-2" checked={agree2} onCheckedChange={handleAgree2Change} />
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
                  <Checkbox id="agree-3" checked={agree3} onCheckedChange={handleAgree3Change} />
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
                  <Checkbox id="agree-4" checked={agree4} onCheckedChange={handleAgree4Change} />
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
          <ActionButton variant="filled" size="l" onClick={join}>
            회원가입
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
