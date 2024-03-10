import { CompanyWorker } from '@/services';
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export type UseOrgCardDataContextType = {
  roleStructure: { companyWorkers: CompanyWorker[]; setCompanyWorkers: Dispatch<SetStateAction<CompanyWorker[]>> };
};

export const OrgCardDataContext = createContext<UseOrgCardDataContextType | null>(null);

export const useOrgCardData = () => {
  const [companyWorkers, setCompanyWorkers] = useState<CompanyWorker[]>([]);

  const Provider = (
    () =>
    ({ children }: { children: ReactNode }) =>
      OrgCardDataContext.Provider({ value: { roleStructure: { companyWorkers, setCompanyWorkers } }, children })
  )();

  return {
    Provider,
  };
};
