import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    item: {}
  },
  mutations: {
    addItem (state, value) {
      state.list.push(value)
    }
  },
  actions: {
  },
  modules: {
  }
})
