import { IAction } from './action.interface';
import { reactive, readonly } from 'vue';
const state = reactive({ 'prefs.interface.dialogopen': false });
export default {
  'prefs.interface': <IAction<typeof state>>{
    useState: () => readonly(state),
    description: 'Interface preferences',
    caption: 'Interface',
    execute: () => {
      state['prefs.interface.dialogopen'] = true;
    },
  },
};
