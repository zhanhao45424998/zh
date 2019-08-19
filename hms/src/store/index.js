import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'
import user from './modules/user'
import nav from './modules/nav'
import font from './modules/fontSize'
import umen from './modules/menu'
import permission from './modules/permission'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      user,
      umen,
      permission,
      nav,
      font,
  },
  // getters
})
