import { Indicator } from 'mint-ui'
import * as types from '../types'
import data from '@/fetch/api'
const state = {
  cookDesc: {},
  cookDetail: {}
}
const actions = {
  // cook简要
  getcookDesc ({commit}, type) {
    console.log('type', type)
    data.getTypeDesc(type).then(res => {
      console.log('type data:', res)
      Indicator.close()
      commit(types.SET_COOK_DESC, res)
    })
  },
  getcookDetail ({commit}, type, id) {
    data.getTypeDetail(type, id).then(res => {
      console.log('type data:', res)
      commit(types.SET_COOK_DETAIL, res)
    })
  }

}
const getters = {
  cookDesc: state => state.cookDesc
}
const mutations = {
  [types.SET_COOK_DESC] (state, res) {
    state.cookDesc = res
  },
  [types.SET_COOK_DETAIL] (state, res) {
    state.cookDetail = res
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
