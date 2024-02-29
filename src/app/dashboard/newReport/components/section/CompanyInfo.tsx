import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { useFormContext } from 'react-hook-form';
import { FormItem } from '../FormItem';

export const CompanyInfo = () => {
  const { control } = useFormContext<RegisterCompanyAssessmentAdditionalInfoRequest>();
  return (
    <>
      <FormItem title="근로자 구성 및 경력 특성을 선택해주세요." className="flex-1">
        <div className="flex items-center gap-3">
          <Checkbox>여성근로자</Checkbox>
        </div>
      </FormItem>
    </>
  );
};
