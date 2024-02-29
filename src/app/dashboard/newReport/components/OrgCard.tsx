import { Title } from '@/components/typography';
import Icon from '@/components/ui/Icon/Icon';
import { cn } from '@/lib/utils';

type OrgCardProps = {
  title: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
};

const OrgCard = ({ className, title, titleClassName, children }: OrgCardProps) => {
  return (
    <div className={cn('px-[6px] relative', className)}>
      <div className="w-[166px] rounded-s flex-col-center z-10">
        <Title size="s" color="gray800" className={cn('w-full text-center py-3', titleClassName)}>
          {title}
        </Title>
        {children}
      </div>
    </div>
  );
};

const OrgCardButton = () => {
  return (
    <button className="relative z-10 w-full p-3 flex-col-center min-h-[64px] border-blue-100 border border-t-0 rounded-b-small bg-white">
      <div className="absolute flex-center border border-blue-100 rounded-full w-7 h-7 -right-2 -bottom-2 bg-white">
        <Icon icon="edit" className="w-5 h-5 text-gray-600" />
      </div>
    </button>
  );
};

OrgCard.Button = OrgCardButton;

export { OrgCard };
