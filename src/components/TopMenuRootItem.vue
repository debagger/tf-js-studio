<template>
  <div class="cursor-pointer non-selectable">
    {{ caption }}
    <q-menu>
      <q-list dense style="min-width: 100px">
        <top-menu-item-container
          v-for="(item, idx) in childs"
          :key="idx"
          :value="item"
        />
      </q-list>
    </q-menu>
  </div>
</template>

<script lang="ts">
import { ITopMenuSubmenu } from 'src/composable/app.topmenu';
import { defineComponent, PropType, ref } from 'vue';
import TopMenuItemContainer from './TopMenuItemContainer.vue';

export default defineComponent({
  components: { TopMenuItemContainer },
  props: {
    value: { type: Object as PropType<ITopMenuSubmenu>, required: true },
  },
  setup(props) {
    const caption = ref(props.value.caption);
    const childs = ref(props.value.childs);
    return {
      caption,
      childs,
    };
  },
});
</script>
