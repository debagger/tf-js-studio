<template>
  <dialog-window :show="isOpen" @close="closeDialog" caption="Open File Dialog">
    <div>{{ cwd }}</div>
    <q-list
      bordered
      dense
      class="column"
      style="
        height: 300px;
        max-height: 300px;
        min-width: 500px;
        overflow-x: auto;
      "
    >
      <q-item clickable v-ripple @click="goBack" v-if="cwd !== '/'">
        <q-item-section thumbnail class="q-pr-none">
          <q-icon color="primary" name="subdirectory_arrow_right" />
        </q-item-section>
        <q-item-section> Back</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        v-for="item in cwdContent"
        :key="item"
        @click="itemClick(item)"
      >
        <q-item-section thumbnail class="q-pr-none">
          <q-icon color="primary" :name="iconName(item)" />
        </q-item-section>
        <q-item-section> {{ item.name }}</q-item-section>
      </q-item>
    </q-list>
  </dialog-window>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useFileOpenDialog } from 'src/composable/dialog.file.open';
import {
  useFileDialogSharedState,
  IFileSystemObject,
  IFileSystemFileObject,
} from 'src/composable/dialog.file';
import DialogWindow from './DialogWindow.vue';
export default defineComponent({
  components: { DialogWindow },
  async setup() {
    const { isOpen, closeDialog } = useFileOpenDialog();
    watch(isOpen, (newVal, oldVal): void => {
      console.log(newVal, oldVal);
    });
    const { cwd, cwdContent, resolve } = await useFileDialogSharedState();

    const itemClick = (item: IFileSystemObject) => {
      if (item.type === 'Directory') {
        cwd.value = item.fullPath;
      }
    };

    const iconName = (item: IFileSystemObject) => {
      if (item.type === 'Directory') return 'folder';
      if (item.type === 'File') return 'description';
    };

    const goBack = () => {
      const newCwdValue = resolve(cwd.value, '..');
      console.log('newCwdValue', newCwdValue);
      cwd.value = newCwdValue;
    };
    return {
      isOpen,
      closeDialog,
      itemClick,
      cwd,
      cwdContent,
      iconName,
      goBack,
    };
  },
});
</script>
