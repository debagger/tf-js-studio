<template>
  <div class="cursor-pointer non-selectable">
    {{ value[0] }}
    <q-menu>
      <q-list dense style="min-width: 100px">
        <top-menu-item-container
          v-for="(item, idx) in value[1]"
          :key="idx"
          :value="item"
        />
      </q-list>
    </q-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopMenuItemContainer from './TopMenuItemContainer.vue';
export default defineComponent({
  components: { TopMenuItemContainer },
  props: { value: Array },
});
</script>
