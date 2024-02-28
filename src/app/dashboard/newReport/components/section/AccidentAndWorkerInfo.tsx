import { Body, Label } from '@/components/typography';
import TextField from '@/components/ui/TextField/TextField';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { Controller, useFormContext } from 'react-hook-form';
import { FormItem } from '../FormItem';

export const AccidentAndWorkerInfo = () => {
  const { control } = useFormContext<RegisterCompanyAssessmentAdditionalInfoRequest>();
  return (
    <>
      <div className="flex w-full gap-x-[72px]">
        <FormItem title="최근 3년간 재해 발생 사례 (건수)" className="flex-1">
          <div className="flex flex-col gap-y-4 flex-1">
            <div className="w-full flex flex-col gap-y-2">
              <Label size="m" color="gray600">
                2023년
              </Label>
              <Controller
                name="lastYearNearAccidentCount"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField.Single
                    isFullWidth
                    placeholder="발생 건수 입력"
                    {...field}
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        건
                      </Body>
                    }
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
                render={({ field, fieldState: { error } }) => (
                  <TextField.Single
                    isFullWidth
                    placeholder="발생 건수 입력"
                    {...field}
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        건
                      </Body>
                    }
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
                render={({ field, fieldState: { error } }) => (
                  <TextField.Single
                    isFullWidth
                    placeholder="발생 건수 입력"
                    {...field}
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        건
                      </Body>
                    }
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
                render={({ field, fieldState: { error } }) => (
                  <TextField.Single
                    isFullWidth
                    placeholder="발생 건수 입력"
                    {...field}
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        건
                      </Body>
                    }
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
                render={({ field, fieldState: { error } }) => (
                  <TextField.Single
                    isFullWidth
                    placeholder="발생 건수 입력"
                    {...field}
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        건
                      </Body>
                    }
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
                render={({ field, fieldState: { error } }) => (
                  <TextField.Single
                    isFullWidth
                    placeholder="발생 건수 입력"
                    {...field}
                    error={error?.message}
                    rightElement={
                      <Body size="m" color="gray800">
                        건
                      </Body>
                    }
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
              render={({ field, fieldState: { error } }) => (
                <TextField.Single
                  isFullWidth
                  placeholder="업체 수 입력"
                  {...field}
                  error={error?.message}
                  rightElement={
                    <Body size="m" color="gray800">
                      개
                    </Body>
                  }
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
              render={({ field, fieldState: { error } }) => (
                <TextField.Single
                  isFullWidth
                  placeholder="근로자 수 입력"
                  {...field}
                  error={error?.message}
                  rightElement={
                    <Body size="m" color="gray800">
                      명
                    </Body>
                  }
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
              render={({ field, fieldState: { error } }) => (
                <TextField.Single
                  isFullWidth
                  placeholder="근로자 수 입력"
                  {...field}
                  error={error?.message}
                  rightElement={
                    <Body size="m" color="gray800">
                      명
                    </Body>
                  }
                />
              )}
            />
          </div>
        </div>
      </FormItem>
    </>
  );
};
