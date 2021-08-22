<template>
  <q-item clickable v-close-popup @click="execute">
    <q-item-section>{{ caption }}</q-item-section>
  </q-item>
</template>
<script lang="ts">
import { ITopMenuActionItem } from 'src/composable/app.topmenu';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    value: { type: Object as PropType<ITopMenuActionItem>, required: true },
  },
  setup(props) {
    const caption = ref(props.value.caption);
    // eslint-disable-next-line vue/no-setup-props-destructure
    const execute = props.value.execute;

    return { caption, execute };
  },
});
</script>
