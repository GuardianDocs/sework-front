import { Title } from '@/components/typography';
import { PropsWithChildren } from 'react';

type FormItemProps = PropsWithChildren & { title: string };

export const FormItem = ({ children, title }: FormItemProps) => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <Title size="l" color="gray800">
        {title}
      </Title>
      {children}
    </div>
  );
};
