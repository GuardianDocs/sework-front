'use client';
import { v4 as uuidv4 } from 'uuid';
import { Title } from '@/components/typography';
import { Line } from '../Line';
import { OrgCard } from '../OrgCard';

import { ManagerStructureType, managerStructureValidationSchema } from '../../validations';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import ActionButton from '@/components/ui/ActionButton/ActionButton';

type ManagerStructureProps = {
  data?: ManagerStructureType;
  nextStep: (data: ManagerStructureType) => void;
  preventStep: () => void;
};

export const ManagerStructure = ({ data, nextStep, preventStep }: ManagerStructureProps) => {
  const formMethods = useForm<ManagerStructureType>({
    resolver: zodResolver(managerStructureValidationSchema),
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = formMethods;

  const handleSaveManagerStructure = (data: ManagerStructureType) => {
    nextStep(data);
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSaveManagerStructure)} className="flex-col-center gap-y-12 w-full">
        <div className="flex flex-col gap-y-3 w-full">
          <Title size="l" color="gray800">
            안전보건체계관리
          </Title>

          <div className="min-w-[1200px] bg-gray-50 rounded-lg py-10 px-[30px]">
            <div className="grid grid-cols-6 " id="structure">
              <Controller
                name="roloStructure.owners"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="사업주"
                    className="col-start-2 z-10"
                    titleClassName="z-10 bg-red-100 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                    required
                  >
                    <Line.Vertical className="left-0 h-[50%] bottom-0" />
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />

              <Line className="col-start-1">
                <Line.TopLeft className="row-start-2 col-start-2" />
              </Line>
              <Line>
                <Line.BottomRight />
                <Line.BottomLeft />
                <Line.Vertical />
              </Line>
              <OrgCard
                title="산업안전보건위원회"
                className="min-h-[80px] flex-center"
                titleClassName="z-10 bg-blue-200 rounded-[4px]"
              >
                <Line.Horizontal className="w-3 left-0" />
              </OrgCard>
              <Controller
                name="roloStructure.headOfficer"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="안전보건총괄책임자"
                    className="min-h-[80px] col-start-1"
                    titleClassName="bg-blue-200 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Controller
                name="roloStructure.safetyOfficer"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="안전보건관리책임자"
                    titleClassName="bg-blue-200 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Line className="min-h-[80px] col-start-1">
                <Line.TopLeft className="row-start-2 col-start-2" />
              </Line>
              <Line>
                <Line.BottomRight />
                <Line.BottomLeft />
                <Line.Vertical />
              </Line>
              <Line>
                <Line.TopRight className="row-start-2" />
                <Line.Horizontal />
              </Line>
              <Line>
                <Line.TopRight className="row-start-2" />
                <Line.Horizontal />
              </Line>
              <Line>
                <Line.TopRight className="row-start-2" />
                <Line.Horizontal />
              </Line>
              <Line>
                <Line.TopRight className="row-start-2" />
              </Line>
              <Controller
                name="roloStructure.coordinateOfficer"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="안전보건조정자"
                    className="min-h-[80px]"
                    titleClassName="bg-blue-200 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Controller
                name="roloStructure.supervisor"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="관리감독자"
                    titleClassName="bg-blue-200 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Controller
                name="roloStructure.safetyManager"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="안전관리자"
                    required
                    titleClassName="bg-blue-100 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Controller
                name="roloStructure.healthManager"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="보건관리자"
                    titleClassName="bg-blue-100 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Controller
                name="roloStructure.industrialHealthOfficer"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="산업보건의"
                    titleClassName="bg-blue-100 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Controller
                name="roloStructure.safetyHealthManager"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OrgCard
                    title="안전보건관리담당자"
                    titleClassName="bg-blue-100 rounded-t-small"
                    workers={value?.map(worker => ({ ...worker, id: uuidv4() }))}
                    onSave={data => {
                      onChange(data);
                    }}
                  >
                    <OrgCard.Button />
                  </OrgCard>
                )}
              />
              <Line className="col-start-2 min-h-[40px]">
                <Line.Vertical />
              </Line>
              <OrgCard
                title="작업자"
                className="min-h-[80px] flex-center col-start-2"
                titleClassName="z-10 bg-gray-200 rounded-[4px]"
              >
                <Line.Vertical className="left-0 top-0 h-[50%]" />
              </OrgCard>
            </div>
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
      </form>
    </FormProvider>
  );
};
