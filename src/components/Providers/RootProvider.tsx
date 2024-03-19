'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/ko_KR';
import 'dayjs/locale/ko';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <ConfigProvider locale={locale}>
      <QueryClientProvider client={queryClient}>
        {/* TODO: NextUI 제거 */}
        <NextUIProvider>{children}</NextUIProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}
