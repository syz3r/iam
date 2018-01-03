<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>

        <a @click="onClick($event)">Allianz Helpdesk </a>
        <ul class="dropdown show">
          <li><router-link to="/intent"><i class="fa fa-crosshairs" aria-hidden="true"></i> Intent</router-link></li>
          <li><router-link to="/entities"><i class="fa fa-sitemap" aria-hidden="true"></i> Entities</router-link></li>
          <li>
            <router-link to="/traning"><i class="fa fa-book" aria-hidden="true"></i> Traning</router-link>

          <li><router-link to="/dashboard"><i class="fa fa-dashboard" aria-hidden="true"></i> Cluster Analysis</router-link></li>
          <li><router-link to="/analytics"><i class="fa fa-pie-chart" aria-hidden="true"></i> Analytics</router-link></li>
          <li><router-link to="/settings"><i class="fa fa-gear" aria-hidden="true"></i> Settings</router-link></li>
        </ul>
      </li>
      <li>
        <a @click="onClick($event)">Support</a>
        <ul class="dropdown">
          <li><router-link to="/docs"><i class="fa fa-crosshairs" aria-hidden="true"></i> Docs</router-link></li>
          <li><router-link to="/forum"><i class="fa fa-sitemap" aria-hidden="true"></i> Forum</router-link></li>
          <li><router-link to="/contact"><i class="fa fa-book" aria-hidden="true"></i> Contact Us</router-link></li>
        </ul>
      </li>
      <li><a>Account</a></li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {
        selectedMenu: ''
      }
    },
    computed: {
      isExpanded () {
        return true
      }
    },
    methods: {
      onClick (e) {
        const dropdowns = document.querySelectorAll('.dropdown')
        dropdowns.forEach(el => {
          el.className = 'dropdown'
        })
        e.target.nextElementSibling.className += ' show'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dropdown{
    display: none;
  }
  .show {
    display: block;
  }
  .router-link-active {
    border-left:3px solid #42b983;
  }
  .menu-list {
    ul {
      margin: 0;
      border: none;
      background-color: #f2f2f2;
    }

    a {
      border-radius: 2px;
      color: #4a4a4a;
      display: block;
      padding: 1em 2em;
    }
  }

  .menu-list li ul {
    padding:0;
  }

  .menu-list ul li ul {
    border: none;

  }
  .menu-list li ul li {
  }
</style>
