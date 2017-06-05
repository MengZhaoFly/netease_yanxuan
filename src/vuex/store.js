import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import footer from './modules/footer'
// 头部分类
import headerTabs from './modules/headertabs'
import home from './modules/home'
import cook from './modules/cook'
import type from './modules/type'
// 脚部分类
import footclassification from './modules/footclassification'
import shopCart from './modules/shopCart'
import order from './modules/order'
import mylist from './modules/mylists'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    footer,
    home,
    cook,
    type,
    shopCart,
    order,
    mylist,
    footclassification,
    headerTabs
  }
})
