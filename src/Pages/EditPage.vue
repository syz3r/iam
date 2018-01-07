<template>
  <div>
    <context-menu id="context-menu" ref="ctxMenu">
      <input type="text" @click.stop="" placeholder="Search">

    </context-menu>
    <div class="level page-head">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">
            <span class="icon">
              <i class="fa fa-edit" aria-hidden="true"></i>
            </span> Edit Intent</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link class="button " to="/intent">Back</router-link></div>
      </div>
    </div>
    <div class="main">
      <div class="field is-grouped create-query">
        <blockquote class="control is-expanded query-input">
          <input class="input " type="text" @keyup.enter="createQuery" v-model="newQuery" placeholder="Add New Query here" >
        </blockquote>
        <div class="control add-query-btn" @click="createQuery">
            <span class="lnr lnr-plus-circle"></span>
        </div>
      </div>
      <div class="queries">
        <div class="query-item"
             v-for="query in getItems"
             @click="selectQuery(query)"
        >
          <div class="field is-grouped" :class="{ selected: selectedQuery == query.id }">
            <blockquote class="query-input control is-expanded">


              <div class="query-title"
                   v-if="selectedQuery !== query.id"
                   @click.stop="editQueryTitle(query)"
              >{{query.title}}
              </div>
              <div v-else>
                <div class="query-title" @contextmenu.prevent="$refs.ctxMenu.open" @click.stop="editQueryTitle(query)"  v-if="editingQuery != query.id" v-html="decorateTitle(query)"></div>
                <input class="input is-medium" type="text" v-else-if="editingQuery == query.id" v-model="query.title" @click.stop="query.editing = false">
              </div>



            </blockquote>
            <div class="control">
              <a class="button is-small" @click="deleteQuery(query)">
                <span class="lnr lnr-trash"></span>
              </a>
            </div>
          </div>
          <div class="param-table" v-if="selectedQuery == query.id">
            <table class="table">
              <thead>
              <tr>
                <th><abbr title="Position">Param</abbr></th>
                <th>Query Name</th>
                <th><abbr title="Played">Extracted Value</abbr></th>
                <th><abbr title="Won">Referenced Value</abbr></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="param in query.params">
                <td >{{param.name}}</td>
                <td>{{param.queryName}}</td>
                <td><span v-bind:style="{ 'background-color': param.color }">{{param.extractedValue}}</span></td>
                <td>{{param.referencedValue}}</td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Services from '../services'
  import contextMenu from 'vue-context-menu'
  export default {
    name: 'EditPage',
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
        newQuery: '',
        selectedQuery: '',
        editingQuery: ''
      }
    },
    computed: {
      ...mapGetters('queries', ['getItems'])
    },
    methods: {
      ...mapActions('queries', ['addItem', 'deleteItem']),
      decorateTitle (query) {
        const params = query.params
        if (params.length) {
          let str = query.title
          params.forEach(p => {
            const regx = new RegExp(p.name, 'i')
            str = str.replace(regx, `<span style="background-color: ${p.color}">$&</span>`)
          })
          return str
        } else {
          return query.title
        }
      },
      selectQuery (query) {
        if (this.selectedQuery !== query.id) {
          this.selectedQuery = query.id
          this.editingQuery = ''
        } else {
          this.selectedQuery = ''
        }
      },
      editQueryTitle (query) {
        if (this.selectedQuery === query.id) {
          this.editingQuery = query.id
        } else {
          this.selectQuery(query)
        }
      },
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
    },
    beforeRouteUpdate (to, from, next) {},
    components: {
      contextMenu
    }
  }
</script>
<style lang="scss" scoped>
  .add-query-btn .lnr{
    font-size: 25px;
    color: #42b983;
  }
  .head {
    padding: 1rem 2rem;

  }
  .create-query {
    border-bottom: 15px solid #fafafa;
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
    border-color: #eee;
  }
  .query-input::before {
    content: "\201C";
    font-size: 5rem;
    font-weight: bold;
    color: #f4fafe;
    position: absolute;
    left: -14px;
    top: -40px;
    z-index: -1;
  }

  .query-input {
    border-left:0;
    background-color: transparent;
    padding:0;
  }
  .query-item {
    border-bottom: 6px solid #fafafa;
    .selected {
      border: 2px solid #8CE1C5;
      -webkit-box-shadow: 0px 0px 7px 1px rgba(102, 102, 102, 0.29);
      -moz-box-shadow: 0px 0px 7px 1px rgba(102, 102, 102, 0.29);
      box-shadow: 0px 0px 7px 1px rgba(102, 102, 102, 0.29);
      .button {
        color: #3b3b3b;
        border-color: #3b3b3b;
      }
    }
  }

  .query-title {
    z-index: 1;
  }

  .field{
    padding:1rem 2rem;
    margin-bottom: 0;

    .control {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  table {
    thead {
      background-color: #f4fafe;

    }
    th {
      font-size: 0.9rem;
      font-weight: 400;
      padding: 1rem 2rem;
    }
    tr {
      padding: 1rem;
      &:hover {
        background-color: transparent;
      }
    }
    td {
      padding: 1rem 2rem;
    }
  }

</style>





