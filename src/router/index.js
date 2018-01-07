import Vue from 'vue'
import Router from 'vue-router'
import Intent from '@/Pages/Intent'
import Entities from '@/Pages/Entities'
import PageNotFound from '@/Pages/404'
import EditPage from '@/Pages/EditPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/intent'
    },
    {
      path: '/intent/edit/:id',
      component: EditPage,
      name: 'EditPage'
    },
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
