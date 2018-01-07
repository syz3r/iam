<template>
  <div class="box">
    <div class="field is-grouped">
      <blockquote class="control is-expanded query-input">
        <input class="input " type="text" @keyup.enter="createQuery" v-model="newQuery" placeholder="Add New Query here" >
      </blockquote>
      <p class="control">
        <a class="button is-info" @click="createQuery">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </a>
      </p>
    </div>
    <div class="queries">
      <div class="queryItem" v-for="query in getItems">
       <div class="field is-grouped">
        <blockquote class="query-input control is-expanded">
          <div class="query-title"
            v-if="!query.editing"
            @click.stop="query.editing = true"
          >{{query.title}}</div>
          <input
            class="input is-medium" type="text"
            v-if="query.editing"
            :value="query.title"
            @click.stop="query.editing = false"
          >
        </blockquote>
        <div class="control">
          <a class="button" @click="deleteQuery(query)">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Services from '../../services'

  export default {
    name: 'EditIntent',
    beforeMount () {
      if (!this.getItems.length) {
        Services.queryService(this.$store)
          .catch(err => {
            console.log(err)
          })
      }
    },
    data () {
      return {
        newQuery: ''
      }
    },
    computed: {
      ...mapGetters('queries', ['getItems'])
    },
    methods: {
      ...mapActions('queries', ['addItem', 'deleteItem']),
      createQuery () {
        if (this.newQuery) {
          const lastItem = (this.getItems && this.getItems.length > 0) ? this.getItems[this.getItems.length - 1] : {id: 100}
          this.addItem({
            id: lastItem.id + 1,
            title: this.newQuery
          })
        }
      },
      deleteQuery (query) {
        this.deleteItem(query)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    padding:0;

  }
  .left-aligned {
    align-items: flex-start;
  }
  .query-input input {

    -webkit-box-shadow: none;
    box-shadow: none;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-radius: 0px;
    margin: 0px;
    background-color: transparent;
    z-index: 2;
  }
  .query-input::before {
    content: "\201C";
    font-size: 8rem;
    font-weight: bold;
    color: #f4fafe;
    position: absolute;
    left: -14px;
    top: -50px;

  }

  .query-input {
    border-left:0;
    background-color: transparent;
    padding:0;
  }

  .query-title {
    z-index: 1;
  }

  .field{
    padding:1rem 2rem;
    border-bottom: 6px solid #fafafa;
    margin-bottom: 0;

    .control {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }


</style>
