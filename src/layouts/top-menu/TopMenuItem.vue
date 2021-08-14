<template>
  <q-item clickable v-close-popup>
    <q-item-section>{{ caption }}</q-item-section>
  </q-item>
</template>
<script lang="ts">
import { ITopMenuActionItem } from 'src/core/ui/TopMenu';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    value: { type: Object as PropType<ITopMenuActionItem>, required: true },
  },
  setup(props) {
    const caption = ref(props.value.caption);
    return { caption };
  },
});
</script>
