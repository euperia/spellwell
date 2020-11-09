import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'SpellWell',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    name: '',
    words: []
  },
  getters: {
    name: state => state.name
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    },
    addWord (state, payload) {
      // check if it exists
      const index = state.words.indexOf(payload)
      if (index === -1) {
        state.words.push(payload.toLowerCase())
      }
    },
    removeWord (state, payload) {
      const index = state.words.indexOf(payload)
      if (index > -1) {
        state.words.splice(index, 1)
      }
    },
    clearWords (state) {
      state.words = []
    }
  },
  actions: {
    addWord ({ commit }, payload) {
      commit('addWord', payload)
    },
    removeWord ({ commit }, payload) {
      commit('removeWord', payload)
    }
  },
  modules: {
  }
})
