import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// window.fetch()를 위한 Polyfill
require('whatwg-fetch');

const store = () => new Vuex.Store({

  state: {
    authUser: null
  },

  mutations: {
    SET_USER: function (state, user) {
      state.authUser = user
    }
  },

  actions: {
    // ...
  }

})

export default store