import * as types from '../types'
import Util from '../../util/common'
const STORAGE_QUERYMYLIST_KEY = 'STORAGE_QUERYMYLIST_KEY'
// import data from '@/fetch/api'
const state = {
  mylist: Util.getLocal(STORAGE_QUERYMYLIST_KEY) || []
}
const actions = {
  setList ({commit}, content) {
    console.log(content)
    content.forEach(item => {
      item.orderid = new Date().getTime()
    })
    commit(types.SET_MYLIST, content)
  }
}
const getters = {
  mylist: state => state.mylist,
  mylistLength: state => state.mylist.length
}
const mutations = {
  [types.SET_MYLIST] (state, content) {
    content.forEach((item) => {
      state.mylist.push(item)
    })
    console.log('mylist', state.mylist)
    Util.setLocal(state.mylist, STORAGE_QUERYMYLIST_KEY)
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
