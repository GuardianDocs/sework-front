import React, { useState, useRef, useEffect } from 'react';
import styles from './DropdownButton.module.scss';
import Icon from '../Icon/Icon';
import Body from '@/components/typography/Body/Body';

export interface DropdownOption {
  label: string;
  value: string;
  completed?: boolean;
}

interface Props {
  options: DropdownOption[];
  onSelected: (option: DropdownOption) => void;
  disabled?: boolean;
  width?: string;
  isFullWidth?: boolean;
}

export default function DropdownButton({ options, onSelected, disabled, width, isFullWidth }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const containerStyle = {
    width: isFullWidth ? '100%' : width,
  };

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelected(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdownContainer} style={containerStyle}>
      <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)} disabled={disabled}>
        <Body size="m" color={selectedOption ? 'gray800' : 'gray300'} className="flex flex-1 whitespace-nowrap">
          {selectedOption ? selectedOption.label : '선택해주세요'}
        </Body>
        {isOpen ? (
          <Icon icon="chevron-up-m" size={24} color="gray800" />
        ) : (
          <Icon icon="chevron-down-s" size={24} color="gray800" />
        )}
      </button>
      {isOpen && (
        <div className={styles.dropdownList}>
          {options?.map(option => (
            <div key={option.value} onClick={() => handleOptionClick(option)} className={styles.dropdownOption}>
              <Body
                size="m"
                color={option.value === selectedOption?.value ? 'blue500' : 'gray800'}
                className="flex flex-1 whitespace-nowrap"
              >
                {option.label}
              </Body>

              {option.completed && (
                <Body size="s" color={option.value === selectedOption?.value ? 'blue300' : 'gray600'}>
                  작성완료
                </Body>
              )}
              {option.value === selectedOption?.value && <Icon icon="check" size={24} color="blue500" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
