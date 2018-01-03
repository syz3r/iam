<template>
  <div class="wrapper">
    <div class="empty">
      <h1 class="title is-1">4 0 4</h1>
      <h2>Nothing to see here.</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .empty {
    max-width: 50%;
    .title {
      text-align: center;
    }
  }

</style>
