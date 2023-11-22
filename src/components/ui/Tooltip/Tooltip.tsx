import { Tooltip as NextUiTooltip } from '@nextui-org/react';
import { type OverlayPlacement } from '@nextui-org/aria-utils';
import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement: OverlayPlacement;
  hideArrow?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ content, placement, children, hideArrow = false }) => {
  return (
    <NextUiTooltip
      content={content}
      showArrow={!hideArrow}
      placement={placement}
      classNames={{
        base: ` inline-flex px-4 py-3 flex-col justify-center items-center rounded-[8px] bg-gray-600 text-gray-50 shadow-none`,
        arrow: 'bg-gray-600',
      }}
    >
      <div>{children}</div>
    </NextUiTooltip>
  );
};

export default Tooltip;
