<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <window-header minimize maximize close>
        <top-menu />
      </window-header>
    </q-header>

    <q-drawer behavior="desktop" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Models',
    caption: 'Work with models',
    icon: 'school',
    link: '/models',
  },
];

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import TopMenu from 'src/components/TopMenu.vue';
import WindowHeader from 'components/WindowHeader.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    TopMenu,
    WindowHeader,
  },

  setup() {
    const router = useRouter();

    return {
      essentialLinks: linksList,
      router,
    };
  },
});
</script>
