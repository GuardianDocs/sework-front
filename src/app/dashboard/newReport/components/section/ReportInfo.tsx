import ActionButton from '@/components/ui/ActionButton/ActionButton';
import DropdownButton from '@/components/ui/DropdownButton/DropdownButton';
import TextField from '@/components/ui/TextField/TextField';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { Controller, useFormContext } from 'react-hook-form';
import { REPORT_TYPE } from '../../constants';
import { FormItem } from '../FormItem';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const ReportInfo = () => {
  const { control, setValue } = useFormContext<RegisterCompanyAssessmentAdditionalInfoRequest>();

  const handleChangeDate = ([startAt, endAt]: [string, string]) => {
    setValue('startAt', startAt, { shouldValidate: true, shouldDirty: true });
    setValue('endAt', endAt, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <>
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
        />
      </FormItem>
      <FormItem title="평가하고자 하는 업종은 어떻게 되시나요?">
        <Controller
          name="sectorId"
          control={control}
          render={({ field }) => (
            <div className="flex gap-x-2 w-full">
              <div className="flex-1">
                <TextField.Single isFullWidth readOnly value={field.value} />
              </div>
              <ActionButton variant="tonal-blue" size="m" type="button">
                업종 검색
              </ActionButton>
            </div>
          )}
        />
      </FormItem>
    </>
  );
};
