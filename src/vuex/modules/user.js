import * as types from '../types'
import Util from '../../util/common'
const state = {
  localUserInfo: Util.getLocal() || {}
}
const actions = {
  // 用户登录
  setUserInfo ({commit}, res) {
    Util.setLocal(res)
    commit(types.SET_USER, res)
  }
}
const getters = {
  localUserInfo: state => state.localUserInfo
}
const mutations = {
  [types.SET_USER] (state, res) {
    state.localUserInfo = res
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
