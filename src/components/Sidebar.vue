<template>
  <div class="sidebar column is-3">
    <div class="logo">
      <router-link to="/"><img width="50" src="/static/logo.png" alt=""></router-link>
    </div>
    <main-menu></main-menu>
  </div>
</template>

<script>
  import MainMenu from './Menu'

  export default {
    name: 'Sidebar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      MainMenu
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar {
    background-color: #FAFAFA;
    border-right: 2px solid #F8E4C3;
  }
</style>
