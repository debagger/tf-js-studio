export type ITopMenu = ITopMenuItem[];
export type ITopMenuRoot = ITopMenuSubmenu[];

export interface ITopMenuItem {
  type: ITopMenuItemType;
}
export type ITopMenuItemType =
  | '[ActionItem]'
  | '[SubmenuItem]'
  | '[SeparatorItem]';

export interface ITopMenuSeparatorItem {
  type: '[SeparatorItem]';
}

export interface ITopMenuActionItem extends ITopMenuItem {
  type: '[ActionItem]';
  caption: string;
  visible: boolean;
  enabled: boolean;
}

export interface ITopMenuSubmenu extends ITopMenuItem {
  type: '[SubmenuItem]';
  childs: ITopMenuItem[];
  caption: string;
  visible: boolean;
  enabled: boolean;
}

export function separator(): ITopMenuSeparatorItem {
  return { type: '[SeparatorItem]' };
}

export function action(
  caption: string,
  visible = true,
  enabled = true
): ITopMenuActionItem {
  return { type: '[ActionItem]', caption, visible, enabled };
}

export function submenu(
  caption: string,
  childs: ITopMenuItem[],
  visible = true,
  enabled = true
): ITopMenuSubmenu {
  return { type: '[SubmenuItem]', caption, childs, visible, enabled };
}
