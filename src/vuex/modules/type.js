import { Indicator } from 'mint-ui'
import * as types from '../types'
import data from '@/fetch/api'
const state = {
  Desc: {},
  Detail: {}
}
const actions = {
  // 简要
  getDesc ({commit}, type) {
    // console.log('type', type)
    data.getTypeDesc(type).then(res => {
      // console.log(`get ${type} data:`, res)
      Indicator.close()
      commit(types.SET_TYPE_DESC, res)
    })
  },
  getDetail ({commit}, obj) {
    console.log(`post ${obj.type}${obj.id} data:`)
    data.getTypeDetail(obj.type, obj.id).then(res => {
      // console.log('res', res)
      commit(types.SET_TYPE_DETAIL, res)
    })
  }

}
const getters = {
  Desc: state => state.Desc,
  Detail: state => state.Detail
}
const mutations = {
  [types.SET_TYPE_DESC] (state, res) {
    state.Desc = res
  },
  [types.SET_TYPE_DETAIL] (state, res) {
    state.Detail = res
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
