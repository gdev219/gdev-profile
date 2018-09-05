import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from "@/plugins/firebaseInit.js";

Vue.use(Vuex)

// window.fetch()를 위한 Polyfill
require('whatwg-fetch');

const store = () => new Vuex.Store({

  state: {
    authUser: null
  },

  mutations: {
    SET_USER: function (state, data) {
      if(data == null){
        state.authUser = null;
        state.isVerified = null;
      }else{
        state.authUser = data.email
        state.isVerified = data.emailVerified;
      } 
    }
  },

  actions: {
    async login({commit},{email,password}) {
      try {
          const data = await auth.signInWithEmailAndPassword(email, password)
          commit('SET_USER',data.user);
      } catch (err) {
        alert(err);
        throw err
      }
    },
    async logout({commit}) {
      try{
        const data = await auth.signOut();
        commit('SET_USER',null); 
      }catch(err){
        alert(err);
        throw err
      }
    }
  },
  getters:{
    async isAuthenticated (state) {
      try{
        return !!state.authUser
      }catch(err){
        alert(err);
        throw err
      }
    }
  }  

})

export default store
