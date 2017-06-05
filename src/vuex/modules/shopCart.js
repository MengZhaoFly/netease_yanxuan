import * as types from '../types'
import Util from '../../util/common'
const STORAGE_CARTLIST_KEY = 'STORAGE_CARTLIST_KEY'
const state = {
  cartList: Util.getLocal(STORAGE_CARTLIST_KEY) || [],
  isExist: false
}
const actions = {
  // set
  setCartList ({commit}, obj) {
    commit(types.SET_CART_LISTS, obj)
  },
  saveCartList ({commit}) {
    commit(types.SAVE_CART_LIST)
  },
  checkIsExist ({commit}, obj) {
    commit(types.CHECK_CART_ISEXIST, obj)
  },
  delCart ({commit}, obj) {
    commit(types.DEL_CART_CART, obj)
  }
}
const getters = {
  cartList: state => state.cartList,
  total: state => state.cartList.length,
  isExist: state => state.isExist,
  // 已经加入购物车的商品总量
  allNum: state => {
    let total = 0
    state.cartList.forEach(item => {
      total += item.number
    })
    return total
  }
}
const mutations = {
  [types.SET_CART_LISTS] (state, obj) {
    state.cartList.push(obj)
  },
  // 保存到购物车到本地
  [types.SAVE_CART_LIST] (state) {
    Util.setLocal(state.cartList, STORAGE_CARTLIST_KEY)
  },
  // exist this.++ else insert a new record
  [types.CHECK_CART_ISEXIST] (state, obj) {
    // 没有数据不做检查
    if (state.cartList.length === 0) return false
    let existIndex = state.cartList.findIndex((item) => {
      return item.type === obj.type && item.gid === obj.gid && item.picked === obj.picked
    })
    console.log(existIndex)
    // exist
    if (existIndex >= 0) {
      console.log(state.cartList[existIndex].number)
      state.cartList[existIndex].number ++
      state.isExist = true
    } else {
      state.isExist = false
    }
  },
  [types.DEL_CART_CART] (state, objs) {
    console.log(objs.length)
    objs.forEach(obj => {
      let index = state.cartList.findIndex((item) => {
        return item.gid === obj.id && item.type === obj.type
      })
       // 找出索引删除一个
      state.cartList.splice(index, 1)
    })
    Util.setLocal(state.cartList, STORAGE_CARTLIST_KEY)
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
