import { toast as toastOrg, ToastOptions as ToastOptionsOrg } from 'react-toastify';

import { CompleteSIcon, FailSIcon, WarningSIcon } from '../Icon/EtcIcon';
import { Body } from '@/components/typography';

export type ToastType = 'success' | 'danger' | 'warning' | 'info';

export type ToastProps = {
  type: ToastType;
  text?: string;
};

const toastIcon = {
  success: <CompleteSIcon />,
  danger: <FailSIcon />,
  warning: <WarningSIcon />,
};

export const Toast = ({ type, text }: ToastProps) => {
  return (
    <div className="flex gap-x-1 pl-[14px]">
      {type !== 'info' && toastIcon[type]}
      <Body size="m" color="white">
        {text}
      </Body>
    </div>
  );
};

type ToastOptions = ToastOptionsOrg;

export const toast = {
  success: (text?: string, options?: ToastOptions) => {
    toastOrg.success(<Toast type="success" text={text} />, {
      containerId: 'root_container',
      ...(options || {}),
    });
  },
  warning: (text?: string, options?: ToastOptions) => {
    toastOrg.warning(<Toast type="warning" text={text} />, {
      containerId: 'root_container',
      ...(options || {}),
    });
  },
  danger: (text?: string, options?: ToastOptions) => {
    toastOrg.error(<Toast type="danger" text={text} />, {
      containerId: 'root_container',
      ...(options || {}),
    });
  },
  info: (text?: string, options?: ToastOptions) => {
    toastOrg.info(<Toast type="info" text={text} />, {
      containerId: 'root_container',
      ...(options || {}),
    });
  },
};

// const CustomToastIcon = (size: ToastSize, icon: ToastIcon) => {
//   return <div className={toastSize[size]}>{icon}</div>;
// };
