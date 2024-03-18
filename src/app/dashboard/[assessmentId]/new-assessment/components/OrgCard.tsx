import Table from '@/components/ui/Table/Table';
import { Body, Title } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/Dialog/Dialog';
import Icon from '@/components/ui/Icon/Icon';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import TextField from '@/components/ui/TextField/TextField';
import IconButton from '@/components/ui/IconButton/IconButton';
import { CompanyWorker } from '@/services';
import { v4 as uuidv4 } from 'uuid';

type CompaynyWorkerListType = CompanyWorker & { id: string };

type ContextType = {
  workers?: CompaynyWorkerListType[];
  editCompanyWorkers: CompaynyWorkerListType[];
  setEditCompanyWorkers: Dispatch<SetStateAction<CompaynyWorkerListType[]>>;
  onSave?: (workers: CompanyWorker[]) => void;
  onAddOrgData?: () => void;
};

const Context = createContext<ContextType | undefined>(undefined);

type OrgCardProps = {
  workers?: CompaynyWorkerListType[];
  title: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
  required?: boolean;
  onSave?: (workers: CompanyWorker[]) => void;
};

const OrgCard = ({ required, className, workers, title, titleClassName, onSave, children }: OrgCardProps) => {
  const [editCompanyWorkers, setEditCompanyWorkers] = useState<CompaynyWorkerListType[]>([
    { id: uuidv4(), name: '', role: '', department: '' },
  ]);

  useEffect(() => {
    if (workers) {
      setEditCompanyWorkers(workers);
    }
  }, [workers]);

  return (
    <Context.Provider value={{ workers, editCompanyWorkers, setEditCompanyWorkers, onSave }}>
      <div className={cn('px-[6px] relative', className)}>
        <div className="w-[166px] rounded-s flex-col-center z-10">
          <Title size="s" color="gray800" className={cn('w-full text-center py-3', titleClassName)}>
            {title}
            {required && <span className="text-red-500">*</span>}
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
  const context = useContext(Context);

  const workers = context!.workers;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative z-10 w-full p-3 flex-col-center min-h-[64px] border-blue-100 border border-t-0 rounded-b-small bg-white gap-y-3">
          {workers?.map(worker => (
            <div key={worker.id} className="flex-col-center gap-y-1 overflow-ellipsis whitespace-nowrap">
              <div className="flex gap-x-1">
                <Body size="xs" color="gray800">
                  {worker.name}
                </Body>
                <Body size="xs" color="gray800">
                  {worker.role}
                </Body>
              </div>
              <Body size="xs" color="gray600">
                {worker.department}
              </Body>
            </div>
          ))}
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
  const context = useContext(Context);

  const editCompanyWorkers = context!.editCompanyWorkers;

  const handleNewRow = () => {
    console.log(editCompanyWorkers);
    context!.setEditCompanyWorkers([...editCompanyWorkers, { id: uuidv4(), name: '', role: '', department: '' }]);
  };

  const handleSaveData = () => {
    context?.onSave?.(editCompanyWorkers);
  };

  const isValiddate = editCompanyWorkers.every(item => item.name && item.role && item.department);

  return (
    <DialogContent>
      <div className="flex flex-col items-start gap-3 w-[712px]">
        <Title color="gray800" size="xl">
          안전 관리자
        </Title>
        <ActionButton
          className="self-end"
          variant="tonal-blue"
          size="s"
          icon={<Icon icon="lineAdd" className="w-5 h-5" />}
          showIcon="left"
          onClick={handleNewRow}
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
            <ActionButton type="button" variant="filled" size="m" disabled={!isValiddate} onClick={handleSaveData}>
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

  const editCompanyWorkers = context!.editCompanyWorkers;

  const handleChange = (id: string, key: keyof CompanyWorker, value: string) => {
    const newCompanyWorkers = editCompanyWorkers.map(item => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }
      return item;
    });

    context!.setEditCompanyWorkers(newCompanyWorkers);
  };

  const handleDeleteRow = (id: string) => {
    const newCompanyWorkers = editCompanyWorkers.filter(item => item.id !== id);
    context!.setEditCompanyWorkers(newCompanyWorkers);
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
        {editCompanyWorkers.map((item, index) => (
          <Table.Row key={item.id}>
            <Table.Cell>
              <div className="flex items-center justify-center h-[40px] w-9">
                <Body size="m" color="gray800">
                  {index + 1}
                </Body>
              </div>
            </Table.Cell>
            <Table.Cell>
              <TextField.Single isFullWidth onChange={e => handleChange(item.id, 'name', e.target.value)} />
            </Table.Cell>
            <Table.Cell>
              <TextField.Multi
                value={item?.role || ''}
                isFullWidth
                onChange={e => handleChange(item.id, 'role', e.target.value)}
              />
            </Table.Cell>
            <Table.Cell>
              <TextField.Multi
                value={item?.department || ''}
                isFullWidth
                onChange={e => handleChange(item.id, 'department', e.target.value)}
              />
            </Table.Cell>
            <Table.Cell>
              <IconButton
                variant="outline"
                size="m"
                icon="trash"
                onClick={() => handleDeleteRow(item.id)}
                disabled={index === 0}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

OrgCard.Button = OrgCardButton;

export { OrgCard };
