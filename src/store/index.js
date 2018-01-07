import Vue from 'vue'
import Vuex from 'vuex'
import entities from './modules/entities'
import intent from './modules/intent'
import queries from './modules/queries'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    entities,
    intent,
    queries
  }
})
