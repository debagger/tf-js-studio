<template>
  <q-bar>
    <top-menu-root-item
      v-for="item in menu"
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
import { useApplication } from './../../core/app.core';
export default defineComponent({
  components: { TopMenuRootItem },
  setup() {
    const app = useApplication();
    const menu = app.useTopMenu();
    return { menu };
  },
});
</script>
