<template>
  <div>
    <modal :class="{'is-active': modalActive}">
      <div class="box">
        <div class="field">
          <label class="label">Create new Entity</label>
          <div class="control">
            <input class="input" type="text" @keyup.enter="createEntityExec" v-model="newEntity"
                   placeholder="Entity Name">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="createEntityExec">Create</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="closeModal">Cancel</button>
          </div>
        </div>
      </div>
    </modal>
    <div class="level page-head">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">
            <span class="icon">
              <i class="fa fa-sitemap" aria-hidden="true"></i>
            </span> Entities</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-success" @click="createEntity">Create Entity</a></div>
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
        @click="selectEntity(item)"
        @delete="deleteEntity(item)"
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

  export default {
    name: 'Entities',
    beforeMount () {
      if (!this.getItems.length) {
        Services.entityService(this.$store)
          .catch(err => {
            console.log(err)
          })
      }
    },
    data () {
      return {
        selectedValue: '',
        modalActive: false,
        newEntity: '',
        searchTerm: ''
      }
    },
    computed: {
      ...mapGetters('entities', ['getItems']),
      filteredList () {
        return this.getItems.filter(item => {
          return item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
      }
    },
    methods: {
      ...mapActions('entities', ['addItem', 'deleteItem']),
      selectEntity (item) {
        item.selected = !item.selected
        this.selectedValue = item.id
      },
      deleteEntity (item) {
        this.deleteItem(item)
      },
      createEntity () {
        this.modalActive = true
      },
      createEntityExec () {
        if (this.newEntity) {
          const lastItem = (this.getItems && this.getItems.length > 0) ? this.getItems[this.getItems.length - 1] : {id: 0}
          this.addItem({
            id: lastItem.id + 1,
            title: this.newEntity
          })
          this.newEntity = ''
          this.modalActive = false
        }
      },
      closeModal () {
        this.modalActive = false
      },
      handleSearch (term) {
        this.searchTerm = term
      }
    },
    components: {
      ListItem,
      Modal,
      Search
    }
  }
</script>

<style lang="scss">

</style>
