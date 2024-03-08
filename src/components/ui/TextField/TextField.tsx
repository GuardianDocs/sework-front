'use client';

import { Label } from '@/components/typography';
import Icon from '@/components/ui/Icon/Icon';
import { cn } from '@/lib/utils';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './TextField.module.scss';

interface TextFieldProps {
  sizeVariant?: 's' | 'm';
  isFullWidth?: boolean;
  rightElement?: React.ReactNode;
  error?: string;
  inputClassName?: string;
}

interface TextFieldSingleProps extends React.InputHTMLAttributes<HTMLInputElement>, TextFieldProps {}

interface TextFieldMultiProps extends React.RefAttributes<HTMLTextAreaElement>, TextFieldProps {
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface TextFieldTriggerProps extends React.HTMLAttributes<HTMLDivElement>, TextFieldProps {
  defaultValue?: string;
}

const getCommonClassNames = (
  sizeVariant: 's' | 'm',
  isFullWidth: boolean | undefined,
  type: 'single' | 'multi' | 'trigger',
  error?: string,
  inputClassName?: string
) => {
  const sizeStyle = styles[sizeVariant] || '';
  const fullWidthStyle = isFullWidth ? styles.fullWidth : '';

  const textFieldStyleMap = {
    single: styles.textFieldSingle,
    multi: styles.textFieldMulti,
    trigger: styles.textFieldTrigger,
  };

  const textFieldStyle = textFieldStyleMap[type] || '';

  return `${textFieldStyle} ${sizeStyle} ${fullWidthStyle} focus:ring-0 focus:ring-offset-0 ${
    error ? styles.danger : ''
  } ${inputClassName}`;
};

const TextField = {
  Single: ({ sizeVariant = 's', isFullWidth, error, rightElement, inputClassName, ...props }: TextFieldSingleProps) => (
    <div className={cn(isFullWidth && 'w-full')}>
      <div className={cn('relative flex gap-x-2 items-center', isFullWidth && 'w-full')}>
        <input className={getCommonClassNames(sizeVariant, isFullWidth, 'single', error, inputClassName)} {...props} />
        {rightElement}
      </div>
      {error && <ErrorDescription error={error} />}
    </div>
  ),
  Multi: ({
    sizeVariant = 's',
    isFullWidth,
    placeholder,
    disabled,
    defaultValue,
    value,
    onChange,
    error,
    ...props
  }: TextFieldMultiProps) => (
    <div>
      <TextareaAutosize
        cacheMeasurements
        className={getCommonClassNames(sizeVariant, isFullWidth, 'multi', error)}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <ErrorDescription error={error} />}
    </div>
  ),
  Trigger: ({ sizeVariant = 's', isFullWidth, defaultValue, error, ...props }: TextFieldTriggerProps) => (
    <div>
      <div className={getCommonClassNames(sizeVariant, isFullWidth, 'trigger', error)} {...props}>
        <div className="flex flex-grow">{defaultValue}</div>
        <div className="flex self-start">
          <Icon icon="edit" />
        </div>
      </div>
      {error && <ErrorDescription error={error} />}
    </div>
  ),
};

const ErrorDescription = ({ error }: { error: string }) => {
  return (
    <div className="mt-1 flex w-fit gap-x-1">
      <Icon icon="warning" className="w-5 h-5 text-red-500" />
      <Label size="s" color="red500">
        {error}
      </Label>
    </div>
  );
};

export default TextField;
