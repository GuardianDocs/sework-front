import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { RegisterCompanyAssessmentAdditionalInfoRequest } from '@/services';
import { useFormContext } from 'react-hook-form';
import { FormItem } from '../FormItem';
import { DEMOGRAPHY_LIST } from '../../constants';

export const CompanyInfo = () => {
  const { control } = useFormContext<RegisterCompanyAssessmentAdditionalInfoRequest>();
  return (
    <>
      <FormItem title="근로자 구성 및 경력 특성을 선택해주세요." className="flex-1">
        <div className="flex items-center gap-3 w-full">
          <div className="grid grid-cols-2 w-full gap-x-6 gap-y-4">
            {DEMOGRAPHY_LIST.map(({ value, text }) => (
              <Checkbox key={value} value={value}>
                {text}
              </Checkbox>
            ))}
          </div>
        </div>
      </FormItem>
    </>
  );
};
