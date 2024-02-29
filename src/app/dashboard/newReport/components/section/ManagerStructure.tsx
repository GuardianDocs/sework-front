import { Title } from '@/components/typography';
import { Line } from '../Line';
import { OrgCard } from '../OrgCard';

export const ManagerStructure = () => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <Title size="l" color="gray800">
        안전보건체계관리
      </Title>
      <div className="min-w-[1200px] bg-gray-50 rounded-lg py-10 px-[30px]">
        <div className="grid grid-cols-6 ">
          <OrgCard title="사업주" className="col-start-2 z-10" titleClassName="z-10 bg-red-100 rounded-t-small">
            <Line.Vertical className="left-0 h-[50%] bottom-0" />
            <OrgCard.Button />
          </OrgCard>
          <Line className="col-start-1">
            <Line.TopLeft className="row-start-2 col-start-2" />
          </Line>
          <Line>
            <Line.BottomRight />
            <Line.BottomLeft />
            <Line.Vertical />
          </Line>
          <OrgCard
            title="산업안전보건위원회"
            className="min-h-[80px] flex-center"
            titleClassName="z-10 bg-blue-200 rounded-[4px]"
          >
            <Line.Horizontal className="w-3 left-0" />
          </OrgCard>

          <OrgCard
            title="안전보건총괄책임자"
            className="min-h-[80px] col-start-1"
            titleClassName="bg-blue-200 rounded-t-small"
          >
            <OrgCard.Button />
          </OrgCard>

          <OrgCard title="안전보건관리책임자" titleClassName="bg-blue-200 rounded-t-small">
            <OrgCard.Button />
          </OrgCard>
          <Line className="min-h-[80px] col-start-1">
            <Line.TopLeft className="row-start-2 col-start-2" />
          </Line>
          <Line>
            <Line.BottomRight />
            <Line.BottomLeft />
            <Line.Vertical />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
            <Line.Horizontal />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
            <Line.Horizontal />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
            <Line.Horizontal />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
          </Line>
          <OrgCard title="안전보건조정자" className="min-h-[80px]" titleClassName="bg-blue-200 rounded-t-small">
            <OrgCard.Button />
          </OrgCard>
          <OrgCard title="관리감독자" titleClassName="bg-blue-200 rounded-t-small">
            <OrgCard.Button />
          </OrgCard>
          <OrgCard title="안전관리자" titleClassName="bg-blue-200 rounded-t-small">
            <OrgCard.Button />
          </OrgCard>
          <OrgCard title="보건관리자" titleClassName="bg-blue-200 rounded-t-small">
            <OrgCard.Button />
          </OrgCard>
          <OrgCard title="산업보건의" titleClassName="bg-blue-200 rounded-t-small">
            <OrgCard.Button />
          </OrgCard>
          <OrgCard title="안전보건관리담당자" titleClassName="bg-blue-200 rounded-t-small">
            <OrgCard.Button />
          </OrgCard>
          <Line className="col-start-2 min-h-[40px]">
            <Line.Vertical />
          </Line>
          <OrgCard
            title="작업자"
            className="min-h-[80px] flex-center col-start-2"
            titleClassName="z-10 bg-gray-200 rounded-[4px]"
          >
            <Line.Vertical className="left-0 top-0 h-[50%]" />
          </OrgCard>
        </div>
      </div>
    </div>
  );
};
