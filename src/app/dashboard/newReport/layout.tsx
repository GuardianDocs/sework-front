import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="pt-12 w-full flex justify-center">
      <div className="min-w-[792px]">{children}</div>
    </div>
  );
}
