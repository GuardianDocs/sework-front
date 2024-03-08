import { Body } from '@/components/typography';
import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

export type RadioProps = {
  parentsClassNames?: string;
  childrenClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ children, disabled, className, childrenClassName, ...props }, ref) => {
    const id = useId();

    return (
      <label
        htmlFor={id}
        className={cn('group relative flex cursor-pointer items-center', { 'cursor-not-allowed': disabled }, className)}
      >
        <input
          id={id}
          ref={ref}
          type="radio"
          disabled={disabled}
          className="clip-rect-0 peer absolute m-[-1px] h-0 w-0 overflow-hidden whitespace-nowrap border-none p-0 focus:outline-none focus:ring-0 focus:ring-offset-0"
          {...props}
        />
        <div
          className={cn(
            'mr-3 bg-white border-gray-200 relative box-border flex h-6 w-6 items-center justify-center rounded-full border-1 transition-colors',
            'group-hover:border-blue-200',
            'peer-disabled:bg-gray-100 peer-disabled:border-gray-200 peer-disabled:[&_div]:bg-input-default-stroke peer-disabled:[&_div]:border-gray-90',
            'peer-checked:[&_div]:opacity-100 peer-checked:border-[7px] peer-checked:border-blue-500',
            'peer-checked:peer-disabled:border-gray-200'
          )}
        >
          <div className="bg-white box-content h-[10px] w-[10px] flex-shrink-0 rounded-full opacity-0 transition-opacity" />
        </div>
        <Body size="m" color="gray800" className="select-none">
          {children}
        </Body>
      </label>
    );
  }
);

Radio.displayName = 'Radio';
