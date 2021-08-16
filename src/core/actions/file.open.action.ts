import { IAction } from './action.interface';
import { reactive, readonly } from 'vue';
const state = reactive({ 'file.open.dialogopen': false });
export default {
  'file.open': <IAction<typeof state>>{
    useState: () => readonly(state),
    description: 'Open exists file',
    caption: 'Open File',
    execute: () => {
      state['file.open.dialogopen'] = true;
    },
  },
};
