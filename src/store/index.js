import Vuex from 'vuex'
import Vue from 'vue'
import system from './modules/system'
import user from './modules/user.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    system,
    user,
  }
})
export default store
