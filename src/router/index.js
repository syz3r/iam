import Vue from 'vue'
import Router from 'vue-router'
import Intent from '@/Pages/Intent'
import Entities from '@/Pages/Entities'
import PageNotFound from '@/Pages/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/intent',
      name: 'Intent',
      component: Intent
    },
    {
      path: '/entities',
      name: 'Entities',
      component: Entities
    }, {
      path: '*',
      name: '404',
      component: PageNotFound
    }
  ]
})
