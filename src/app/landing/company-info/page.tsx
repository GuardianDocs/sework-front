'use client';

import { Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import TextField from '@/components/ui/TextField/TextField';
import { useLandingInfoStore } from '@/hooks/landing/useLandingInfoStore';
import { useRouter } from 'next/navigation';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import { DefaultApi } from '@/lib/axios/oas-axios';
import { type ResponseResultCompanyBusinessLookUpResponse } from '@/services';
import { useQuery } from 'react-query';

export default function CompanyInfoPage() {
  const router = useRouter();
  const openDaumPostCodePopup = useDaumPostcodePopup();

  const handleAddressClick = () => {
    openDaumPostCodePopup({ onComplete: handleAddressComplete });
  };

  const handleAddressComplete = (data: any) => {
    const { zonecode, roadAddress } = data;

    setLandingInfo({
      ...landingInfo,
      postNumber: zonecode,
      roadAddress,
    });
  };

  const handlePreviousStep = () => {
    router.push('/landing/basic-info');
  };

  const handleComplete = async () => {
    console.log(landingInfo);

    try {
      const response = await DefaultApi.saveAdditionalInfoUsingPOST(landingInfo);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompanyInfo = async () => {
    try {
      const response = await DefaultApi.getCompanyInfoUsingGET();
      const { data } = response?.data as ResponseResultCompanyBusinessLookUpResponse;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery('getCompanyInfo', getCompanyInfo);

  const { setLandingInfo, landingInfo } = useLandingInfoStore();

  return (
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
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.companyName}
              onChange={e => setLandingInfo({ ...landingInfo, companyName: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              대표자
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.ownerName}
              onChange={e => setLandingInfo({ ...landingInfo, ownerName: e.target.value })}
            />
          </div>
        </div>
        <div className="flex items-start self-stretch gap-6">
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              사업자번호
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.businessNumber}
              onChange={e => setLandingInfo({ ...landingInfo, businessNumber: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              법인번호
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.corporateNumber}
              onChange={e => setLandingInfo({ ...landingInfo, corporateNumber: e.target.value })}
            />
          </div>
        </div>
        <div className="flex items-start self-stretch gap-6">
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              업태
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.businessType}
              onChange={e => setLandingInfo({ ...landingInfo, businessType: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-start self-stretch gap-2 w-[282px]">
            <Label size="s" color="gray600">
              업종
            </Label>
            <TextField.Single
              sizeVariant="s"
              isFullWidth
              value={landingInfo?.sector}
              onChange={e => setLandingInfo({ ...landingInfo, sector: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch gap-2">
          <Label size="s" color="gray600">
            주소
          </Label>
          <div className="flex items-start self-stretch gap-2">
            <div className="flex flex-grow">
              <TextField.Single sizeVariant="s" isFullWidth value={landingInfo?.roadAddress} disabled />
            </div>
            <ActionButton variant="tonal-blue" size="m" onClick={handleAddressClick}>
              주소 검색
            </ActionButton>
          </div>
          <TextField.Single
            sizeVariant="s"
            isFullWidth
            value={landingInfo?.detailAddress}
            onChange={e => setLandingInfo({ ...landingInfo, detailAddress: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-start self-stretch gap-2">
          <Label size="s" color="gray600">
            설립일자
          </Label>
          <TextField.Single
            sizeVariant="s"
            placeholder="YYYY-MM-DD"
            isFullWidth
            value={landingInfo?.companyStartAt}
            onChange={e => setLandingInfo({ ...landingInfo, companyStartAt: e.target.value })}
          />
        </div>
      </div>
      {/* 버튼 */}
      <div className="flex items-start justify-center gap-3">
        <ActionButton size="l" variant="tonal-gray" onClick={handlePreviousStep}>
          이전 단계
        </ActionButton>
        <ActionButton size="l" variant="filled" onClick={handleComplete}>
          완료하기
        </ActionButton>
      </div>
    </div>
  );
}
