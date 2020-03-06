import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    width:window.innerWidth,
    height:window.innerHeight-56,
    showBar:true,
    researchCols:12,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
