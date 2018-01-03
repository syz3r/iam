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
          <a class="button" href="" :disabled="isDisabled">
                <span class="icon">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
            <span>
                  Edit Dialogue
                </span>
          </a>
          <a class="button" href="" :disabled="isDisabled"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          <a class="button" href="" :disabled="isDisabled"><i class="fa fa-trash" aria-hidden="true"></i></a>
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
      onClick: function () {
        this.$emit('click', this.item)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
