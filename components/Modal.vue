<template>
  <div class="modal-component">
    <header>
      <slot name="header">Modal Title</slot>
      <i v-if="hideCloseButton" class="mdi mdi-close mdi-24px" />
    </header>

    <main>
      <slot name="body"></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    hideCloseButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-component {
  display: grid;
  grid-template-rows: auto 1fr;
  width: clamp(300px, 100vw, 500px);
  background: var(--body-background);
  border-radius: var(--spacing-micro);
  box-shadow: 0 0 4px hsla(0, 0%, 0%, 0.3), 0 0 0 100vh hsla(0, 0%, 0%, 0.7);
  z-index: 1;

  header {
    border-radius: var(--spacing-micro) var(--spacing-micro) 0 0;
    padding: 0 var(--spacing-standard);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primary-color);
    * {
      color: white;
    }
  }

  main {
    padding: var(--spacing-standard);
  }
}
</style>
