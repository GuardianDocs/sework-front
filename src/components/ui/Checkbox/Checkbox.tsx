import { cn } from '@/lib/utils';
import { HTMLAttributes, InputHTMLAttributes, forwardRef } from 'react';
import Icon from '../Icon/Icon';

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
          className="clip-rect-0 peer absolute m-[-1px] h-0 w-0 overflow-hidden whitespace-nowrap border-none p-0"
          {...props}
        />
        <div
          className={cn(
            'rounded-4 mr-8 box-content flex items-center justify-center transition-colors border-1', // base style
            'peer-hover:bg-primary-03 peer-hover:border-primary-01', // peer-hover:
            'peer-checked:[&_svg]:text-text-inverted-active peer-checked:!bg-primary-01 peer-checked:border-primary-01 peer-checked:[&_svg]:scale-100', // peer-checked:
            'peer-disabled:!border-grey-80 peer-disabled:!bg-grey-90 peer-disabled:[&_svg]:text-text-disabled' // peer-disabled:
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Icon icon="check" className="text-white" />
        </div>
        <span
          className={cn('select-none', {
            'text-text-disabled': disabled,
          })}
        >
          {children}
        </span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
