<template>
  <!--<div class="search-bar">-->
    <!--<i class="fa fa-search" aria-hidden="true"></i>-->
    <!--<input type="text" v-model="searchTerm" placeholder="Search here.." @keyup="searchExec" >-->
    <!--<a @click="clearSearch">clear</a>-->
  <!--</div>-->
  <div class="field search-bar">
    <div class="control has-icons-left ">
      <input class="input" v-model="searchTerm" @keyup="searchExec" placeholder="Search here..">
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        searchTerm: ''
      }
    },
    methods: {
      searchExec () {
        this.$emit('searchItem', this.searchTerm)
      },
      clearSearch () {
        this.searchTerm = ''
        this.$emit('clearSearch')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-bar {
    padding: 0.5rem 1.5rem;
    border-bottom: 3px solid #efefef;
    margin:0;

    input {
      border: none;
      padding-left: 1rem;
      width: 90%;
      -webkit-box-shadow: none;
      box-shadow:none;
    }
  }
</style>
