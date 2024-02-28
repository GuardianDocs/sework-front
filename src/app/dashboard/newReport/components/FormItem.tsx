import { Title } from '@/components/typography';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type FormItemProps = PropsWithChildren & { title: string; className?: string };

export const FormItem = ({ children, title, className }: FormItemProps) => {
  return (
    <div className={cn('flex flex-col gap-y-3 w-full', className)}>
      <Title size="l" color="gray800">
        {title}
      </Title>
      {children}
    </div>
  );
};
