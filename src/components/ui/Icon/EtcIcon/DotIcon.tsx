import { type ColorKey, colors } from '@/types/theme/color';

interface DotIconProps {
  color?: ColorKey | string;
}

export default function DotIcon({ color = 'black' }: DotIconProps) {
  const isColorKey = (color: ColorKey | string): color is ColorKey => {
    return color in colors;
  };
  const fillValue = isColorKey(color) ? `var(${colors[color]})` : color;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill={fillValue} />
    </svg>
  );
}

export const DotIconRed = () => <DotIcon color="red500" />;
export const DotIconYellow = () => <DotIcon color="#F4C624" />;
export const DotIconGreen = () => <DotIcon color="green500" />;
