'use client';

import Headline from '@/components/typography/Headline/Headline';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import TextField from '@/components/ui/TextField/TextField';
import Icon from '../ui/Icon/Icon';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features = ({ features }: FeaturesProps) => (
  <section className="p-10">
    <div className="flex justify-center">
      <Headline size="m" color="red300">
        주요기능
      </Headline>
    </div>
    <div className="flex justify-center">
      <TextField.Single placeholder="검색어를 입력하세요" isFullWidth />
    </div>
    <div className="flex justify-center">
      <TextField.Multi placeholder="검색어를 입력하세요" isFullWidth />
    </div>
    <div className="flex justify-center">
      <ActionButton variant="tonal-gray" size="m" showIcon="left" icon={<Icon icon="line-add" />}>
        더보기
      </ActionButton>
      <Icon icon="line-add" color="red100" />
    </div>
    <div className="flex flex-wrap justify-around">
      {features.map((feature, index) => (
        <div key={index} className="flex-1 p-4">
          <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
