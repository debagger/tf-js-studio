import { IApplicationCore } from './application.interface';
import { getMenu } from './ui/TopMenu.structure';

export function useApplication(): IApplicationCore {
  return {
    useTopMenu: function () {
      return getMenu();
    },
  };
}
