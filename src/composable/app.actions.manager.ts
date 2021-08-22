import { computed } from 'vue';

export interface IAction {
  name: string;
  execute: () => void;
  caption: string;
  description: string;
}

const actions: Record<string, IAction> = {};

export function useActionManager() {
  const registerAction = (action: IAction) => {
    actions[action.name] = action;
  };

  const actionsNamesList = computed(() => Object.keys(actions));

  const getActionContent = (actionName: string) => ({
    name: computed(() => actionName),
    caption: computed(() => actions[actionName]?.caption ?? actionName),
    description: computed(() => actions[actionName]?.description ?? actionName),
  });

  const executeAction = (actionName: string) => actions[actionName]?.execute();

  return {
    registerAction,
    actionsNamesList,
    getActionContent,
    executeAction,
  };
}
