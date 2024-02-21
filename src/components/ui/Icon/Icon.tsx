import { cn } from '@/lib/utils';
import { SVG_ICON_MAPPER } from './constants';

export type IconKey = keyof typeof SVG_ICON_MAPPER;
export const iconKeys = Object.keys(SVG_ICON_MAPPER) as IconKey[];

export interface IconProps {
  icon: IconKey;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  const iconPath = SVG_ICON_MAPPER[icon].path;

  return (
    <div className={cn('w-6 h-6', className)}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {iconPath instanceof Array ? (
          iconPath.map((path, index) => <path key={index} {...path} />)
        ) : (
          <path {...iconPath} />
        )}
      </svg>
    </div>
  );
};

export default Icon;
