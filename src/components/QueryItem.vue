<template>
  <div class="queryItem" @click="selectQuery(item)">
    <div class="field is-grouped">
      <blockquote class="query-input control is-expanded">
        <div class="query-title"
             v-if="!item.editing"
             @click.stop="item.editing = true"
        >{{item.title}}</div>
        <input
          class="input is-medium" type="text"
          v-if="item.editing"
          :value="item.title"
          @click.stop="item.editing = false"
        >
      </blockquote>
      <div class="control">
        <a class="button is-small" @click="deleteQuery(query)">
          <span class="lnr lnr-trash"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QueryItem',
    props: ['item'],
    onClick () {
      this.$emit('click', this.item)
    },
    onDelete () {
      if (!this.isDisabled) {
        this.$emit('delete', this.item)
      }
    }
  }
</script>

<style>

</style>
