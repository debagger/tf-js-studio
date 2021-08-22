<template>
  <router-view />
  <Suspense>
    <dialog-open-file />
  </Suspense>
</template>
//
<script lang="ts">
import { defineComponent } from 'vue';

import DialogOpenFile from './components/DialogOpenFile.vue';
export default defineComponent({
  components: { DialogOpenFile },
  name: 'App',
});
</script>
