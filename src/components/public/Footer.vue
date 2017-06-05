<template>
  <nav class="m-tabBar">
      <router-link  v-for="item in footList" :key="item.id" :to="item.linkTo" class="item" :class="{active:item.isActive}" >
        <div @click="activethis(item.id)">
         <i class="u-icon" :class="item.activeClass" >
            <span class="cart-tip" v-if="allNum!=0&&item.id===3">{{allNum}}</span>
         </i>
        <span class="txt" >{{item.name}}</span>
        </div>
        
      </router-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    activethis (id) {
      this.$store.dispatch('changeActive', id)
    }
  },
  computed: mapGetters(['footList', 'allNum'])
}
</script>

<style scoped>
.u-icon-tabBar-cart{
  position: relative;
}
.cart-tip{
  position: absolute;
    top: -.1333rem;
    right: -.208rem;
    width: .37333rem;
    height: .37333rem;
    border-radius: .37333rem;
    background-color: #b4282d;
    text-align: center;
    line-height: .37333rem;
    font-size: .24rem;
    color: #fff;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
}
.m-tabBar .active .u-icon-tabBar-cart, .m-tabBar .active .u-icon-tabBar-cate, .m-tabBar .active .u-icon-tabBar-topic, .m-tabBar .active .u-icon-tabBar-ucenter, .m-tabBar .u-icon-tabBar-cart, .m-tabBar .u-icon-tabBar-cart-active, .m-tabBar .u-icon-tabBar-cate, .m-tabBar .u-icon-tabBar-cate-active, .m-tabBar .u-icon-tabBar-index, .m-tabBar .u-icon-tabBar-topic, .m-tabBar .u-icon-tabBar-topic-active, .m-tabBar .u-icon-tabBar-ucenter, .m-tabBar .u-icon-tabBar-ucenter-active {
    display: inline-block;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-se795428cf3-761e5acc99.png);
    background-size: .53333rem 6.53333rem;
    width: .53333rem;
    height: .53333rem;
    vertical-align: middle;
    background-repeat: no-repeat;
}
.m-tabBar>.item.active .txt {
    color: #b4282d;
}
.item.active .u-icon-tabBar-index-active {
    background-position: 0 -2.66667rem;
}
.u-icon-tabBar-index {
    background-position: 0 -3.33333rem;
}

.item.active .u-icon-tabBar-topic-active {
    background-position: 0 -4rem;
}
.m-tabBar .u-icon-tabBar-topic {
    background-position: 0 -4.66667rem;
}

.u-icon-tabBar-cate {
    background-position: 0 -2rem;
}
.item.active .u-icon-tabBar-cate-active {
    background-position: 0 -1.33333rem;
}

.m-tabBar .u-icon-tabBar-cart {
    background-position: 0 -.66667rem;
}
.item.active .u-icon-tabBar-cart-active {
    background-position: 0 0;
}

.m-tabBar .u-icon-tabBar-ucenter {
    background-position: 0 -6rem;
}
.item.active .u-icon-tabBar-ucenter-active {
    background-position: 0 -5.33333rem;
}


.m-tabBar {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 5;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.30667rem;
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
}

.m-tabBar>.item .txt {
    display: block;
    margin-top: .09333rem;
    font-size: .32rem;
    color: #666;
    line-height: 1;
}
.item {
    position: relative;
    text-align: center;
}
</style>
