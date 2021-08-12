<template>
  <q-bar>
    <top-menu-root-item
      v-for="item in root"
      :key="'top-menu-' + item[0]"
      :value="item"
    />
    <q-space />
    <q-btn dense flat icon="minimize" />
    <q-btn dense flat icon="crop_square" />
    <q-btn dense flat icon="close" />
  </q-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopMenuRootItem from 'layouts/top-menu/TopMenuRootItem.vue';
import root from './root';
export default defineComponent({
  components: { TopMenuRootItem },
  setup() {
    return { root };
  },
});
</script>
