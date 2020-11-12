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
    words: [],
    score: 0
  },
  getters: {
    name: state => state.name,
    words: state => state.words,
    score: state => state.score
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
    },
    addToScore (state, payload) {
      state.score += payload
    },
    resetScore (state) {
      state.score = 0
    }
  },
  actions: {
    addWord ({ commit }, payload) {
      commit('addWord', payload)
    },
    removeWord ({ commit }, payload) {
      commit('removeWord', payload)
    },
    addToScore ({ commit }, payload) {
      commit('addToScore', payload)
    },
    resetScore ({ commit }) {
      commit('resetScore')
    }
  },
  modules: {
  }
})
