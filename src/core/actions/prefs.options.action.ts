import { IAction } from './action.interface';
import { reactive, readonly } from 'vue';
const state = reactive({ 'prefs.options.dialogopen': false });
export default {
  'prefs.options': <IAction<typeof state>>{
    useState: () => readonly(state),
    description: 'Application options setup',
    caption: 'Options',
    execute: () => {
      state['prefs.options.dialogopen'] = true;
    },
  },
};
