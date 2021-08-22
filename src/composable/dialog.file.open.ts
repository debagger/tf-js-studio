import { ref } from 'vue';
import { IAction, useActionManager } from './app.actions.manager';

const { registerAction } = useActionManager();

const isOpen = ref(false);

const action: IAction = {
  name: 'file.open',
  caption: 'Open File...',
  description: 'Show Open File Dialog',
  execute: () => {
    isOpen.value = true;
  },
};

registerAction(action);

export function useFileOpenDialog() {
  const closeDialog = () => {
    isOpen.value = false;
  };
  const openDialog = () => {
    isOpen.value = true;
  };
  return { isOpen, closeDialog, openDialog };
}
