<template>
  <top-menu-root-item
    v-for="item in menu"
    :key="'top-menu-' + item[0]"
    :value="item"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopMenuRootItem from './TopMenuRootItem.vue';
import { getMenu } from 'src/composable/app.topmenu.default';
export default defineComponent({
  components: { TopMenuRootItem },
  setup() {
    const menu = getMenu();
    return { menu };
  },
});
</script>
