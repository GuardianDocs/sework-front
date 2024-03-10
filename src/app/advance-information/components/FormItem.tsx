import { Label } from '@/components/typography';
import EtcIcon from '@/components/ui/Icon/EtcIcon/EtcIcon';
import { cn } from '@/lib/utils';
import { PropsWithChildren, ReactNode } from 'react';

type FormItemProps = PropsWithChildren & { title: ReactNode; className?: string; required?: boolean };

export const FormItem = ({ children, title, className, required }: FormItemProps) => {
  return (
    <div className={cn('flex flex-col gap-y-3 w-full', className)}>
      <div className="flex h-5">
        <Label size="s" color="gray600">
          {title}
        </Label>
        {required && <EtcIcon icon="essential-mark" />}
      </div>
      {children}
    </div>
  );
};
