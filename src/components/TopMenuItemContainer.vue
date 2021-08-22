<template>
  <component :is="selector" :value="value" />
</template>
<script>
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineComponent } from 'vue';
import TopMenuItem from './TopMenuItem.vue';
import TopMenuItemSubmenu from './TopMenuItemSubmenu.vue';
import { QSeparator } from 'quasar';

const selectors = {
  '[ActionItem]': 'TopMenuItem',
  '[SubmenuItem]': 'TopMenuItemSubmenu',
  '[SeparatorItem]': 'QSeparator',
};

export default defineComponent({
  props: { value: { type: Object, required: true } },
  components: {
    QSeparator,
    TopMenuItem,
    TopMenuItemSubmenu,
  },
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const type = props.value.type;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const selector = selectors[type];

    return {
      selector,
    };
  },
});
</script>
