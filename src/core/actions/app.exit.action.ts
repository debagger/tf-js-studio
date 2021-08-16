import { IAction } from './action.interface';
import { reactive, readonly } from 'vue';
const state = reactive({ 'app.exit.dialogopen': false });
export default {
  'app.exit': <IAction<typeof state>>{
    useState: () => readonly(state),
    description: 'Exit from application',
    caption: 'Exit!!!',
    execute: () => {
      state['app.exit.dialogopen'] = true;
    },
  },
};
