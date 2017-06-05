const STORAGE_USER_KEY = 'STORAGE_USER_KEY'
// const STORAGE_CARTLIST_KEY = 'STORAGE_CARTLIST_KEY'
// const STORAGE_QUERYMYLIST_KEY = 'STORAGE_QUERYMYLIST_KEY'

export default {
  // 获取
  getLocal (key = STORAGE_USER_KEY) {
    console.log('get local operation')
    return JSON.parse(window.localStorage.getItem(key))
  },
  // 设置用
  setLocal (res, key = STORAGE_USER_KEY, isSaveOldData = false) {
    console.log('set local operation', key)
    if (isSaveOldData) {
      let oldData = this.getLocal(key)
      return window.localStorage.setItem(key, JSON.stringify(oldData.concat(res)))
    }
    return window.localStorage.setItem(key, JSON.stringify(res))
  }
}
