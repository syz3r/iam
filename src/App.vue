<template>
    <div id="app" class="container is-widescreen">
      <div class="columns is-gapless ">
        <sidebar></sidebar>
        <div class="content column">
          <router-view/>
        </div>
      </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>
<style src="./styles/global.scss" lang="scss"></style>
