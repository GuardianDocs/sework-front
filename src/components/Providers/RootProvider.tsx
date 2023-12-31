'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: NextUI 제거 */}
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
}
