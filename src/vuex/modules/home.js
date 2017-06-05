import * as types from '../types'
import data from '@/fetch/api'
const state = {
  homeDesc: {},
  homeDetail: {}
}
const actions = {
  // home简要
  gethomeDesc ({commit}, type) {
    console.log('type', type)
    data.getTypeDesc(type).then(res => {
      // console.log('type data:', res)
      commit(types.SET_HOME_DESC, res)
    })
  },
  gethomeDetail ({commit}, type, id) {
    data.getTypeDetail(type, id).then(res => {
      console.log('type data:', res)
      commit(types.SET_HOME_DETAIL, res)
    })
  }

}
const getters = {
  homeDesc: state => state.homeDesc
}
const mutations = {
  [types.SET_HOME_DESC] (state, res) {
    state.homeDesc = res
  },
  [types.SET_HOME_DETAIL] (state, res) {
    state.homeDetail = res
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
