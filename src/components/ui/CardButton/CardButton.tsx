import { Body, Title } from '@/components/typography';
import { cn } from '@/lib/utils';
import type { IconKey } from '../Icon/Icon';
import Icon from '../Icon/Icon';

type CardButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon?: IconKey;
  subContents?: React.ReactNode;
  updatedAt?: string;
  actived?: boolean;
};

export const CardButton = ({ icon, title, subContents, updatedAt, actived, ...props }: CardButtonProps) => {
  return (
    <button
      className={cn(
        'transition-all text-start w-full p-6 flex gap-x-3 items-center rounded-lg border border-gray-100 hover:border-blue-200',
        actived && 'border-blue-500 hover:border-blue-500 bg-blue-50'
      )}
      {...props}
    >
      {icon && (
        <div className="flex-center w-9 h-9 bg-blue-200 rounded-full">
          <Icon icon={icon} className="text-white" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-y-2">
        <Title size="l" color="gray800">
          {title}
        </Title>
        {subContents && updatedAt && (
          <div className="flex flex-col gap-y-1">
            {subContents}
            {updatedAt && (
              <Body size="s" color="gray500">
                {updatedAt}
              </Body>
            )}
          </div>
        )}
      </div>
      {actived && <Icon icon="check" className="text-blue-500 w-8 h-8" />}
    </button>
  );
};
