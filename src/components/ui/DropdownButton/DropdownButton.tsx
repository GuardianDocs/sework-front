import React, { useState, useRef, useEffect } from 'react';
import styles from './DropdownButton.module.scss';
import Icon from '../Icon/Icon';
import Body from '@/components/typography/Body/Body';

export interface DropdownOption {
  label: React.ReactNode;
  value: string | number;
  completed?: boolean;
}

interface Props {
  options: DropdownOption[];
  onSelected?: (option: DropdownOption) => void;
  selectedOption?: DropdownOption;
  disabled?: boolean;
  width?: string;
  isFullWidth?: boolean;
  listWidth?: string;
  listMaxHeight?: string;
}

export default function DropdownButton({
  options,
  onSelected,
  selectedOption: externalSelectedOption,
  disabled,
  width,
  isFullWidth,
  listWidth,
  listMaxHeight,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(externalSelectedOption || null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const containerStyle = {
    width: isFullWidth ? '100%' : width,
  };

  const listStyle = {
    width: listWidth,
    maxHeight: listMaxHeight,
  };

  const handleOptionClick = (option: DropdownOption) => {
    setIsOpen(false);
    setSelectedOption(option); // 내부 상태 업데이트
    onSelected && onSelected(option); // 외부 상태 업데이트
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

  useEffect(() => {
    setSelectedOption(externalSelectedOption || null);
  }, [externalSelectedOption]);

  return (
    <div ref={dropdownRef} className={styles.dropdownContainer} style={containerStyle}>
      <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)} disabled={disabled}>
        <Body
          size="m"
          color={selectedOption ? (disabled ? 'gray800' : 'gray800') : 'gray300'}
          className="flex flex-1 whitespace-nowrap"
        >
          {selectedOption ? selectedOption.label : '선택해주세요'}
        </Body>
        {isOpen ? (
          <Icon icon="chevronUp" className="text-gray-800" />
        ) : (
          <Icon icon="chevronDown" className="text-gray-800" />
        )}
      </button>
      {isOpen && (
        <div className={styles.dropdownList} style={listStyle}>
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
              {option.value === selectedOption?.value ? (
                <Icon icon="check" className="text-blue-500" />
              ) : (
                <Icon icon="empty" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
