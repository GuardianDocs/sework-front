'use client';

import TextareaAutosize from 'react-textarea-autosize';
import styles from './TextField.module.scss';
import Icon from '@/components/ui/Icon/Icon';

interface TextFieldProps {
  sizeVariant?: 's' | 'm';
  isFullWidth?: boolean;
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
  type: 'single' | 'multi' | 'trigger'
) => {
  const sizeStyle = styles[sizeVariant] || '';
  const fullWidthStyle = isFullWidth ? styles.fullWidth : '';

  const textFieldStyleMap = {
    single: styles.textFieldSingle,
    multi: styles.textFieldMulti,
    trigger: styles.textFieldTrigger,
  };

  const textFieldStyle = textFieldStyleMap[type] || '';

  return `${textFieldStyle} ${sizeStyle} ${fullWidthStyle} focus:ring-0 focus:ring-offset-0`;
};

const TextField = {
  Single: ({ sizeVariant = 's', isFullWidth, ...props }: TextFieldSingleProps) => (
    <input className={getCommonClassNames(sizeVariant, isFullWidth, 'single')} {...props} />
  ),
  Multi: ({
    sizeVariant = 's',
    isFullWidth,
    placeholder,
    disabled,
    defaultValue,
    value,
    onChange,
    ...props
  }: TextFieldMultiProps) => (
    <TextareaAutosize
      cacheMeasurements
      className={getCommonClassNames(sizeVariant, isFullWidth, 'multi')}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      {...props}
    />
  ),
  Trigger: ({ sizeVariant = 's', isFullWidth, defaultValue, ...props }: TextFieldTriggerProps) => (
    <div className={getCommonClassNames(sizeVariant, isFullWidth, 'trigger')} {...props}>
      <div className="flex flex-grow">{defaultValue}</div>
      <div className="flex self-start">
        <Icon icon="edit" />
      </div>
    </div>
  ),
};

export default TextField;
