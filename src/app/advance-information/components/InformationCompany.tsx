'use client';

import TextField from '@/components/ui/TextField/TextField';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { FormItem } from './FormItem';
import { CompanyInfoType, companyInfoValidationSchema } from '../validations';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

type InformationCompanyProps = {
  data?: CompanyInfoType;
  nextStep: (data: CompanyInfoType) => void;
  preventStep: () => void;
  isLoading?: boolean;
};

export const InformationCompany = ({ data, nextStep, preventStep, isLoading }: InformationCompanyProps) => {
  const openDaumPostCodePopup = useDaumPostcodePopup();

  const formMethods = useForm<CompanyInfoType>({
    resolver: companyInfoValidationSchema,
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { isValid },
  } = formMethods;

  const [roadAddress] = watch(['roadAddress']);

  const handleSaveInformationCompany = (data: CompanyInfoType) => {
    nextStep(data);
  };

  const handleAddressClick = () => {
    openDaumPostCodePopup({ onComplete: handleAddressComplete });
  };

  const handleAddressComplete = (data: any) => {
    const { zonecode, roadAddress } = data;

    setValue('postNumber', zonecode);
    setValue('roadAddress', roadAddress);
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSaveInformationCompany)} className="flex-col-center gap-y-12 w-full">
        <div className="flex flex-col gap-y-8 w-full">
          <div className="flex gap-x-6 w-full">
            <FormItem title="회사명" required>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="(주)아이라스" />}
              />
            </FormItem>
            <FormItem title="대표자" required>
              <Controller
                name="ownerName"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="홍길동" />}
              />
            </FormItem>
          </div>
          <div className="flex gap-x-6 w-full">
            <FormItem title="사업자번호" required>
              <Controller
                name="businessNumber"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="123-45-67890" />}
              />
            </FormItem>
            <FormItem title="법인번호">
              <Controller
                name="corporateNumber"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="123456-7890123" />}
              />
            </FormItem>
          </div>
          <div className="flex gap-x-6 w-full">
            <FormItem title="업태" required>
              <Controller
                name="sector"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="서비스" />}
              />
            </FormItem>
            <FormItem title="업종">
              <Controller
                name="businessType"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="소프트웨어 개발" />}
              />
            </FormItem>
          </div>
          <FormItem title="주소" required>
            <div className="flex gap-x-2">
              <TextField.Single isFullWidth placeholder="서울특별시 강남구" readOnly value={roadAddress} />
              <ActionButton
                variant="tonal-blue"
                size="m"
                className="w-[100px] whitespace-nowrap"
                onClick={handleAddressClick}
              >
                주소 검색
              </ActionButton>
            </div>
            <Controller
              name="detailAddress"
              control={control}
              render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="상세주소" />}
            />
          </FormItem>
          <FormItem title="개업일자" required>
            <Controller
              name="companyStartAt"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField.Single isFullWidth {...field} placeholder="2022-01-02" error={error?.message} />
              )}
            />
          </FormItem>
        </div>
        <div className="flex gap-x-3">
          <ActionButton type="button" variant="tonal-gray" size="l" onClick={preventStep}>
            이전 단계
          </ActionButton>
          <ActionButton type="submit" variant="filled" size="l" disabled={!isValid || isLoading}>
            다음 단계
          </ActionButton>
        </div>
      </form>
    </FormProvider>
  );
};
