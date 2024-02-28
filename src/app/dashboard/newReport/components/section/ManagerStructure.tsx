import { Title } from '@/components/typography';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Line } from '../Line';
import { OrgCard } from '../OrgCard';

export const ManagerStructure = () => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <Title size="l" color="gray800">
        안전보건체계관리
      </Title>
      <div className="min-w-[1200px] bg-gray-50 rounded-lg py-10 px-[30px]">
        <Tree lineWidth={'1px'} lineColor={'#c3c6cd'} lineBorderRadius={'10px'} label={<div>Root</div>}>
          <TreeNode label={<div>Child 2</div>} />
          <TreeNode label={<div>Child 3</div>}>
            <TreeNode label={<div>Child 3</div>} />
            <TreeNode label={<div>Child 3</div>}>
              <TreeNode label={<div>Child 3</div>} />
            </TreeNode>
            <TreeNode label={<div>Child 3</div>} />
            <TreeNode label={<div>Child 3</div>} />
            <TreeNode label={<div>Child 3</div>} />
            <TreeNode label={<div>Child 3</div>} />
          </TreeNode>
          <TreeNode label={<div>Child 3</div>} />
        </Tree>
        <div className="grid grid-cols-6 auto-rows-[80px]">
          <div className="col-start-2 flex-center border rounded-s">사업주</div>
          <Line className="col-start-1">
            <Line.TopLeft className="row-start-2 col-start-2" />
          </Line>
          <Line>
            <Line.BottomRight />
            <Line.BottomLeft />
            <Line.Horizontal />
          </Line>
          <OrgCard title="산업안전보건위원회" titleClassName="border" />
          <div className="col-start-1 flex-center border rounded-s">안전보건총괄책임자</div>
          <div className="flex-center border rounded-s">안전보건관리책임자</div>
          <Line className="col-start-1">
            <Line.TopLeft className="row-start-2 col-start-2" />
          </Line>
          <Line>
            <Line.BottomRight />
            <Line.BottomLeft />
            <Line.Horizontal />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
            <Line.Vertical />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
            <Line.Vertical />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
            <Line.Vertical />
          </Line>
          <Line>
            <Line.TopRight className="row-start-2" />
          </Line>
          <div className="flex-center border rounded-s">안전보건조정자</div>
          <div className="flex-center border rounded-s">관리감독자</div>
          <div className="flex-center border rounded-s">안전관리자</div>
          <div className="flex-center border rounded-s">보건관리자</div>
          <div className="flex-center border rounded-s">산업보건의</div>
          <div className="flex-center border rounded-s">안전보건관리담당자</div>
          <Line className="col-start-2">
            <Line.Horizontal />
          </Line>
          <div className="flex-center border rounded-s col-start-2">작업자</div>
        </div>
      </div>
    </div>
  );
};
