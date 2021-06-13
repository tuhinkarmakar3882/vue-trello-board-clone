<template>
  <div class="nav-bar-component">
    <i class="mdi mdi-vuejs mdi-36px" />
    <h2>Board Master</h2>

    <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">
      <button class="primary-button">
        Find Me
        <i class="mdi mdi-linkedin mdi-18px" />
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.nav-bar-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--body-background-alternate);
  padding: 0 var(--spacing-standard);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-right: auto;
    margin-left: var(--spacing-micro);
  }

  i {
    &:first-child {
      display: none;
      @media only screen and (min-width: 400px) {
        display: block;
      }
    }

    &:last-child {
      margin-left: var(--spacing-micro);
    }
  }
}
</style>
