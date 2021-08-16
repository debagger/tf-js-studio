import { IAction } from './action.interface';
import { reactive, readonly } from 'vue';
const state = reactive({ 'prefs.user.dialogopen': false });
export default {
  'prefs.user': <IAction<typeof state>>{
    useState: () => readonly(state),
    description: 'User preferences',
    caption: 'User',
    execute: () => {
      state['prefs.user.dialogopen'] = true;
    },
  },
};
