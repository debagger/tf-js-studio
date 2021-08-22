<template>
  <q-bar>
    <slot />
    <q-space />
    <q-btn
      dense
      flat
      v-if="minimize"
      @click="onMinimizeClick"
      icon="minimize"
    />
    <q-btn
      dense
      flat
      v-if="maximize"
      @click="onMaximizeClick"
      icon="crop_square"
    />
    <q-btn dense flat v-if="close" @click="onCloseClick" icon="close" />
  </q-bar>
</template>
<script>
import { ref } from 'vue';
export default {
  emits: ['close', 'minimize', 'maximize'],
  // props: { minimize: Boolean, maximize: Boolean, close: Boolean },
  methods: {
    onCloseClick: function () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.$emit('close');
    },
    onMinimizeClick: function () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.$emit('minimize');
    },
    onMaximizeClick: function () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.$emit('close');
    },
  },
  setup() {
    return {
      close: ref(true),
      minimize: ref(true),
      maximize: ref(true),
    };
  },
};
</script>
