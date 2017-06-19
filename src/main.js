// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// Vuex
import Vuex from 'vuex'
import store from './vuex/store'
require('vue2-animate/dist/vue2-animate.min.css')
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  template: '<App/>',
  components: { App }
})
//

