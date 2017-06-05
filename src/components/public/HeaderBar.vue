<template>
  <div class="m-topBar">
    <div class="bd">
      <div class="row">
        <div class="m-hamburger toggle" :class='{active: isActive}' @click="toggleMenu"></div>
        <router-link to="/">
          <i class="logo u-icon u-icon-logo"></i>
        </router-link>
        <div class="right">
          <router-link to="/search" class="search">
            <i class="u-icon u-icon-search1"></i>
          </router-link>
          <router-link to="/shopcart" class="cart">
            <i class="u-icon u-icon-cart">
              <span class="cart-tip" v-show="allNum!=0">{{allNum}}</span>
            </i>
          </router-link>
        </div>
      </div>
        <!--隐藏菜单的推荐-->
        <transition name="togglemenu">
        <div class="menu" v-show="isActive">
          <ul class="list" >
            <li class="item" ><router-link to="/"><i class="u-icon u-icon-house"></i><span class="txt" >首页</span></router-link></li>
            <li
              class="item" ><router-link to="/special"><i class="u-icon u-icon-topic" ></i><span class="txt" >专题</span></router-link></li>
            <li
              class="item" ><router-link to="/type"><i class="u-icon u-icon-cate" ></i><span class="txt" >分类</span></router-link></li>
            <li
              class="item" ><router-link to="/self"><i class="u-icon u-icon-profile" ></i><span class="txt" >个人</span></router-link></li>
          </ul>
        </div>
        </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  },
  computed: {
    allNum () {
      return this.$store.getters.allNum
    }
  }
}
</script>
<style>
.cart-tip{
  position: absolute;
    top: .04rem;
    right: -.08rem;
    width: .37333rem;
    height: .37333rem;
    border-radius: .37333rem;
    background-color: #b4282d;
    text-align: center;
    line-height: .37333rem;
    font-size: .24rem;
    color: #fff;
}
  .m-topBar,
  .m-topBar .bd {
    position: relative;
  }
  
  .m-topBar .bd {
    height: 1.16rem;
    background-color: #fafafa;
  }
  
  .bd .row {
    background-color: #fafafa;
    z-index: 999;
    width: 10rem;
    margin: auto;
    overflow: hidden;
    padding: 0 .21333rem 0 .32rem;
    height: 1.17333rem;
    display: flex;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: fixed;
  }
  
  .m-hamburger {
    background-position: 0 -3.38667rem;
  }


  .m-hamburger,
  .m-hamburger.active {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s1e8271482f-c93fcb3fb7.png);
    background-size: 2.29333rem 9.28rem;
    width: .66667rem;
    height: .66667rem;
    background-repeat: no-repeat;
  }
  .m-hamburger.active {
    background-position: 0 -4.18667rem;
}
  .m-topBar .bd .row .right {
    margin-left: auto;
    margin-right: .06667rem;
  }
  
  .m-topBar .bd .row .search {
    margin-right: .26667rem;
  }
  
  .m-topBar .bd .row .search .u-icon-search1 {
    position: relative;
    bottom: 0;
  }
  
  .u-icon-search1 {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s1e8271482f-c93fcb3fb7.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 9.28rem;
    width: .85333rem;
    height: .85333rem;
    background-position: 0 -7.65333rem;
  }
  
  .u-icon-cart {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s1e8271482f-c93fcb3fb7.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 9.28rem;
    width: .85333rem;
    height: .85333rem;
    background-position: 0 0;
    position: relative;
  }
  
  .m-topBar .bd .row .logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  
  .u-icon-logo {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s1e8271482f-c93fcb3fb7.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 9.28rem;
    width: 2.29333rem;
    height: .72rem;
    background-position: 0 -2.53333rem;
  }
  /*隐藏的选项*/
  .m-topBar .menu-isHidden {
    transform: translate3d(0,-100%,0);
    opacity: 0;
}
.m-topBar .menu.togglemenu-enter-active, .m-topBar .menu.togglemenu-leave-active {
    transition: top .3s linear;
}
.m-topBar .menu.togglemenu-enter, .m-topBar .menu.togglemenu-leave-active {
   top: 0;
}
.m-topBar .menu {
  text-align: center;
    position: fixed;
    z-index: 3;
   top: 42px;
    left: 0;
    width: 100%;
    padding: .25333rem 0;
    background-color: #fafafa;
    border-bottom: 1px solid rgba(0,0,0,.15);
    text-align: center;
    transform: translate3d(0,0,0);
    opacity: 1;
    transition: top 1s;
}
.m-topBar .menu .list {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
}
.m-topBar .menu .list .item {
   display: inline-block;
}
.m-topBar .menu .list .item .txt {
    display: block;
    font-size: .32rem;
    color: #666;
    line-height: 1;
}
.u-icon-house {
    background-position: 0 -1.76rem;
}
.u-icon-cate {
    background-position: 0 -.98667rem;
}
.u-icon-cate, .u-icon-house {
    width: .64rem;
    height: .64rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s1e8271482f-c93fcb3fb7.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 9.28rem;
}
.u-icon-topic {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s1e8271482f-c93fcb3fb7.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 9.28rem;
    width: .64rem;
    height: .64rem;
    background-position: 0 -8.64rem;
}
.u-icon-profile {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s1e8271482f-c93fcb3fb7.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 9.28rem;
    width: .64rem;
    height: .64rem;
    background-position: 0 -6.88rem;
}
</style>
