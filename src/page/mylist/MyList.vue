<template>
  <div >
    <header-bar></header-bar>
    <index-tabs :tabs="tabs" class="mylist"></index-tabs>
  <router-view ></router-view>
  </div>
</template>
<script>
import headerBar from '@/components/public/HeaderBar'
import indexTabs from '@/components/public/Tabs'
export default {
  name: 'mylist',
  data () {
    return {
    }
  },
  components: {
    headerBar,
    indexTabs
  },
  computed: {
    tabs () {
      return this.$store.getters.selfmylist
    }
  }
}
</script>
<style scoped>
.mylist .tab, header.mylist .inner, .mylist, .list-container{
  height: 1.06667rem;
  width: 100%;
}

</style>
