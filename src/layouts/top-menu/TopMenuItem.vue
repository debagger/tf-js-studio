<template>
  <q-item clickable v-close-popup>
    <q-item-section>{{ name }}</q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: String,
  },
  setup() {
    return {};
  },
});
</script>
