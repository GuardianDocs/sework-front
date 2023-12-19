'use client';

import { Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import TextField from '@/components/ui/TextField/TextField';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDaumPostcodePopup } from 'react-daum-postcode';

export default function CompanyInfoPage() {
  const router = useRouter();
  const openDaumPostCodePopup = useDaumPostcodePopup();

  const handleAddressClick = () => {
    openDaumPostCodePopup({ onComplete: handleAddressComplete });
  };

  const handleAddressComplete = (data: any) => {
    const { zonecode, roadAddress } = data;

    // setPostNumber(zonecode);
    // setBaddress(roadAddress);

    console.log(zonecode, roadAddress);
  };

  const handlePreviousStep = () => {
    router.push('/landing/basic-info');
  };

  return (
    <div className="flex flex-col items-center">
      {/* 로고 */}
      <div className="flex flex-col items-center self-stretch justify-center py-10">
        <Image src="/main-logo.png" width={60} height={20} alt="logo" />
      </div>
      <div className="flex flex-col items-center gap-12 pb-[60px]">
        {/* 안내 */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-start gap-2">
              <Label size="s">1</Label>
              <Label size="s">2</Label>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Headline size="s" color="gray800">
                기업 정보를 확인해주세요
              </Headline>
              <Label size="l" color="gray600">
                기업 정보가 맞는지 확인해주시고, 틀린 부분이 있으면 수정해주세요.
              </Label>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="flex flex-col items-start gap-8 w-[588px] self-stretch">
          <div className="flex items-start self-stretch gap-6">
            <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
              <Label size="s" color="gray600">
                회사명
              </Label>
              <TextField.Single sizeVariant="s" isFullWidth />
            </div>
            <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
              <Label size="s" color="gray600">
                대표자
              </Label>
              <TextField.Single sizeVariant="s" isFullWidth />
            </div>
          </div>
          <div className="flex items-start self-stretch gap-6">
            <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
              <Label size="s" color="gray600">
                사업자번호
              </Label>
              <TextField.Single sizeVariant="s" isFullWidth />
            </div>
            <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
              <Label size="s" color="gray600">
                법인번호
              </Label>
              <TextField.Single sizeVariant="s" isFullWidth />
            </div>
          </div>
          <div className="flex items-start self-stretch gap-6">
            <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
              <Label size="s" color="gray600">
                업태
              </Label>
              <TextField.Single sizeVariant="s" isFullWidth />
            </div>
            <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
              <Label size="s" color="gray600">
                업종
              </Label>
              <TextField.Single sizeVariant="s" isFullWidth />
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch gap-2">
            <Label size="s" color="gray600">
              주소
            </Label>
            <div className="flex items-start self-stretch gap-2">
              <div className="flex flex-grow">
                <TextField.Single sizeVariant="s" isFullWidth />
              </div>
              <ActionButton variant="tonal-blue" size="m" onClick={handleAddressClick}>
                주소 검색
              </ActionButton>
            </div>
            <TextField.Single sizeVariant="s" isFullWidth />
          </div>
          <div className="flex flex-col items-start self-stretch gap-2">
            <Label size="s" color="gray600">
              설립일자
            </Label>
            <TextField.Single sizeVariant="s" placeholder="YYYY-MM-DD" isFullWidth />
          </div>
        </div>
        {/* 버튼 */}
        <div className="flex items-start justify-center gap-3">
          <ActionButton size="l" variant="tonal-gray" onClick={handlePreviousStep}>
            이전 단계
          </ActionButton>
          <ActionButton size="l" variant="filled">
            완료하기
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
