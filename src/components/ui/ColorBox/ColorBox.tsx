import Body from '@/components/typography/Body/Body';
import { type ColorKey } from '@/types/theme/color';
import { DotIconGreen, DotIconRed, DotIconYellow } from '../Icon/EtcIcon/DotIcon';

interface ValueMap {
  [key: string]: {
    dotIcon: React.ReactNode;
    color: ColorKey | string;
    borderColor: string;
    backgroundColor: string;
    label: string;
  };
}

const valueMap: ValueMap = {
  0: {
    dotIcon: <></>,
    color: 'white',
    borderColor: 'border-gray-200',
    backgroundColor: 'bg-white',
    label: '0',
  },
  1: {
    dotIcon: <DotIconGreen />,
    color: 'green600',
    borderColor: 'border-green-200',
    backgroundColor: 'bg-green-50',
    label: '1(소)',
  },
  2: {
    dotIcon: <DotIconGreen />,
    color: 'green600',
    borderColor: 'border-green-200',
    backgroundColor: 'bg-green-50',
    label: '2(소)',
  },
  3: {
    dotIcon: <DotIconGreen />,
    color: 'green600',
    borderColor: 'border-green-200',
    backgroundColor: 'bg-green-50',
    label: '3(소)',
  },
  4: {
    dotIcon: <DotIconYellow />,
    color: 'yellow600',
    borderColor: 'border-yellow-200',
    backgroundColor: 'bg-yellow-50',
    label: '4(중)',
  },
  5: {
    dotIcon: <DotIconYellow />,
    color: 'yellow600',
    borderColor: 'border-yellow-200',
    backgroundColor: 'bg-yellow-50',
    label: '5(중)',
  },
  6: {
    dotIcon: <DotIconYellow />,
    color: 'yellow600',
    borderColor: 'border-yellow-200',
    backgroundColor: 'bg-yellow-50',
    label: '6(중)',
  },
  7: {
    dotIcon: <DotIconRed />,
    color: 'red600',
    borderColor: 'border-red-200',
    backgroundColor: 'bg-red-50',
    label: '7(대)',
  },
  8: {
    dotIcon: <DotIconRed />,
    color: 'red600',
    borderColor: 'border-red-200',
    backgroundColor: 'bg-red-50',
    label: '8(대)',
  },
  9: {
    dotIcon: <DotIconRed />,
    color: 'red600',
    borderColor: 'border-red-200',
    backgroundColor: 'bg-red-50',
    label: '9(대)',
  },
};

export interface ColorBoxProps {
  value: keyof typeof valueMap;
}

export default function ColorBox({ value }: ColorBoxProps) {
  const { color, borderColor, backgroundColor, label, dotIcon } = valueMap[value];

  const border = `border-[1px] border-solid ${borderColor}`;
  const background = `${backgroundColor}`;

  const baseClassName = 'flex w-[80px] px-3 py-2 justify-center items-center gap-1 rounded-[4px]';

  return (
    <div className={`${baseClassName} ${border} ${background}`}>
      {dotIcon}
      <Body size="m" color={color as ColorKey}>
        {label}
      </Body>
    </div>
  );
}
