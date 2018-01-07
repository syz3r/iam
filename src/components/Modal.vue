<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button class="modal-close is-large" @click.prevent="closeModal" aria-label="close"></button>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      closeModal () {
        this.$emit('closeModal')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .modal-content {
    width: 52vw;
  }
</style>
