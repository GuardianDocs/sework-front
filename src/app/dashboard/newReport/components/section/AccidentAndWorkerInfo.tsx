'use client';

import { Body, Label } from '@/components/typography';
import TextField from '@/components/ui/TextField/TextField';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { FormItem } from '../FormItem';
import { AccidentAndWorkerInfoType, accidentAndWorkerInfoValidationSchema } from '../../validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import ActionButton from '@/components/ui/ActionButton/ActionButton';

type AccidentAndWorkerInfoProps = {
  data?: AccidentAndWorkerInfoType;
  nextStep: (data: AccidentAndWorkerInfoType) => void;
  preventStep: () => void;
};

export const AccidentAndWorkerInfo = ({ data, nextStep, preventStep }: AccidentAndWorkerInfoProps) => {
  const formMethods = useForm<AccidentAndWorkerInfoType>({
    resolver: zodResolver(accidentAndWorkerInfoValidationSchema),
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = formMethods;

  const handleSaveAccidentAndWorkerInfo = (data: AccidentAndWorkerInfoType) => {
    nextStep(data);
  };

  const changeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (!value) {
      return 0;
    }
    return value;
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSaveAccidentAndWorkerInfo)} className="flex-col-center gap-y-12 w-full">
        <div className="flex w-full gap-x-[72px]">
          <FormItem title="최근 3년간 재해 발생 사례 (건수)" className="flex-1">
            <div className="flex flex-col gap-y-4 flex-1">
              <div className="w-full flex flex-col gap-y-2">
                <Label size="m" color="gray600">
                  2023년
                </Label>
                <Controller
                  name="lastYearAccidentCount"
                  control={control}
                  render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                    <TextField.Single
                      {...field}
                      isFullWidth
                      placeholder="발생 건수 입력"
                      error={error?.message}
                      rightElement={
                        <Body size="m" color="gray800">
                          건
                        </Body>
                      }
                      onChange={e => {
                        onChange(changeNumberInput(e));
                      }}
                    />
                  )}
                />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <Label size="m" color="gray600">
                  2022년
                </Label>
                <Controller
                  name="twoYearsAgoAccidentCount"
                  control={control}
                  render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                    <TextField.Single
                      {...field}
                      isFullWidth
                      placeholder="발생 건수 입력"
                      error={error?.message}
                      rightElement={
                        <Body size="m" color="gray800">
                          건
                        </Body>
                      }
                      onChange={e => {
                        onChange(changeNumberInput(e));
                      }}
                    />
                  )}
                />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <Label size="m" color="gray600">
                  2021년
                </Label>
                <Controller
                  name="threeYearsAgoAccidentCount"
                  control={control}
                  render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                    <TextField.Single
                      {...field}
                      isFullWidth
                      placeholder="발생 건수 입력"
                      error={error?.message}
                      rightElement={
                        <Body size="m" color="gray800">
                          건
                        </Body>
                      }
                      onChange={e => {
                        onChange(changeNumberInput(e));
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </FormItem>
          <FormItem title="아차사고 사례 및 발굴건수 (건수)" className="flex-1">
            <div className="flex flex-col gap-y-4 flex-1">
              <div className="w-full flex flex-col gap-y-2">
                <Label size="m" color="gray600">
                  2023년
                </Label>
                <Controller
                  name="lastYearNearAccidentCount"
                  control={control}
                  render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                    <TextField.Single
                      {...field}
                      isFullWidth
                      placeholder="발생 건수 입력"
                      error={error?.message}
                      rightElement={
                        <Body size="m" color="gray800">
                          건
                        </Body>
                      }
                      onChange={e => {
                        onChange(changeNumberInput(e));
                      }}
                    />
                  )}
                />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <Label size="m" color="gray600">
                  2022년
                </Label>
                <Controller
                  name="twoYearsAgoNearAccidentCount"
                  control={control}
                  render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                    <TextField.Single
                      {...field}
                      isFullWidth
                      placeholder="발생 건수 입력"
                      error={error?.message}
                      rightElement={
                        <Body size="m" color="gray800">
                          건
                        </Body>
                      }
                      onChange={e => {
                        onChange(changeNumberInput(e));
                      }}
                    />
                  )}
                />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <Label size="m" color="gray600">
                  2021년
                </Label>
                <Controller
                  name="threeYearsAgoNearAccidentCount"
                  control={control}
                  render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                    <TextField.Single
                      {...field}
                      isFullWidth
                      placeholder="발생 건수 입력"
                      error={error?.message}
                      rightElement={
                        <Body size="m" color="gray800">
                          건
                        </Body>
                      }
                      onChange={e => {
                        onChange(changeNumberInput(e));
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </FormItem>
        </div>
        <FormItem title="근로자 현황" className="flex-1">
          <div className="flex flex-col gap-y-4 flex-1">
            <div className="w-full flex flex-col gap-y-2">
              <Label size="m" color="gray600">
                사내 협력업체 수
              </Label>
              <Controller
                name="associatedInternalCorpCount"
                control={control}
                render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                  <TextField.Single
                    {...field}
                    isFullWidth
                    placeholder="업체 수 입력"
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        개
                      </Body>
                    }
                    onChange={e => {
                      onChange(changeNumberInput(e));
                    }}
                  />
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <Label size="m" color="gray600">
                사내 협력업체 근로자 수
              </Label>
              <Controller
                name="associatedInternalCorpEmployeeCount"
                control={control}
                render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                  <TextField.Single
                    {...field}
                    isFullWidth
                    placeholder="근로자 수 입력"
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        명
                      </Body>
                    }
                    onChange={e => {
                      onChange(changeNumberInput(e));
                    }}
                  />
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <Label size="m" color="gray600">
                사내 총 근로자 수
              </Label>
              <Controller
                name="employeeNumber"
                control={control}
                render={({ field: { onChange, ...field }, fieldState: { error } }) => (
                  <TextField.Single
                    {...field}
                    isFullWidth
                    placeholder="근로자 수 입력"
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        명
                      </Body>
                    }
                    onChange={e => {
                      onChange(changeNumberInput(e));
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className="flex-center gap-x-3">
            <ActionButton type="button" variant="tonal-gray" size="l" onClick={preventStep}>
              이전 단계
            </ActionButton>
            <ActionButton type="submit" variant="filled" size="l" disabled={!isValid}>
              다음 단계
            </ActionButton>
          </div>
        </FormItem>
      </form>
    </FormProvider>
  );
};
