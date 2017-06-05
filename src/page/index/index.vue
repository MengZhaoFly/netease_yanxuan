<template>
  <div class="Home">
    <v-header class="header"></v-header>
    <router-view class="content"></router-view>
    <v-footer class="footer"></v-footer>
    <go-top></go-top>
  </div>
</template>

<script>
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'
import IndexTabs from '@/components/public/Tabs'
import goTop from '@/components/public/GoTop'
export default {
  name: 'index',
  created () {
    console.log('created')
    this.$Loading.config({
      color: '#b4282d',
      failedColor: '#f0ad4e',
      height: 5
    })
    this.$Loading.start()
    this.$store.dispatch('changeActive', 0)
  },
  mounted () {
    this.$Loading.finish()
    console.log('recommend mounted')
  },
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-indexTabs': IndexTabs,
    goTop
  }
}
</script>

<style>
.header{
  position: fixed;
  top: 0;
  z-index: 100;
}
.Home{
  display: flex;
  flex-direction: column;
}
.content{
  overflow: scroll;
  margin-top: 74px;
  margin-bottom: 1.30667rem;
}
</style>
