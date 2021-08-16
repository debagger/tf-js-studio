import { IAction } from './action.interface';
import { reactive, readonly } from 'vue';
const state = reactive({ 'prefs.global.dialogopen': false });
export default {
  'prefs.global': <IAction<typeof state>>{
    useState: () => readonly(state),
    description: 'Global preferences',
    caption: 'Global',
    execute: () => {
      state['prefs.global.dialogopen'] = true;
    },
  },
};
