<template>
  <div>
    <modal
      :class="{'is-active': showCreateDialog}"
      @closeModal="showCreateDialog = false"
    >
      <create-intent
        @createIntent="createIntentExec"
        @close="showCreateDialog = false"
      ></create-intent>
    </modal>
    <modal
      :class="{'is-active': showEditDialog}"
      @closeModal="showEditDialog = false"
    >
      <edit-intent></edit-intent>
    </modal>
    <div class="level page-head">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">
            <span class="icon">
              <i class="fa fa-crosshairs" aria-hidden="true"></i>
            </span> Intents</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-success" @click="showCreateIntent()">Create Intent</a></div>
      </div>
    </div>
    <search
      @searchItem="handleSearch"
      @clearSearch="searchTerm = ''"
    ></search>

    <div class="list">
      <list-item
        v-for="item in filteredList"
        :key="item.id"
        :item="item"
        :class="{ selected: selectedValue ==item.id }"
        :isDisabled="selectedValue != item.id"
        @edit="editIntentParam(item)"
        @click="selectIntent(item)"
        @delete="deleteIntent(item)"

      ></list-item>
    </div>
  </div>

</template>

<script>
  import ListItem from '../components/ListItem'
  import Modal from '../components/Modal'
  import Search from '../components/Search'
  import { mapActions, mapGetters } from 'vuex'
  import Services from '../services'
  import CreateIntent from '../components/modals/CreateIntent'
  import EditIntent from '../components/modals/EditIntent'

  export default {
    name: 'Intent',
    beforeMount () {
      if (!this.getItems.length) {
        Services.intentService(this.$store)
          .catch(err => {
            console.log(err)
          })
      }
    },
    data () {
      return {
        selectedValue: '',
        showCreateDialog: false,
        showEditDialog: false,
        newIntent: '',
        searchTerm: ''
      }
    },
    computed: {
      ...mapGetters('intent', ['getItems']),
      filteredList () {
        return this.getItems.filter(item => {
          return item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
      }
    },
    methods: {
      ...mapActions('intent', ['addItem', 'deleteItem']),
      selectIntent (item) {
        item.selected = !item.selected
        this.selectedValue = item.id
      },
      editIntentParam (item) {
        this.showEditDialog = true
      },
      deleteIntent (item) {
        this.deleteItem(item)
      },
      showCreateIntent () {
        this.showCreateDialog = true
      },
      createIntentExec (newIntent) {
        if (newIntent) {
          const lastItem = (this.getItems && this.getItems.length > 0) ? this.getItems[this.getItems.length - 1] : {id: 0}
          this.addItem({
            id: lastItem.id + 1,
            title: newIntent
          })
          this.showCreateDialog = false
        }
      },
      closeModal () {
        this.showCreateDialog = false
      },
      handleSearch (term) {
        this.searchTerm = term
      }

    },
    components: {
      CreateIntent,
      ListItem,
      Modal,
      Search,
      EditIntent
    }
  }
</script>

<style lang="scss">

</style>
