<template>
  <q-item clickable>
    <q-item-section>{{ name }}</q-item-section>
    <q-item-section side>
      <q-icon name="keyboard_arrow_right" />
    </q-item-section>
    <q-menu anchor="top end" self="top start">
      <q-list dense>
        <top-menu-item-container
          v-for="(item, idx) in submenu"
          :key="idx"
          :value="item"
        />
      </q-list>
    </q-menu>
  </q-item>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  components: {
    TopMenuItemContainer: defineAsyncComponent(() =>
      import('./TopMenuItemContainer.vue')
    ),
  },
  props: { name: String, submenu: Array },
  setup() {
    // console.log(props.submenu);
    return {};
  },
});
</script>
