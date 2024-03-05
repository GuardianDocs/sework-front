import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { useFormContext } from 'react-hook-form';
import { FormItem } from '../FormItem';
import { DEMOGRAPHY_LIST } from '../../constants';
import { Title } from '@/components/typography';
import { Radio } from '@/components/ui/RadioGroup/RadioGroup';

export const CompanyInfo = () => {
  const { control } = useFormContext<RegisterCompanyAssessmentAdditionalInfoRequest>();
  return (
    <>
      <FormItem
        title={
          <>
            <Title size="l" color="gray800">
              근로자 구성 및 경력 특성을 선택해주세요{' '}
            </Title>
            <Title size="l" color="gray600">
              (중복선택 가능)
            </Title>
          </>
        }
        className="flex-1"
      >
        <div className="grid grid-cols-2 w-full gap-x-6 gap-y-4">
          {DEMOGRAPHY_LIST.map(({ value, text }) => (
            <Checkbox key={value} value={value}>
              {text}
            </Checkbox>
          ))}
        </div>
      </FormItem>
      <FormItem
        title="귀사에서는 근로자 건강검진(건강보험공단 검진 제외)을 별도로 실시하고 있으신가요?"
        className="flex-1"
      >
        <div className="flex gap-x-6">
          <Radio className="w-[180px]">실시하고 있음</Radio>
          <Radio className="w-[180px]">실시하지 않고 있음</Radio>
          <Radio className="w-[180px]">해당사항 없음</Radio>
        </div>
      </FormItem>
      <FormItem title="귀사에서는 작업환경측정을 하고 있으신가요?" className="flex-1">
        <div className="flex gap-x-6">
          <Radio className="w-[180px]">실시하고 있음</Radio>
          <Radio className="w-[180px]">실시하지 않고 있음</Radio>
          <Radio className="w-[180px]">해당사항 없음</Radio>
        </div>
      </FormItem>
      <FormItem title="특별안전교육이 필요한 공정이 있으신가요? (유해물질, 크레인, 압력용기 등)" className="flex-1">
        <div className="flex gap-x-6">
          <Radio className="w-[180px]">있음</Radio>
          <Radio className="w-[180px]">없음</Radio>
        </div>
      </FormItem>
      <FormItem title="귀사에서는 교대작업을 진행하고 있으신가요?" className="flex-1">
        <div className="flex gap-x-6">
          <Radio className="w-[180px]">진행하고 있음</Radio>
          <Radio className="w-[180px]">진행하지 않음</Radio>
        </div>
      </FormItem>
      <FormItem title="귀사는 도급을 실시하고 있는 업무가 있나요?" className="flex-1">
        <div className="flex gap-x-6">
          <Radio className="w-[180px]">있음</Radio>
          <Radio className="w-[180px]">없음</Radio>
        </div>
      </FormItem>
      <FormItem title="귀사에는 작업 표준이 있나요?" className="flex-1">
        <div className="flex gap-x-6">
          <Radio className="w-[180px]">있음</Radio>
          <Radio className="w-[180px]">없음</Radio>
        </div>
      </FormItem>
      <FormItem title="안전작업허가증이 필요한 작업이 있나요?" className="flex-1">
        <div className="flex gap-x-6">
          <Radio className="w-[180px]">있음</Radio>
          <Radio className="w-[180px]">없음</Radio>
        </div>
      </FormItem>
      <FormItem
        title={
          <>
            <Title size="l" color="gray800">
              귀사의 운반수단을 선택해주세요{' '}
            </Title>
            <Title size="l" color="gray600">
              (중복선택 가능)
            </Title>
          </>
        }
        className="flex-1"
      >
        <div className="flex gap-x-6">
          <Checkbox className="w-[180px]">기계</Checkbox>
          <Checkbox className="w-[180px]">인력</Checkbox>
          <Checkbox className="w-[180px]">해당사항 없음</Checkbox>
        </div>
      </FormItem>
    </>
  );
};
