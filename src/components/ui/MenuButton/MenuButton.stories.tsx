import type { Meta, StoryObj } from '@storybook/react';

import { iconKeys } from '@/components/ui/Icon/Icon';
import { DASHBOARD_MENU } from '@/constants';
import MenuButton from './MenuButton';

const meta: Meta<typeof MenuButton> = {
  title: 'Design System/UI/Button/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: iconKeys,
      defaultValue: 'home',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuButton>;

export const Menu: Story = {
  args: {
    icon: 'home',
    text: 'MY 메뉴',
  },
};

export const MenuActived: Story = {
  args: {
    icon: 'home',
    text: 'MY 메뉴',
    actived: true,
  },
};

export const MenuDisabled: Story = {
  args: {
    icon: 'home',
    text: 'MY 메뉴',
    disabled: true,
  },
};

export const HasSubMenu: Story = {
  args: {
    icon: 'home',
    text: 'SubMenu 가짐',
    subMenu: DASHBOARD_MENU,
  },
};

export const HasSubMenuActived: Story = {
  args: {
    icon: 'home',
    text: 'SubMenu 가짐',
    subMenu: DASHBOARD_MENU,
    actived: true,
  },
};

export const HasSubMenuDisabled: Story = {
  args: {
    icon: 'home',
    text: 'SubMenu 가짐',
    subMenu: DASHBOARD_MENU,
    actived: true,
    disabled: true,
  },
};

export const SubMenu: Story = {
  args: {
    text: 'Sub Menu',
    menuLevel: 1,
  },
};

export const SubMenuActived: Story = {
  args: {
    text: 'Sub Menu',
    menuLevel: 1,
    actived: true,
  },
};

export const MenuIconOnly: Story = {
  args: {
    text: 'Sub Menu',
    icon: 'home',
    onlyIcon: true,
  },
};

export const MenuIconOnlyActived: Story = {
  args: {
    text: 'Sub Menu',
    icon: 'home',
    onlyIcon: true,
    actived: true,
  },
};
