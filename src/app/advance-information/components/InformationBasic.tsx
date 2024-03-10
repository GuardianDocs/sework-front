'use client';

import TextField from '@/components/ui/TextField/TextField';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { FormItem } from './FormItem';
import { BasicInfoType } from '../validations';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { useEffect } from 'react';
import { basicInfoValidationSchema } from '../validations';
import DropdownButton from '@/components/ui/DropdownButton/DropdownButton';
import { JOB_POSITION } from '../constants';

type InformationBasicProps = {
  data?: BasicInfoType;
  nextStep: (data: BasicInfoType) => void;
};

export const InformationBasic = ({ data, nextStep }: InformationBasicProps) => {
  const formMethods = useForm<BasicInfoType>({
    resolver: basicInfoValidationSchema,
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = formMethods;

  const handleSaveInformationBasic = (data: BasicInfoType) => {
    nextStep(data);
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSaveInformationBasic)} className="flex-col-center gap-y-12 w-full">
        <div className="flex flex-col gap-y-8 w-full">
          <div className="flex gap-x-6 w-full">
            <FormItem title="대표자 성명">
              <Controller
                name="ownerName"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} />}
              />
            </FormItem>
            <FormItem title="회사 전화번호">
              <Controller
                name="companyPhoneNumber"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} />}
              />
            </FormItem>
          </div>
          <div className="flex gap-x-6 w-full">
            <FormItem title="담당자 성명">
              <Controller
                name="contactName"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} />}
              />
            </FormItem>
            <FormItem title="담당자 연락처">
              <Controller
                name="contactNumber"
                control={control}
                render={({ field }) => <TextField.Single isFullWidth {...field} />}
              />
            </FormItem>
          </div>
          <FormItem title="담당자 이메일">
            <Controller
              name="contactEmail"
              control={control}
              render={({ field }) => <TextField.Single isFullWidth {...field} placeholder="example@email.com" />}
            />
          </FormItem>
          <FormItem title="담당자 직책">
            <Controller
              name="jobPosition"
              control={control}
              render={({ field }) => (
                <DropdownButton
                  options={JOB_POSITION}
                  isFullWidth
                  selectedOption={JOB_POSITION.find(el => el.value === field.value)}
                  onSelected={option => field.onChange(option.value)}
                />
              )}
            />
          </FormItem>
        </div>
        <ActionButton type="submit" variant="filled" size="l" disabled={!isValid}>
          다음 단계
        </ActionButton>
      </form>
    </FormProvider>
  );
};
