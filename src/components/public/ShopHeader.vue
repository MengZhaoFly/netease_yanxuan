<template>
  <div class="shopcart">
      <div class="m-cartHd" >
        <span class="logo" >购物车</span>
        <span class="right" >编辑</span>
    </div>
        <!--promise-->
      <deal-promise></deal-promise>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import dealPromise from '@/components/public/DealPromise'
export default {
  components: {
    dealPromise
  },
  computed: mapGetters(['localUserInfo'])
}
</script>
<style scoped>
.m-cartHd {
    height: 1.17333rem;
    padding: 0 .4rem;
    line-height: 1.17333rem;
    text-align: center;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: .06rem;
}
.logo {
    display: inline-block;
    font-size: .48rem;
}
.m-cartHd .right {
    position: absolute;
    top: 0;
    right: .4rem;
    font-size: .4rem;
}
.shopcart-promise{
  background-color: #f4f4f4;
}
.shopcart-promise .u-icon-servicePolicy-index {
  display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    width: .13333rem;
    height: .13333rem;
}
</style>
