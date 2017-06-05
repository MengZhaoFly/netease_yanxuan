import * as types from '../types'
const state = {
  headertabList: [
        {id: 0, name: '推荐', isActive: true, linkTo: '/recommend'},
        {id: 1, name: '居家', isActive: false, linkTo: '/home'},
        {id: 2, name: '餐厨', isActive: false, linkTo: '/cook'},
        {id: 3, name: '配件', isActive: false, linkTo: '/parts'},
        {id: 4, name: '服装', isActive: false, linkTo: '/cloth'},
        {id: 5, name: '洗护', isActive: false, linkTo: '/wash'},
        {id: 6, name: '婴童', isActive: false, linkTo: '/baby'},
        {id: 7, name: '杂货', isActive: false, linkTo: '/messy'},
        {id: 8, name: '饮食', isActive: false, linkTo: '/drink'},
        {id: 9, name: '志趣', isActive: false, linkTo: '/hobby'}
  ],
  typesTabs: [
        {id: 0, name: '推荐', isActive: true, linkTo: '/type/'},
        {id: 1, name: '居家', isActive: false, linkTo: '/type/home'},
        {id: 2, name: '餐厨', isActive: false, linkTo: '/type/cook'},
        {id: 3, name: '配件', isActive: false, linkTo: '/type/parts'},
        {id: 4, name: '服装', isActive: false, linkTo: '/type/cloth'},
        {id: 5, name: '洗护', isActive: false, linkTo: '/type/wash'},
        {id: 6, name: '婴童', isActive: false, linkTo: '/type/baby'},
        {id: 7, name: '杂货', isActive: false, linkTo: '/type/messy'},
        {id: 8, name: '饮食', isActive: false, linkTo: '/type/drink'},
        {id: 9, name: '志趣', isActive: false, linkTo: '/type/hobby'}
  ],
  mylist: [
        {id: 0, name: '全部', isActive: true, linkTo: '/self/mylist'},
        {id: 1, name: '待付款', isActive: false, linkTo: '/mylist/notpay'},
        {id: 2, name: '待发货', isActive: false, linkTo: '/mylist/notsend'},
        {id: 3, name: '已发货', isActive: false, linkTo: '/mylist/allsend'}
  ]
}
const actions = {
  changeHeadertabActive ({commit}, id) {
    commit(types.CHANGE_HEADER_TAB, id)
  },
  changeTypesabActive ({commit}, id) {
    commit(types.CHANGE_TYPES_TAB, id)
  },
  changeMylistActive ({commit}, id) {
    commit(types.CHANGE_MYLIST_TAB, id)
  }
}
const getters = {
  headertabList: state => state.headertabList,
  typesTabs: state => state.typesTabs,
  selfmylist: state => state.mylist
}
const mutations = {
  [types.CHANGE_HEADER_TAB] (state, id) {
    state.headertabList.forEach(list => {
      list.isActive = false
    })
    state.headertabList[id].isActive = true
  },
  [types.CHANGE_TYPES_TAB] (state, id) {
    state.typesTabs.forEach(list => {
      list.isActive = false
    })
    state.typesTabs[id].isActive = true
  },
  [types.CHANGE_MYLIST_TAB] (state, id) {
    state.mylist.forEach(list => {
      list.isActive = false
    })
    state.mylist[id].isActive = true
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
