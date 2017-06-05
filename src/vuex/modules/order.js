import * as types from '../types'
import Util from '../../util/common'
const STORAGE_QUERYCART_KEY = 'STORAGE_CARTLIST_KEY'
import data from '@/fetch/api'
const state = {
  queryCartLists: Util.getLocal(STORAGE_QUERYCART_KEY) || [],
  isAllChecked: true
}
const actions = {
  // params obj:Array
  query ({commit}, obj) {
    let newobj = []
    // one by one
    for (let i = 0; i < obj.length; i++) {
      let type = obj[i].type
      let id = parseInt(obj[i].gid)
      data.getTypeDetail(type, id).then(res => {
        let temp = {
          id: res.id,
          type: type,
          url: res.detailPic[0],
          line1: res.name,
          line2: obj[i].picked,
          line3: `¥${res.price * obj[i].number.toFixed(2)}`,
          ischecked: true,
          num: obj[i].number,
          price: res.price,
          totalMoney: res.price * obj[i].number.toFixed(2)
        }
        newobj.push(temp)
      })
    }
    // console.log(newobj)
    commit(types.QUERY_CART_DETAIL, newobj)
  },
  // 单独选中的时候
  changeChecked ({commit}, index) {
    commit(types.CHANGE_CART_CHECKED, index)
  },
  // 切换全选内容列表状态
  changeAllCheckedOrNot ({commit}, tag) {
    commit(types.CHANGE_CART_ALL_CHECKED, tag)
  },
  // 切换全选按钮状态
  toggleIsAllChecked ({commit}) {
    commit(types.TOGGLE_IS_ALL_CHECKED)
  },
  // 删除选中的
  delQueryList ({commit}, content) {
    commit(types.DEL_QUERY_LISTS, content)
  }
}
const getters = {
  queryCartLists: state => state.queryCartLists,
  hasCheckedLength: state => state.queryCartLists.filter(item => item.ischecked === true).length,
  totalLength: state => state.queryCartLists.length,
  hasCheckedMoney: state => {
    let hasChecked = state.queryCartLists.filter(item => item.ischecked === true)
    let total = 0
    hasChecked.forEach(item => {
      total += item.totalMoney
    })
    return total
  },
  isAllChecked: state => state.isAllChecked
}
const mutations = {
  [types.QUERY_CART_DETAIL] (state, newobj) {
    state.queryCartLists = newobj
  },
  [types.CHANGE_CART_CHECKED] (state, index) {
    state.queryCartLists[index].ischecked = !state.queryCartLists[index].ischecked
  },
  [types.CHANGE_CART_ALL_CHECKED] (state, tag) {
    if (tag) {
      state.queryCartLists.forEach(item => {
        item.ischecked = false
      })
    } else {
      state.queryCartLists.forEach(item => {
        item.ischecked = true
      })
    }
  },
  [types.TOGGLE_IS_ALL_CHECKED] (state) {
    state.isAllChecked = !state.isAllChecked
  },
  [types.DEL_QUERY_LISTS] (state, contents) {
    console.log(contents.length)
    contents.forEach(obj => {
      let index = state.queryCartLists.findIndex((item) => {
        return item.gid === obj.id && item.type === obj.type
      })
       // 找出索引删除一个
      state.queryCartLists.splice(index, 1)
      Util.setLocal(state.queryCartLists, STORAGE_QUERYCART_KEY)
    })
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
