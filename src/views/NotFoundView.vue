<template>
  <div class="not-found">
    <h1 class="not-found__title">Whoops, 404</h1>
    <h2 class="not-found__second-title">The page you were looking for does not exist</h2>
    <router-link class="not-found__home-link" to="/">
      <v-icon icon="mdi-keyboard-backspace" />
      Back home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style scoped lang="scss">
.not-found {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    font-size: 44px;
    color: #42a5f5;
  }

  &__home-link {
    color: #42a5f5;
    font-weight: 600;
    text-decoration: none;
    margin-top: 20px;
  }
}
</style>
