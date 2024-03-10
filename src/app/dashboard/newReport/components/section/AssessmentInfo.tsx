'use client';

import DropdownButton from '@/components/ui/DropdownButton/DropdownButton';
import TextField from '@/components/ui/TextField/TextField';
import { SectorVO } from '@/services';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { REPORT_TYPE } from '../../constants';
import { FormItem } from '../FormItem';
import { DatePicker } from 'antd';
import { SectorSelect } from '../SectorSelect';
import { AssessmentInfoType, assessmentInfoValidationSchema } from '../../validations';
import { zodResolver } from '@hookform/resolvers/zod';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { useEffect } from 'react';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

type AssessmentInfoProps = {
  data?: AssessmentInfoType;
  nextStep: (data: AssessmentInfoType) => void;
};

export const AssessmentInfo = ({ data, nextStep }: AssessmentInfoProps) => {
  const formMethods = useForm<AssessmentInfoType>({
    resolver: zodResolver(assessmentInfoValidationSchema),
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    setValue,
    trigger,
    reset,
    watch,
    formState: { isValid },
  } = formMethods;

  const [startAt, endAt] = watch(['startAt', 'endAt' as const]);

  const handleChangeDate = ([startAt, endAt]: [string, string]) => {
    setValue('startAt', startAt, { shouldValidate: true, shouldDirty: true });
    setValue('endAt', endAt, { shouldValidate: true, shouldDirty: true });
  };

  const handleSaveAssessmentInfo = (data: AssessmentInfoType) => {
    nextStep(data);
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSaveAssessmentInfo)} className="flex-col-center gap-y-12 w-full">
        <FormItem title="평가 보고서 제목">
          <Controller
            name="title"
            control={control}
            render={({ field }) => <TextField.Single isFullWidth {...field} />}
          />
        </FormItem>
        <FormItem title="보고서 종류를 알려주세요">
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <DropdownButton
                options={REPORT_TYPE}
                isFullWidth
                selectedOption={REPORT_TYPE.find(el => el.value === field.value)}
                onSelected={option => field.onChange(option.value)}
              />
            )}
          />
        </FormItem>
        <FormItem title="평가 기준일을 알려주세요">
          <RangePicker
            size="large"
            className="hover:border-blue-500"
            placeholder={['평가 시작 기준일', '평가 종료 기준일']}
            onChange={(_, dateString) => {
              handleChangeDate(dateString);
            }}
            value={!!(startAt && endAt) ? [dayjs(startAt), dayjs(endAt)] : undefined}
          />
        </FormItem>
        <FormItem title="평가하고자 하는 업종은 어떻게 되시나요?">
          <Controller
            name="sectorId"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SectorSelect
                selectedSector={value as SectorVO}
                onSectorSelect={value => {
                  onChange(value);
                  trigger();
                }}
              />
            )}
          />
        </FormItem>
        <ActionButton type="submit" variant="filled" size="l" disabled={!isValid}>
          다음 단계
        </ActionButton>
      </form>
    </FormProvider>
  );
};
