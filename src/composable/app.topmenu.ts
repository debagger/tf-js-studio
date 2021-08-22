import { useActionManager } from 'src/composable/app.actions.manager';
const { getActionContent, executeAction } = useActionManager();

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
  execute: () => void;
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

export function action(actionName: string): ITopMenuActionItem {
  const action = getActionContent(actionName);
  const caption = action.caption as unknown as string;
  return {
    type: '[ActionItem]',
    caption,
    execute: () => executeAction(actionName),
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
