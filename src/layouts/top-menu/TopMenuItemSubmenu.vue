<template>
  <q-item clickable>
    <q-item-section>{{ caption }}</q-item-section>
    <q-item-section side>
      <q-icon name="keyboard_arrow_right" />
    </q-item-section>
    <q-menu anchor="top end" self="top start">
      <q-list dense>
        <top-menu-item-container
          v-for="(item, idx) in childs"
          :key="idx"
          :value="item"
        />
      </q-list>
    </q-menu>
  </q-item>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineComponent, defineAsyncComponent, ref } from 'vue';

export default defineComponent({
  components: {
    TopMenuItemContainer: defineAsyncComponent(() =>
      import('./TopMenuItemContainer.vue')
    ),
  },
  props: { value: { type: Object, required: true } },
  setup(props) {
    const caption = ref(props.value.caption);
    const childs = ref(props.value.childs);
    return { caption, childs };
  },
});
</script>
