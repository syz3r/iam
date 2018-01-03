const state = {
  items: []
}

const getters = {
  getItems: state => {
    return state.items
  }
}

const mutations = {
  addItem: (state, payload) => {
    state.items.push(payload)
  },
  deleteItem: (state, payload) => {
    const index = state.items.indexOf(payload)
    if (index !== -1) {
      state.items.splice(index, 1)
    }
  }
}

const actions = {
  addItem: ({ commit }, payload) => {
    commit('addItem', payload)
  },
  deleteItem: ({ commit }, payload) => {
    commit('deleteItem', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
