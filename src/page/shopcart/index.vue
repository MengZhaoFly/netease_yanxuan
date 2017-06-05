<template>
  <div class="shopcart">
    <div class="container">
      <s-header ></s-header>
      <!--中部 没有登录-->
        <div class="middle-container" v-if="!localUserInfo.loginStatus">
          <div class="img"></div>
          <div class="txt">
            <div class="noCart-login">
              <div class="noCart-title">去添加点什么吧</div>
              <router-link to="/self" v-if="!localUserInfo.loginStatus"><div class="noCart-btn">登录</div></router-link>
            </div>
          </div>
        </div>
        <div class="cart-content" v-else>
          <swipe-delete></swipe-delete>
        </div>
        <!--已经登陆 但是没有东西-->
        <div class="middle-container" v-if="localUserInfo.loginStatus&&totalLength==0">
          <div class="img"></div>
          <div class="txt">
            <div class="noCart-login">
              <div class="noCart-title">去添加点什么吧</div>
            </div>
          </div>
        </div>
        <div class="buy-del">
          <buy-del v-if="localUserInfo.loginStatus&&hasCheckedLength>0"></buy-del>
        </div>
    </div>
    <v-footer class="footer"></v-footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Footer from '@/components/public/Footer'
import ShopHeader from '@/components/public/ShopHeader'
import swipeDelete from './swipeDelete'
import buyDel from './buyordel.vue'
export default {
  name: 'index',
  data () {
    return {
      value: []
    }
  },
  created () {
    this.$store.dispatch('changeActive', 3)
  },
  components: {
    'v-footer': Footer,
    's-header': ShopHeader,
    'swipe-delete': swipeDelete,
    'buy-del': buyDel
  },
  computed: mapGetters(['localUserInfo', 'totalLength', 'hasCheckedLength'])
}
</script>
<style >
  .container {
    margin-bottom: 1.30667rem;
  }
  .cart-content{
    background-color: #fff;
  }
  .middle-container {
    position: absolute;
    top: -.66667rem;
    right: 0;
    bottom: 0;
    left: 0;
    height: 4rem;
    margin: auto;
    text-align: center;
  }
  
  .middle-container .img {
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
  }
  
  .middle-container .img {
    display: inline-block;
    vertical-align: middle;
    width: 3.30667rem;
    height: 3.30667rem;
    margin-bottom: .10667rem;
    background-size: 3.30667rem 3.30667rem;
    background-position: center center;
    background-repeat: no-repeat;
  }
  
  .middle-container .txt {
    font-size: .37333rem;
    line-height: 1;
    color: #999;
  }
  
  .noCart-login {
    margin-top: -.26667rem;
  }
  
  .noCart-title {
    margin-bottom: .66667rem;
    line-height: 1;
    font-size: .37333rem;
    color: #999;
  }
  
  .noCart-login .noCart-btn {
    margin: auto;
    width: 6.4rem;
    height: 1.22667rem;
    font-size: .37333rem;
    line-height: 1.22667rem;
    color: #fff;
    background-color: #b4282d;
    border-radius: 4px;
    text-align: center;
  }
  /*重写复选框*/
 
</style>
