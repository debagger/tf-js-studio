<template>
  <component :is="selector" :name="name" :submenu="submenu" />
</template>
<script>
import { defineComponent } from 'vue';
import TopMenuItem from './TopMenuItem.vue';
import TopMenuItemSubmenu from './TopMenuItemSubmenu.vue';
import { QSeparator } from 'quasar';

export default defineComponent({
  props: { value: Array },
  components: {
    QSeparator,
    TopMenuItem,
    TopMenuItemSubmenu,
  },
  setup(props) {
    const name = props.value[0].isSplitter ? '' : props.value[0];
    const selector = props.value[0].isSplitter
      ? 'QSeparator'
      : Array.isArray(props.value[1]) && props.value[1].length > 0
      ? 'TopMenuItemSubmenu'
      : 'TopMenuItem';

    const submenu =
      selector === 'TopMenuItemSubmenu' ? props.value[1] : undefined;

    // console.log('Name: ', name, 'Selector: ', selector, 'Submenu: ', submenu);
    return {
      name,
      selector,
      submenu,
    };
  },
});
</script>
