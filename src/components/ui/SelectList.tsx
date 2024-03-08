import { cn } from '@/lib/utils';
import { Body } from '../typography';
import Icon from './Icon/Icon';
import { ReactNode } from 'react';

export type SelectListOption = {
  label: string;
  value: any;
  completed?: boolean;
};

type SelectListProps = {
  options: SelectListOption[];
  selectedOptionValue: any;
  onOptionClick: (option: SelectListOption) => void;
  className?: string;
  lastElement?: ReactNode;
};

export const SelectList = ({
  options,
  selectedOptionValue,
  onOptionClick,
  className,
  lastElement,
}: SelectListProps) => {
  return (
    <div
      className={cn('p-3 overflow-auto flex flex-col gap-y-2 border rounded-[4px] border-gray-200 w-full', className)}
    >
      {options?.map(option => (
        <div
          key={option.value}
          onClick={() => onOptionClick(option)}
          className="transition-all flex gap-x-1 p-1 cursor-pointer hover:text-blue-200"
        >
          <Body
            size="m"
            color={option.value === selectedOptionValue ? 'blue500' : 'gray800'}
            className="flex-1 self-stretch overflow-ellipsis whitespace-nowrap"
          >
            {option.label}
          </Body>
          {option.value === selectedOptionValue && <Icon icon="check" className="text-blue-500" />}
        </div>
      ))}
      {lastElement}
    </div>
  );
};
