import DragAndDropIcon from './DragAndDropIcon';
import EssentialMarkIcon from './EssentialMarkIcon';

const etcIconMap = {
  'drag-and-drop': <DragAndDropIcon />,
  'essential-mark': <EssentialMarkIcon />,
};

export type EtcIconType = keyof typeof etcIconMap;
export const iconKeys = Object.keys(etcIconMap) as EtcIconType[];

export interface EtcIconProps {
  icon: EtcIconType;
}

export default function EtcIcon({ icon }: EtcIconProps) {
  return etcIconMap[icon];
}
