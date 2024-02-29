import { cn } from '@/lib/utils';

type LineProps = {
  className?: string;
  children: React.ReactNode;
};

export const Line = ({ className, children }: LineProps) => (
  <div className={`grid grid-cols-2 grid-rows-2 relative ${className}`}>{children}</div>
);

const LineHorizontal = ({ className }: { className?: string }) => (
  <div className={cn('absolute h-[calc(50%)] w-full border-b border-gray-300 top-[0.5px]', className)} />
);

const LineVertical = ({ className }: { className?: string }) => (
  <div className={cn('absolute w-[calc(50%)] border-r border-gray-300 h-full', className)} />
);

const LineTopLeft = ({ className }: { className?: string }) => (
  <div className={cn('relative', className)}>
    <div className="absolute -top-[0.5px] -left-[0.5px] border-t border-l rounded-tl-small border-gray-300 w-[calc(100%+0.5px)] h-[calc(100%+0.5px)]" />
  </div>
);

const LineBottomRight = ({ className }: { className?: string }) => (
  <div className={cn('relative', className)}>
    <div className="absolute -left-[0.5px] border-b border-r rounded-br-small border-gray-300 w-[calc(100%+0.5px)] h-[calc(100%+0.5px)]" />
  </div>
);

const LineBottomLeft = ({ className }: { className?: string }) => (
  <div className={cn('relative', className)}>
    <div className="absolute -left-[1px] border-b border-l rounded-bl-small border-gray-300 w-[calc(100%+1px)] h-[calc(100%+0.5px)]" />
  </div>
);

const LineTopRight = ({ className }: { className?: string }) => (
  <div className={cn('relative', className)}>
    <div className="absolute -top-[0.5px] -left-[0.5px] border-t border-r rounded-tr-small border-gray-300 w-[calc(100%+0.5px)] h-[calc(100%+0.5px)]" />
  </div>
);

Line.Vertical = LineVertical;
Line.Horizontal = LineHorizontal;
Line.TopLeft = LineTopLeft;
Line.TopRight = LineTopRight;
Line.BottomRight = LineBottomRight;
Line.BottomLeft = LineBottomLeft;
