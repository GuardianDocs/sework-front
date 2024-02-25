'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

import reportImage from '@/assets/images/evaluation_gray_s.svg';
import { Title } from '@/components/typography';
import Icon from '@/components/ui/Icon/Icon';

type VersionCardProps = {
  open: boolean;
};

const VersionCard = ({ open }: VersionCardProps) => {
  return (
    <button
      className={cn('flex gap-x-3 bg-gray-50 rounded-s text-start', open ? 'p-[16px_10px_16px_16px]' : 'px-1 py-4')}
    >
      <Image src={reportImage} alt="report" width={36} height={36} />
      <div className="flex-1 self-stretch flex gap-x-1 items-center">
        <div className="flex-1 self-stretch flex flex-col justify-center">
          <Title size="xs" color="gray600">
            Version 1
          </Title>
          <Title size="xs" color="gray600">{`(2024-03-17)`}</Title>
        </div>
        <Icon icon="chevronRight" className="text-gray-500" />
      </div>
    </button>
  );
};

export default VersionCard;
