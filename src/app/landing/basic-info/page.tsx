'use client';

import { Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import DropdownButton from '@/components/ui/DropdownButton/DropdownButton';
import TextField from '@/components/ui/TextField/TextField';
import { useLandingInfoStore } from '@/hooks/landing/useLandingInfoStore';
import { AdditionalCompanyAccountInfoRequestJobPositionEnum } from '@/services';
import { useRouter } from 'next/navigation';

export default function BasicInfoPage() {
  const router = useRouter();

  const { setLandingInfo, landingInfo } = useLandingInfoStore();

  const handleNextStep = () => {
    router.push('/landing/company-info');
  };

  const jobPositionOptionList = Object.keys(AdditionalCompanyAccountInfoRequestJobPositionEnum).map(key => ({
    label: key,
    value:
      AdditionalCompanyAccountInfoRequestJobPositionEnum[
        key as keyof typeof AdditionalCompanyAccountInfoRequestJobPositionEnum
      ],
  }));

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-start gap-2">
            <Label size="s">1</Label>
            <Label size="s">2</Label>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Headline size="s" color="gray800">
              기본 정보를 알려주세요
            </Headline>
            <Label size="l" color="gray600">
              환영합니다. 귀사에 맞춘 환경을 설정해드릴게요.
            </Label>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="flex flex-col items-start gap-8 w-[588px]">
        <div className="flex items-start self-stretch gap-6">
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              대표자 성명
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.ownerName}
              onChange={e => setLandingInfo({ ...landingInfo, ownerName: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              회사 전화번호
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.companyPhoneNumber}
              onChange={e => setLandingInfo({ ...landingInfo, companyPhoneNumber: e.target.value })}
            />
          </div>
        </div>
        <div className="flex items-start self-stretch gap-6">
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              담당자 성명
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.contactName}
              onChange={e => setLandingInfo({ ...landingInfo, contactName: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              담당자 연락처
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.contactNumber}
              onChange={e => setLandingInfo({ ...landingInfo, contactNumber: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch gap-2">
          <Label size="s" color="gray600">
            담당자 이메일
          </Label>
          <TextField.Single
            sizeVariant="s"
            placeholder="example@email.com"
            isFullWidth
            value={landingInfo?.contactEmail}
            onChange={e => setLandingInfo({ ...landingInfo, contactEmail: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-start self-stretch gap-2">
          <Label size="s" color="gray600">
            담당자 직책
          </Label>
          <DropdownButton
            options={jobPositionOptionList}
            isFullWidth
            selectedOption={jobPositionOptionList.find(option => option.value === landingInfo?.jobPosition)}
            onSelected={option => {
              setLandingInfo({
                ...landingInfo,
                jobPosition: option.value as AdditionalCompanyAccountInfoRequestJobPositionEnum,
              });
            }}
          />
        </div>
      </div>
      {/* 버튼 */}
      <ActionButton size="l" variant="filled" onClick={handleNextStep}>
        다음 단계
      </ActionButton>
    </>
  );
}
