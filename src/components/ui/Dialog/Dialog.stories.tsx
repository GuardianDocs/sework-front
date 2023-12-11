import type { Meta, StoryObj } from '@storybook/react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog/Dialog';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import Label from '@/components/typography/Label/Label';
import TextField from '@/components/ui/TextField/TextField';
import { Body, Title } from '@/components/typography';
import DropdownButton from '../DropdownButton/DropdownButton';
import Icon from '../Icon/Icon';
import IconButton from '../IconButton/IconButton';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/UI/Dialog',
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const SingleDialog: Story = {
  render: function SingleDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <ActionButton size="s" variant="filled">
            Open
          </ActionButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Dialog Header Title</DialogTitle>
            <DialogDescription>Dialog Header Description</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label>Link</Label>
              <TextField.Single id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
            </div>
            <ActionButton type="submit" size="s" variant="filled" className="px-3">
              <span className="sr-only">Copy</span>
            </ActionButton>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <ActionButton type="button" variant="filled" size="l">
                저장 후 닫기
              </ActionButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Step3Dialog: Story = {
  render: function Step3Dialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <ActionButton size="s" variant="filled">
            Open
          </ActionButton>
        </DialogTrigger>
        <DialogContent className="max-w-[792px]">
          {/* 작성 내용 */}
          <div className="flex max-h-[448px] w-[712px] flex-col items-start gap-8">
            {/* 유해 위험 요인 */}
            <div className="flex flex-col items-start self-stretch gap-3">
              {/* title */}
              <div className="flex items-center self-stretch justify-between">
                <div className="flex items-center flex-grow gap-2">
                  <Title size="l" color="gray800">
                    유해 위험요인 선택
                  </Title>
                  <div>
                    <Title size="l" color="blue500">
                      {Number(1)}
                    </Title>
                    <Title size="l" color="gray300">
                      {' '}
                      /{' '}
                    </Title>
                    <Title size="l" color="gray400">
                      {Number(1)}
                    </Title>
                  </div>
                </div>
                <Label size="s" color="blue500">
                  다음 위험요인으로 바로 이동하세요!
                </Label>
              </div>
              <div className="flex items-start w-full gap-8">
                {/* 드롭다운 */}
                <div className="flex flex-grow">
                  <DropdownButton
                    options={[
                      {
                        value: '1',
                        label: '1',
                      },
                      {
                        value: '2',
                        label: '2',
                      },
                      {
                        value: '3',
                        label: '3',
                      },
                    ]}
                    isFullWidth
                  />
                </div>
                {/* 버튼 */}
                <div className="flex items-center gap-2">
                  <ActionButton variant="tonal-gray" size="m">
                    이전
                  </ActionButton>
                  <ActionButton variant="filled" size="m">
                    다음
                  </ActionButton>
                </div>
              </div>
            </div>
            {/* 현재의 안전보건조치 */}
            <div className="flex flex-col items-start self-stretch gap-3">
              <div className="flex items-start self-stretch justify-between">
                <Title size="l" color="gray800">
                  현재의 안전보건조치
                </Title>
                <ActionButton variant="tonal-gray" size="s" showIcon="left" icon={<Icon icon="line-add" />}>
                  직접 추가
                </ActionButton>
              </div>
              {/* TODO: 존재하지 않는 경우 */}
              <div className="flex flex-col items-start self-stretch gap-3">
                <div className="flex items-center self-stretch justify-center px-3 py-5 bg-white border border-gray-200 border-dashed rounded">
                  <Body size="m" color="gray400" className="text-center">
                    현재 시행하고 있는 안전보건조치를
                    <br />
                    아래 추천 항목의 + 버튼을 눌러 추가하거나 항목을 직접 추가해주세요
                  </Body>
                </div>
              </div>
              {/* TODO: 존재하는 경우 */}
              <div className="flex items-start self-stretch gap-2">
                <TextField.Single defaultValue={'작업 발판 설치'} isFullWidth />
                <IconButton variant="outline" size="m" icon="trash" />
                <div className="inline-flex flex-col h-[40px] items-center justify-center relative rounded-[4px] border border-solid border-gray-200">
                  <Icon icon="chevron-up-s" size={18} />
                  <div className="relative w-[32px] h-px bg-gray-200" />
                  <Icon icon="chevron-down-s" size={18} />
                </div>
              </div>
            </div>
            {/* 표준 안전보건조치 추천 */}
            <div className="flex flex-col items-start self-stretch gap-3">
              {/* 타이틀 */}
              <div className="flex items-center self-stretch justify-between">
                <Title size="l" color="gray600">
                  표준 안전보건조치 추천
                </Title>
                <Icon icon="chevron-up-s" size={24} />
              </div>
              {/* row */}
              <div className="flex items-start self-stretch gap-2">
                <div className="flex items-center flex-grow gap-2 px-3 py-2 rounded bg-gray-50">작업 발판 설치</div>
                <IconButton variant="outline" size="m" icon="line-add" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <ActionButton type="button" variant="filled" size="l">
                저장 후 닫기
              </ActionButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
