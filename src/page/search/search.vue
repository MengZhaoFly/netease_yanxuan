<template>
  <div class="search">
  <mt-search
    v-model="value"
    cancel-text="取消"
    placeholder="搜索">
  </mt-search>
  </div>
</template>
<script>
export default{
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style scoped>
  .search .mint-searchbar-cancel{
 color: #b4282d;
  }
</style>
