import ActionButton from '@/components/ui/ActionButton/ActionButton';
import TextField from '@/components/ui/TextField/TextField';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/Dialog/Dialog';
import { Title } from '@/components/typography';
import Icon from '@/components/ui/Icon/Icon';
import { SelectList, SelectListOption } from '@/components/ui/SelectList';
import { useGetAssessmentCompanySector } from '../hooks/useGetAssessmentCompanySector';
import { useEffect, useMemo, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectorVO } from '@/services';

type SectorSelectProps = {
  selectedSector?: SectorVO;
  onSectorSelect: (sector: SectorVO) => void;
};

export const SectorSelect = ({ selectedSector, onSectorSelect }: SectorSelectProps) => {
  // const lastItemRef = useRef<HTMLDivElement>(null);
  const { isVisible, setRef } = useIntersectionObserver({
    threshold: 0.5,
  });
  const [input, setInput] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sector, setSector] = useState<SelectListOption | undefined>(undefined);
  const { data: sectorResponses, mutate, setSize } = useGetAssessmentCompanySector(searchKeyword);
  const sectorList = useMemo(
    () =>
      sectorResponses?.flatMap(
        res => res.sectorList?.map(el => ({ label: el.title || '', value: el.id || 0 })) || []
      ) || [],
    [sectorResponses]
  );

  const handleChangeKeyword = async () => {
    setSearchKeyword(input);
    await setSize(1);
    await mutate();
  };

  const handleSelectedSector = () => {
    if (sector) {
      const SelectedSectorVO: SectorVO = {
        id: sector.value,
        title: sector.label,
      };
      onSectorSelect(SelectedSectorVO);
    }
  };

  useEffect(() => {
    if (isVisible) {
      setSize(size => size + 1);
    }
  }, [isVisible, setSize]);

  return (
    <div className="flex gap-x-2 w-full">
      <div className="flex-1">
        <TextField.Single isFullWidth readOnly value={selectedSector?.title} />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <ActionButton variant="tonal-blue" size="m" type="button">
            업종 검색
          </ActionButton>
        </DialogTrigger>
        <DialogContent className="max-w-[588px]">
          <form className="flex flex-col items-start gap-3" onSubmit={handleChangeKeyword}>
            <Title color="gray800" size="l">
              평가하고자 하는 업종을 검색해주세요
            </Title>
            <TextField.Single
              placeholder="업종을 검색하세요"
              isFullWidth
              sizeVariant="s"
              style={{ width: '508px' }}
              rightElement={
                <button>
                  <Icon icon="search" className="text-gray-800 absolute top-2 right-[10px] " />
                </button>
              }
              inputClassName="!pr-10"
              value={input}
              onChange={e => setInput(e.currentTarget.value)}
            />
            <SelectList
              className="h-[232px]"
              options={sectorList}
              selectedOptionValue={sector?.value}
              onOptionClick={sector => setSector(sector)}
              lastElement={<div ref={setRef} className="flex justify-center w-full h-1"></div>}
            />
          </form>
          <DialogFooter>
            <div className="flex items-start gap-2">
              <DialogClose asChild>
                <ActionButton type="button" variant="tonal-gray" size="l">
                  취소
                </ActionButton>
              </DialogClose>
              <DialogClose asChild>
                <ActionButton type="button" variant="filled" size="l" onClick={handleSelectedSector}>
                  업종 선택
                </ActionButton>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
