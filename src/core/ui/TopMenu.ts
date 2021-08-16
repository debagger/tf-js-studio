import { IActionBase } from '../actions/action.interface';
import actions from './../actions/actions';

type ExtractKeysOfValueType<T, K> = {
  [I in keyof T]: T[I] extends K ? I : never;
}[keyof T];

type ActionName = ExtractKeysOfValueType<typeof actions, IActionBase>;

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
//eslint
export function action(actionName: ActionName): ITopMenuActionItem {
  const action: IActionBase = actions[actionName];
  const caption = action.caption;
  return {
    type: '[ActionItem]',
    caption,
    enabled: true,
    visible: true,
  };
}

export function submenu(
  caption: string,
  childs: ITopMenuItem[],
  visible = true,
  enabled = true
): ITopMenuSubmenu {
  return { type: '[SubmenuItem]', caption, childs, visible, enabled };
}
