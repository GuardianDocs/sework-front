import { IconKey } from '@/components/ui/Icon/Icon';

export type MenuType = {
  text: string;
  href?: string;
  icon?: IconKey;
  subMenu?: MenuType[];
};

export const DASHBOARD_MENU: MenuType[] = [
  {
    text: '평가현황',
    icon: 'home',
    href: '/report',
  },
  {
    text: '위험성 평가',
    icon: 'home',
    subMenu: [
      {
        text: '사전정보 입력',
        href: '/danger/pre-info',
      },
      {
        text: '위험성 평가',
        href: '/danger/evaluation',
      },
      {
        text: '아차사고 관리',
        href: '/danger/near-accident',
      },
      {
        text: '현장사진 평가',
        href: '/danger/photo-evaluation',
      },
    ],
  },
  {
    text: '위험장비 및 유해물질 관리',
    icon: 'home',
    href: '/danger-equipment',
  },
  {
    text: '안전교육 관리',
    icon: 'home',
    href: '/education',
  },
];
