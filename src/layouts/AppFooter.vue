<template>
  <footer class="footer">
    <div class="container">
      <h1 class="footer__author">Author</h1>
      <h2 class="footer__name">Danylo Belotskyi</h2>
      <a target="_blank" href="https://github.com/Qub13" class="footer__link">
        <v-icon class="link__icon" icon="mdi-github" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 250px;
  background-color: #42a5f5;

  .footer__link {
    color: #000;
    font-size: 44px;
  }
}
</style>
