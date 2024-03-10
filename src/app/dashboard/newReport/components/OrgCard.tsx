import Table from '@/components/ui/Table/Table';
import { Body, Title } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/Dialog/Dialog';
import Icon from '@/components/ui/Icon/Icon';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import TextField from '@/components/ui/TextField/TextField';
import IconButton from '@/components/ui/IconButton/IconButton';
import { CompanyWorker } from '@/services';

type OrgCardProps = {
  title: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
};

type ContextType = {
  companyWorkers: CompanyWorker[];
  setCompanyWorkers: Dispatch<SetStateAction<CompanyWorker[]>>;
};

const Context = createContext<ContextType | undefined>(undefined);

const OrgCard = ({ className, title, titleClassName, children }: OrgCardProps) => {
  const [companyWorkers, setCompanyWorkers] = useState<CompanyWorker[]>([{ name: '', role: '', department: '' }]);

  console.log({ companyWorkers });
  return (
    <Context.Provider value={{ companyWorkers, setCompanyWorkers }}>
      <div className={cn('px-[6px] relative', className)}>
        <div className="w-[166px] rounded-s flex-col-center z-10">
          <Title size="s" color="gray800" className={cn('w-full text-center py-3', titleClassName)}>
            {title}
          </Title>
          {children}
        </div>
      </div>
    </Context.Provider>
  );
};

type OrgCardButtonProps = {
  children?: React.ReactNode;
};

const OrgCardButton = ({ children }: OrgCardButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative z-10 w-full p-3 flex-col-center min-h-[64px] border-blue-100 border border-t-0 rounded-b-small bg-white">
          <div className="absolute flex-center border border-blue-100 rounded-full w-7 h-7 -right-2 -bottom-2 bg-white">
            <Icon icon="edit" className="w-5 h-5 text-gray-600" />
          </div>
          {children}
        </button>
      </DialogTrigger>
      <OrgCardDialogContent />
    </Dialog>
  );
};

const OrgCardDialogContent = () => {
  return (
    <DialogContent>
      <div className="flex flex-col items-start gap-3 w-[712px]">
        <Title color="gray800" size="xl">
          안전 관리자
        </Title>
        <ActionButton
          className="self-end"
          variant="tonal-blue"
          size="m"
          icon={<Icon icon="lineAdd" className="w-5 h-5" />}
        >
          새로 추가
        </ActionButton>
        <OrgCardDialogTable />
      </div>
      <DialogFooter>
        <div className="flex items-start gap-2">
          <DialogClose asChild>
            <ActionButton type="button" variant="tonal-gray" size="m">
              취소
            </ActionButton>
          </DialogClose>
          <DialogClose asChild>
            <ActionButton type="button" variant="filled" size="m">
              저장하기
            </ActionButton>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

const OrgCardDialogTable = () => {
  const context = useContext(Context);

  const companyWorkers = context!.companyWorkers;

  const handleChange = (index: number, key: keyof CompanyWorker, value: string) => {
    const newCompanyWorkers = companyWorkers.map((item, i) => {
      if (i === index) {
        return { ...item, [key]: value };
      }
      return item;
    });
    context!.setCompanyWorkers(newCompanyWorkers);
  };

  return (
    <Table className="w-[712px]">
      <Table.Head>
        <Table.Row>
          <Table.Cell style={{ width: '34px', textAlign: 'center' }} />
          <Table.Cell>
            <Title size="s" color="gray800">
              성명
            </Title>
          </Table.Cell>
          <Table.Cell>
            <Title size="s" color="gray800">
              직책
            </Title>
          </Table.Cell>
          <Table.Cell>
            <Title size="s" color="gray800">
              소속부서
            </Title>
          </Table.Cell>
          <Table.Cell />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {companyWorkers.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <div className="flex items-center justify-center h-[40px] w-9">
                <Body size="m" color="gray800">
                  {index + 1}
                </Body>
              </div>
            </Table.Cell>
            <Table.Cell>
              <TextField.Single isFullWidth onChange={() => handleChange(index, 'name', '')} />
            </Table.Cell>
            <Table.Cell>
              <TextField.Multi value={item?.role || ''} isFullWidth onChange={() => handleChange(index, 'name', '')} />
            </Table.Cell>
            <Table.Cell>
              <TextField.Multi
                value={item?.department || ''}
                isFullWidth
                onChange={() => handleChange(index, 'name', '')}
              />
            </Table.Cell>
            <Table.Cell>
              <IconButton variant="outline" size="m" icon="trash" onClick={() => {}} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

OrgCard.Button = OrgCardButton;

export { OrgCard };
