<template>
  <AppLayout>
    <RouterView></RouterView>
  </AppLayout>
</template>
<script>
import { RouterView } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: "App",
  components: {
    AppLayout,
    RouterView
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main";
</style>
