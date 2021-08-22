<template>
  <q-dialog :model-value="show" persistent>
    <q-card>
      <window-header close @close="closeDialog">
        <q-space />
        {{ caption }}
      </window-header>
      <q-card-section>
        <slot />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import WindowHeader from './WindowHeader.vue';

export default {
  components: { WindowHeader },
  props: { caption: String, show: Boolean },
  emits: ['close'],
  methods: {
    closeDialog: function () {
      this.$emit('close');
    },
  },
};
</script>
