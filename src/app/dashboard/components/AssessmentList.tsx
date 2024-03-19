'use client';
import { CardButton } from '@/components/ui/CardButton/CardButton';
import { useGetAssessmentList } from '../hooks/useGetAssessmentList';
import { ReportType } from '../page';
import { Body, Title } from '@/components/typography';
import { Popover, Transition } from '@headlessui/react';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { DatePicker } from 'antd';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import dayjs from 'dayjs';
import Icon from '@/components/ui/Icon/Icon';

type AssessmentListProps = {
  selectedAssessment: ReportType;
  onClickAssessment: (report?: number) => void;
};

const { RangePicker } = DatePicker;

type FilterType = {
  type: string[] | null;
  status: string[] | null;
  date: string[] | null;
};

export const AssessmentList = ({ selectedAssessment, onClickAssessment }: AssessmentListProps) => {
  const [filter, setFilter] = useState<FilterType>({
    type: null,
    status: null,
    date: null,
  });

  const { data: assessmentList, isLoading } = useGetAssessmentList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleClickAssessmentType = (type: string) => {
    if (!filter.type || !filter.type?.includes(type)) {
      setFilter({ ...filter, type: [...(filter.type || []), type] });
    } else {
      if (filter.type.length === 1) {
        setFilter({ ...filter, type: null });
      } else {
        setFilter({ ...filter, type: filter.type?.filter(t => t !== type) });
      }
    }
  };

  const handleClickAssessmentStatus = (status: string) => {
    if (!filter.status || !filter.status?.includes(status)) {
      setFilter({ ...filter, status: [...(filter.status || []), status] });
    } else {
      if (filter.status.length === 1) {
        setFilter({ ...filter, status: null });
      } else {
        setFilter({ ...filter, status: filter.status?.filter(s => s !== status) });
      }
    }
  };

  const handleClickRemoveFilter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    filterType: 'type' | 'status'
  ) => {
    e.stopPropagation();
    setFilter({ ...filter, [filterType]: null });
  };

  return (
    <div className="flex flex-col w-full gap-y-3 overflow-auto">
      <Title size="m" color="gray800">
        진행한 평가
      </Title>
      <div className="flex gap-x-2 items-center">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="outline-0">
                <button
                  className={cn(
                    'flex gap-x-1 items-center p-[6px_8px_6px_12px] rounded-small bg-gray-50 hover:bg-gray-100 transition-all',
                    filter.type ? 'bg-blue-50 hover:bg-blue-100' : ''
                  )}
                >
                  <Body size="s" color={filter.type ? 'blue500' : 'gray600'}>
                    {filter.type
                      ? `${filter.type[0]}${filter.type.length > 1 ? ` 외 ${filter.type.length - 1}` : ''}`
                      : '평가 기준'}
                  </Body>
                  <button onClick={e => (filter.type ? handleClickRemoveFilter(e, 'type') : null)}>
                    <Icon
                      icon={filter.type ? 'close' : 'chevronDown'}
                      className={cn('transition-all w-5 h-5', open ? 'rotate-180' : '')}
                    />
                  </button>
                </button>
              </Popover.Button>
              <Transition
                show={open}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel>
                  <div className="absolute top-full left-0 mt-1 border border-gray-200 rounded-small p-2 bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.15)] flex flex-col gap-y-2 w-fit">
                    <Checkbox
                      onClick={() => {
                        handleClickAssessmentType('최초평가');
                      }}
                      checked={filter.type?.includes('최초평가')}
                    >
                      최초평가
                    </Checkbox>
                    <Checkbox
                      onClick={() => {
                        handleClickAssessmentType('수시평가');
                      }}
                      checked={filter.type?.includes('수시평가')}
                    >
                      수시평가
                    </Checkbox>
                    <Checkbox
                      onClick={() => {
                        handleClickAssessmentType('정기평가');
                      }}
                      checked={filter.type?.includes('정기평가')}
                    >
                      정기평가
                    </Checkbox>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="outline-0">
                <button
                  className={cn(
                    'flex gap-x-1 items-center p-[6px_8px_6px_12px] rounded-small bg-gray-50 hover:bg-gray-100 transition-all',
                    filter.status ? 'bg-blue-50 hover:bg-blue-100' : ''
                  )}
                >
                  <Body size="s" color={filter.status ? 'blue500' : 'gray600'}>
                    {filter.status
                      ? `${filter.status[0]}${filter.status.length > 1 ? ` 외 ${filter.status.length - 1}` : ''}`
                      : '평가 현황'}
                  </Body>
                  <button onClick={e => (filter.type ? handleClickRemoveFilter(e, 'status') : null)}>
                    <Icon
                      icon={filter.type ? 'close' : 'chevronDown'}
                      className={cn('transition-all w-5 h-5', open ? 'rotate-180' : '')}
                    />
                  </button>
                </button>
              </Popover.Button>
              <Transition
                show={open}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel>
                  <div className="absolute top-full left-0 mt-1 border border-gray-200 rounded-small p-2 bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.15)] flex flex-col gap-y-2 w-fit">
                    <Checkbox
                      onClick={() => {
                        handleClickAssessmentStatus('평가 중');
                      }}
                      checked={filter.status?.includes('평가 중')}
                    >
                      평가 중
                    </Checkbox>
                    <Checkbox
                      onClick={() => {
                        handleClickAssessmentStatus('평가 완료');
                      }}
                      checked={filter.status?.includes('평가 완료')}
                    >
                      평가 완료
                    </Checkbox>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <div
          className={cn(
            'py-[2px] flex items-center pl-3 rounded-small bg-gray-50 transition-all hover:bg-gray-100',
            filter.date ? 'bg-blue-50 hover:bg-blue-100' : ''
          )}
        >
          <Body size="s" color={filter.date ? 'blue500' : 'gray600'}>
            평가 시작일
          </Body>
          <RangePicker
            picker="month"
            variant="borderless"
            placeholder={['연도/달', '연도/달']}
            className={cn('w-[200px]', filter.date ? 'text-blue-500' : '')}
            onChange={date => {
              if (date) {
                setFilter({ ...filter, date: date.map(d => dayjs(d).format('YYYY-MM')) });
              } else {
                setFilter({ ...filter, date: null });
              }
            }}
          />
        </div>
      </div>
      {assessmentList?.data?.companyAssessmentList?.map(assessment => (
        <CardButton
          key={assessment.assessmentId}
          title={`version ${assessment.title} (${assessment.createdAt}) - ${assessment.assessmentId}`}
          subContents={`${assessment.type} | ${assessment.supervisor} | ${assessment.sector}`}
          updatedAt={`최종 수정 ${assessment.updatedAt}`}
          actived={selectedAssessment === assessment.assessmentId}
          onClick={() => {
            onClickAssessment(assessment.assessmentId);
          }}
        />
      ))}
    </div>
  );
};
