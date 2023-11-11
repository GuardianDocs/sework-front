'use client';

import Headline from '@/components/typography/Headline/Headline';
import DropdownButton, { DropdownOption } from '../ui/DropdownButton/DropdownButton';
import { useEffect, useState } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
  //TODO: 테스트 후 삭제
  const dummyData = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
      completed: true,
    },
    {
      value: '3',
      label: '3',
    },
  ];
  const [optionList, setOptionList] = useState<DropdownOption[]>([]);

  useEffect(() => {
    // 2초 후에 setOptionList에 dummyData를 할당
    setTimeout(() => {
      setOptionList(dummyData);
    }, 2);
  });

  return (
    <section className="p-10">
      <div className="flex justify-center">
        <Headline size="m" color="red300">
          주요기능
        </Headline>
        <DropdownButton options={optionList} onSelected={() => {}} />
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
};

export default Features;
