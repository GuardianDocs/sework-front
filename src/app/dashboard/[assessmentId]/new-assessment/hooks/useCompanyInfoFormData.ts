import { useForm } from 'react-hook-form';
import { CompanyInfoType, companyInfoValidationSchema } from '../validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

type UseCompanyInfoFormDataType = {
  data?: CompanyInfoType;
  nextStep: (data: CompanyInfoType) => void;
};

export const useCompanyInfoFormData = ({ data, nextStep }: UseCompanyInfoFormDataType) => {
  const formMethods = useForm<CompanyInfoType>({
    resolver: zodResolver(companyInfoValidationSchema),
    mode: 'all',
  });

  const { reset } = formMethods;

  const handleSaveCompanyInfo = (data: CompanyInfoType) => {
    nextStep(data);
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return {
    formMethods,
    handleSaveCompanyInfo,
  };
};
