<template>
  <div class="type">
    <div class="container">
      <div class="search-container">
        <div class="m-topSearchIpt ipt" >
            <i class="icon" ></i>
            <span class="placeholder">
                <span >商品搜索, 共</span>
              <span data-reactid=".0.0.0.1.0.1.1">5110</span>
              <span >款好物</span>
            </span>
        </div>
        
      </div>
      <div class="type-content">
        <v-indexTabs :tabs="tabs" class="type-tabs"></v-indexTabs>
        <div class="tabs-child">
          <transition name="translatefade">
              <router-view ></router-view>
          </transition>
        </div>
      </div> 
    </div>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
import Footer from '@/components/public/Footer'
import vIndexTabs from '../../components/public/Tabs'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('changeActive', 2)
  },
  components: {
    'v-footer': Footer,
    'v-indexTabs': vIndexTabs
  },
  computed: {
    tabs () {
      return this.$store.getters.typesTabs
    }
  }
}
</script>

<style >
/*transiton*/
.translatefade-enter{
transform: translate3d(0, 0, 0);
transition: all .5s;
}
.translatefade-enter-active{
  transition: transform 1s;
  transform: translate3d(0, -100%, 0);
}
.translatefade-leave{
  transform: translate3d(0, 0, 0); 
}
.translatefade-leave-active{
  
  transform: translate3d(130%, 0, 0);
  transition: transform 1s;
  
}
.type-content{
  width: 100%;
  display: flex;
}
.container{
    margin-bottom: 1.30667rem;
    overflow: hidden;
}
.search-container{
  display: flex;
      align-items: center;
    height: 1.17333rem;
    padding: 0 .4rem;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #d9d9d9;;
}
.m-topSearchIpt {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    width: 100%;
}.m-topSearchIpt .icon {
    display: inline-block;
    width: .37333rem;
    height: .37333rem;
}
.m-topSearchIpt .icon {
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: .13333rem;
}
.m-topSearchIpt .placeholder {
    color: #666;
}
/*重写搜索tabs*/
header.type-tabs{
  width: 2.16rem;
  height: 15.3rem;
  border-right: 1px solid #d9d9d9;
}
.type-tabs .list-container{
  display: block;
  z-index: 10000;
  padding: 0;
}
.type-tabs .list{
  overflow: scroll;
}
.type-tabs .inner {
  display: block;
}
header.type-tabs::after{
  display: none;
}
header.type-tabs .tab.active .txt:after {
    content: ' ';
    position: absolute;
    left: -.64rem;
    bottom: 0;
    height: 100%;
    width: .05333rem;
    background-color: #b4282d;
}
header.type-tabs .tab{
}
header.type-tabs .tab{
  justify-content: flex-start;
  margin-top: .53333rem;
}
header.type-tabs .tab:first-of-type {
  margin-left: .64rem;
}
/*右边详情*/
.tabs-child{
  padding: .4rem .4rem .28rem;
  flex: 1 1 7.8rem;
}

</style>
