<template>
  <div class="list-item" @click="onClick">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p>{{item.title}}</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item"  >
          <router-link class="button" :to="{ name: 'EditPage', params: { id: item.id }}" :disabled="isDisabled">
                <span class="icon">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
            <span>
                  Edit Dialogue
                </span>
          </router-link>
          <a class="button"  href="" :disabled="isDisabled"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          <a class="button" @click="onDelete" :disabled="isDisabled"><i class="fa fa-trash" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: ['item', 'isDisabled'],
    methods: {
      editParam () {
        if (!this.isDisabled) {
          this.$emit('edit', this.item)
        }
      },
      onClick () {
        this.$emit('click', this.item)
      },
      onDelete () {
        if (!this.isDisabled) {
          this.$emit('delete', this.item)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
