<template>
  <div class="index-page">
    <Modal>
      <template #header>
        <h2>Get Started</h2>
      </template>

      <template #body>
        <section class="modal-body">
          <p>Please enter the initial number of columns to continue</p>
          <input v-model="columnSize" type="number" />
          <button
            :disabled="!columnSize"
            :class="columnSize && 'primary-button'"
          >
            Proceed
          </button>
        </section>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '~/components/Modal'

export default {
  components: {
    Modal,
  },
  data() {
    return {
      columnSize: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  display: grid;
  place-items: center;

  .modal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
