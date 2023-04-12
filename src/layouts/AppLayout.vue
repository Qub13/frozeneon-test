<template>
  <main class="main container">
    <slot></slot>
  </main>
  <AppFooter />
</template>

<script>
import AppFooter from "@/layouts/AppFooter.vue";

export default {
  name: "AppLayout",
  components: { AppFooter }
};
</script>

<style scoped></style>
