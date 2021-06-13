<template>
  <div class="index-page">
    <i class="mdi mdi-trello mdi-48px" />
    <h1>Nuxt.js Todo Board!</h1>
    <p>This is my Super Duper Page!</p>
    <small>And I Love it!</small>
    <section>
      <button class="primary-button">Click Me</button>
      <button class="secondary-button">Click Me</button>
      <button class="success-button">Click Me</button>
      <button class="warning-button">Click Me</button>
      <button class="danger-button">Click Me</button>
    </section>
    <a href="">Follow ME</a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.index-page {
  display: grid;
  place-items: center;
}
</style>
