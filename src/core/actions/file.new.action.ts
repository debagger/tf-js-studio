import { IAction } from './action.interface';
import { reactive, readonly } from 'vue';
const state = reactive({ 'file.new.dialogopen': false });
export default {
  'file.new': <IAction<typeof state>>{
    useState: () => readonly(state),
    description: 'Creates new file',
    caption: 'New File',
    execute: () => {
      state['file.new.dialogopen'] = true;
    },
  },
};
