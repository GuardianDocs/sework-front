import Title from '@/components/typography/Title/Title';
import { useRouter } from 'next/navigation';

interface StepProps {
  number: number;
  label: string;
  active: boolean;
  selected: boolean;
  url: string;
}

const FIRST_STEP = 1;
const LAST_STEP = 4;

const Step: React.FC<StepProps> = ({ number, label, active, selected, url }) => {
  const router = useRouter();

  const baseBgColor = active ? 'bg-white' : 'bg-gray-50';
  const bgColor = selected ? 'bg-blue-500' : 'bg-gray-100';
  const textColor = selected ? 'white' : 'gray400';
  const stepBorderColor = selected ? 'bg-blue-500' : 'bg-blue-200';
  const labelColor = selected ? 'gray800' : 'gray400';
  const marginLeft = number === FIRST_STEP ? '' : '-ml-px';

  let borderRound = '';
  if (number === FIRST_STEP) borderRound = 'rounded-[8px_0px_0px_0px]';
  else if (number === LAST_STEP) borderRound = 'rounded-[0px_8px_0px_0px]';

  const borderBottomWidth = number === LAST_STEP ? 'w-[300px]' : 'w-[302px]';

  const isClickable = active && !selected;

  const clickableCursor = isClickable ? 'cursor-pointer' : '';

  const handleClickStep = () => {
    if (isClickable) router.push(url);
  };

  return (
    <div
      className={`flex w-[300px] items-center gap-3 px-6 py-4 relative ${baseBgColor} ${marginLeft} border-x border-t border-solid border-gray-200 ${borderRound} ${clickableCursor}`}
      onClick={handleClickStep}
    >
      <div className={`relative w-[32px] h-[32px] ${bgColor} rounded-[16px]`}>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 whitespace-nowrap">
          <Title size="s" color={textColor}>
            {number}
          </Title>
        </div>
      </div>
      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div className={`relative w-fit mt-[-1.00px] whitespace-nowrap`}>
          <Title size="m" color={labelColor}>
            {label}
          </Title>
        </div>
      </div>
      {active ? (
        <div className={`absolute ${borderBottomWidth} h-[3px] top-[61px] left-[-1px] ${active && stepBorderColor}`} />
      ) : (
        <div className={`absolute ${borderBottomWidth} h-[1px] top-[63px] left-[-1px] bg-gray-200`} />
      )}
    </div>
  );
};

interface StepListProps {
  steps: StepProps[];
}

const StepList: React.FC<StepListProps> = ({ steps }) => {
  return (
    <div className="relative inline-flex items-start">
      {steps.map(step => (
        <Step key={step.number} {...step} />
      ))}
    </div>
  );
};

export default StepList;
