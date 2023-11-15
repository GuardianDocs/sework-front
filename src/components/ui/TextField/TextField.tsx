'use client';

import TextareaAutosize from 'react-textarea-autosize';
import styles from './TextField.module.scss';

interface TextFieldProps {
  sizeVariant?: 's';
  isFullWidth?: boolean;
}

interface TextFieldSingleProps extends React.InputHTMLAttributes<HTMLInputElement>, TextFieldProps {}

interface TextFieldMultiProps extends React.RefAttributes<HTMLTextAreaElement>, TextFieldProps {
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
}

const getCommonClassNames = (sizeVariant: 's', isFullWidth: boolean | undefined, type: 'single' | 'multi') => {
  const sizeStyle = styles[sizeVariant] || '';
  const fullWidthStyle = isFullWidth ? styles.fullWidth : '';
  const textFieldStyle = type === 'single' ? styles.textFieldSingle : styles.textFieldMulti;

  return `${textFieldStyle} ${sizeStyle} ${fullWidthStyle} focus:ring-0 focus:ring-offset-0`;
};

const TextField = {
  Single: ({ sizeVariant = 's', isFullWidth, ...props }: TextFieldSingleProps) => (
    <input className={getCommonClassNames(sizeVariant, isFullWidth, 'single')} {...props} />
  ),
  Multi: ({ sizeVariant = 's', isFullWidth, placeholder, disabled, defaultValue, ...props }: TextFieldMultiProps) => (
    <TextareaAutosize
      cacheMeasurements
      className={getCommonClassNames(sizeVariant, isFullWidth, 'multi')}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      {...props}
    />
  ),
};

export default TextField;
