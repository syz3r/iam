<template>
  <div>
    <modal :class="{'is-active': modalActive}">
      <div class="box">
        <div class="field">
          <label class="label">Create new Intent</label>
          <div class="control">
            <input class="input" type="text" @keyup.enter="createIntentExec" v-model="newIntent" placeholder="Intent Name">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="createIntentExec">Create</button>
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
              <i class="fa fa-crosshairs" aria-hidden="true"></i>
            </span> Intents</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-success" @click="createIntent()">Create Intent</a></div>
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
        @click="selectItem(item)"


      ></list-item>
    </div>
  </div>

</template>

<script>
  import ListItem from '../components/ListItem'
  import Modal from '../components/Modal'
  import Search from '../components/Search'
  export default {
    name: 'Intent',
    data () {
      return {
        items: [
          {
            id: 1,
            title: 'video.download'
          },
          {
            id: 2,
            title: 'video.play'
          },
          {
            id: 3,
            title: 'video.search'
          },
          {
            id: 4,
            title: 'video_controls.stop'
          },
          {
            id: 5,
            title: 'video_controls.play'
          },
          {
            id: 6,
            title: 'video_controls.rewind'
          },
          {
            id: 7,
            title: 'video_controls.forward'
          },
          {
            id: 8,
            title: 'video_controls.repeat'
          },
          {
            id: 9,
            title: 'video_controls.resume'
          }
        ],
        selectedValue: '',
        modalActive: false,
        newIntent: '',
        searchTerm: ''
      }
    },
    computed: {
      filteredList () {
        return this.items.filter(item => {
          return item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
      }
    },
    methods: {
      selectItem (item) {
        item.selected = !item.selected
        this.selectedValue = item.id
      },
      createIntent () {
        this.modalActive = true
      },
      createIntentExec () {
        if (this.newIntent) {
          const lastItem = this.items[this.items.length - 1]
          this.items.push({
            id: lastItem.id + 1,
            title: this.newIntent
          })
          this.newIntent = ''
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
