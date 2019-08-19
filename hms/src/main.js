import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store/index";
import '@/assets/scss/reset.scss'
import '@/assets/iconfont/iconfont.css'
import Dialog from '@/utils/dialog.js'

Vue.use(Dialog)


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
