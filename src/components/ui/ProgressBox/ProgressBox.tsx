import Title from '@/components/typography/Title/Title';

interface ProgressBoxProps {
  currentStep?: number;
  completedStep?: number[];
}

export default function ProgressBox({ currentStep, completedStep }: ProgressBoxProps) {
  return (
    <div className="relative inline-flex items-start">
      <div className="flex w-[300px] items-center gap-[12px] px-[24px] py-[16px] relative bg-white rounded-[8px_0px_0px_0px] border border-solid border-gray-200">
        <div className="relative w-[34px] h-[32px]">
          <div className="relative w-[32px] h-[32px] bg-blue-500 rounded-[16px]">
            <div className="left-[12px] text-white absolute top-[6px] font-title-s font-[number:var(--title-s-font-weight)] text-[length:var(--title-s-font-size)] text-center tracking-[var(--title-s-letter-spacing)] leading-[var(--title-s-line-height)] whitespace-nowrap [font-style:var(--title-s-font-style)]">
              1
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-title-m font-[number:var(--title-m-font-weight)] text-gray-800 text-[length:var(--title-m-font-size)] tracking-[var(--title-m-letter-spacing)] leading-[var(--title-m-line-height)] whitespace-nowrap [font-style:var(--title-m-font-style)]">
            사전준비
          </div>
        </div>
        <div className="absolute w-[301px] h-[3px] top-[61px] left-0 bg-blue-500" />
      </div>
      <div className="flex w-[301px] items-center gap-[12px] px-[24px] py-[16px] relative -ml-px bg-gray-50 border border-solid border-gray-200">
        <div className="relative w-[34px] h-[32px]">
          <div className="relative w-[32px] h-[32px] bg-gray-100 rounded-[16px]">
            <div className="absolute top-[6px] left-[12px] font-title-s font-[number:var(--title-s-font-weight)] text-gray-400 text-[length:var(--title-s-font-size)] text-center tracking-[var(--title-s-letter-spacing)] leading-[var(--title-s-line-height)] whitespace-nowrap [font-style:var(--title-s-font-style)]">
              2
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-title-m font-[number:var(--title-m-font-weight)] text-gray-400 text-[length:var(--title-m-font-size)] tracking-[var(--title-m-letter-spacing)] leading-[var(--title-m-line-height)] whitespace-nowrap [font-style:var(--title-m-font-style)]">
            유해 위험요인 파악
          </div>
        </div>
      </div>
      <div className="flex w-[301px] items-center gap-[12px] px-[24px] py-[16px] relative -ml-px bg-gray-50 border border-solid border-gray-200">
        <div className="relative w-[34px] h-[32px]">
          <div className="relative w-[32px] h-[32px] bg-gray-100 rounded-[16px]">
            <div className="absolute top-[6px] left-[12px] font-title-s font-[number:var(--title-s-font-weight)] text-gray-400 text-[length:var(--title-s-font-size)] text-center tracking-[var(--title-s-letter-spacing)] leading-[var(--title-s-line-height)] whitespace-nowrap [font-style:var(--title-s-font-style)]">
              3
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-title-m font-[number:var(--title-m-font-weight)] text-gray-400 text-[length:var(--title-m-font-size)] tracking-[var(--title-m-letter-spacing)] leading-[var(--title-m-line-height)] whitespace-nowrap [font-style:var(--title-m-font-style)]">
            위험성 수준 판단
          </div>
        </div>
      </div>
      <div className="flex w-[301px] items-center gap-[12px] px-[24px] py-[16px] relative -ml-px bg-gray-50 rounded-[0px_8px_0px_0px] border border-solid border-gray-200">
        <div className="relative w-[34px] h-[32px]">
          <div className="relative w-[32px] h-[32px] bg-gray-100 rounded-[16px]">
            <div className="left-[11px] text-gray-400 absolute top-[6px] font-title-s font-[number:var(--title-s-font-weight)] text-[length:var(--title-s-font-size)] text-center tracking-[var(--title-s-letter-spacing)] leading-[var(--title-s-line-height)] whitespace-nowrap [font-style:var(--title-s-font-style)]">
              4
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-title-m font-[number:var(--title-m-font-weight)] text-gray-400 text-[length:var(--title-m-font-size)] tracking-[var(--title-m-letter-spacing)] leading-[var(--title-m-line-height)] whitespace-nowrap [font-style:var(--title-m-font-style)]">
            감소대책 수립
          </div>
        </div>
      </div>
    </div>
  );
}
