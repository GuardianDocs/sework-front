import { Title } from '@/components/typography';
import { cn } from '@/lib/utils';

type OrgCardProps = {
  title: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
};

export const OrgCard = ({ className, title, titleClassName, children }: OrgCardProps) => {
  return (
    <div className={cn('px-[6px] relative flex-center', className)}>
      <div className="w-[166px] rounded-s flex-col-center">
        <Title size="s" color="gray800" className={cn('w-full text-center py-3', titleClassName)}>
          {title}
        </Title>
        {children}
      </div>
    </div>
  );
};
