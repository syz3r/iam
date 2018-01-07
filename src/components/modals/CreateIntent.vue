<template>
  <div class="box">
    <div class="field">
      <label class="label">Create new Intent</label>
      <div class="control">
        <input class="input" type="text" @keyup.enter="createIntent" v-model="newIntent" placeholder="Intent Name">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="createIntent">Create</button>
      </div>
      <div class="control">
        <button class="button is-text" @click="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateIntent',
    data () {
      return {
        newIntent: ''
      }
    },
    methods: {
      createIntent () {
        this.$emit('createIntent', this.newIntent)
      },
      closeModal () {
        this.$emit('close')
      }
    }
  }
</script>
