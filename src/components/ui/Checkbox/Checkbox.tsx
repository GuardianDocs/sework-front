import { cn } from '@/lib/utils';
import { HTMLAttributes, InputHTMLAttributes, forwardRef } from 'react';
import Icon from '../Icon/Icon';
import { Body } from '@/components/typography';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onMouseEnter' | 'onMouseLeave'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, id, disabled, className, onMouseEnter, onMouseLeave, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          'checkbox relative flex cursor-pointer items-center',
          { 'cursor-not-allowed': disabled },
          className
        )}
      >
        <input
          id={id}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className="clip-rect-0 peer absolute m-[-1px] h-0 w-0 overflow-hidden whitespace-nowrap border-none p-0 focus:outline-none focus:ring-0 focus:ring-offset-0"
          {...props}
        />
        <div
          className={cn(
            'w-6 h-6 rounded-[4px] mr-3 box-border flex items-center justify-center transition-colors border-1 border-gray-200', // base style
            'peer-hover:border-blue-200', // peer-hover:
            'peer-checked:[&_svg]:text-white peer-checked:!bg-blue-500 peer-checked:border-none peer-checked:[&_svg]:scale-100', // peer-checked:
            'peer-disabled:!border-gray-200 peer-disabled:!bg-gray-100 peer-disabled:[&_svg]:text-text-disabled' // peer-disabled:
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Icon icon="check" className="w-5 h-5 text-transparent" />
        </div>
        <Body size="m" color="gray800" className="select-none">
          {children}
        </Body>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
