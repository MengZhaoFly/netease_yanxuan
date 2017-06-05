import * as types from '../types'
import data from '@/fetch/api'
const state = {
  classes: {}
}
const actions = {
  // 得到所有分类
  getClasses ({commit}) {
    data.getTypeDesc('types').then(res => {
      commit(types.F_GET_CLASSES, res)
    })
  }
}
const getters = {
  classes: state => state.classes
}
const mutations = {
  [types.F_GET_CLASSES] (state, res) {
    state.classes = res
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
