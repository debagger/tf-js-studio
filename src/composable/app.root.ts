import { ITopMenuRoot } from './app.topmenu';
import { getMenu } from './app.topmenu.default';

export interface IApplicationCore {
  useTopMenu: () => ITopMenuRoot;
}

export function useApplication(): IApplicationCore {
  return {
    useTopMenu: function () {
      return getMenu();
    },
  };
}
