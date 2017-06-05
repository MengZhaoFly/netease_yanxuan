<template>
  <div class="m-billingFt m-cartFt">
   <div class="left" >
     <div class="check-all" @click="checkAll"  >
       <i class="m-checkbox checkbox" :class="{checked:ischecked}" ></i>
       <span>已选({{hasCheckedLength}})</span>
     </div>
     <div class="total">
       ￥{{hasCheckedMoney}}
     </div>
   </div>
   <div class="right" @click="tomylist">下单</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
    }
  },
  computed: {
    hasCheckedLength () {
      return this.$store.getters.hasCheckedLength
    },
    hasCheckedMoney () {
      return this.$store.getters.hasCheckedMoney
    },
    ischecked () {
      return this.$store.getters.isAllChecked
    }
  },
  methods: {
    checkAll () {
      console.log('all operation')
      this.$store.dispatch('changeAllCheckedOrNot', this.ischecked)
      this.$store.dispatch('toggleIsAllChecked')
    },
    tomylist () {
      let nowCart = this.$store.getters.queryCartLists
      let filterCart = nowCart.filter(item => {
        return item.ischecked === true
      })
      // 筛选出选中的商品
      this.$store.dispatch('setList', filterCart)
      // 同时还要删除购物车
      this.$store.dispatch('delCart', filterCart)
      // 删除查询到的购物车订单
      this.$store.dispatch('delQueryList', filterCart)
      Toast({
        message: '购买成功',
        iconClass: 'icon icon-success'
      })
      this.$router.push({name: 'Mylist'})
    }
  }
}
</script>
<style scoped>
.m-cartFt{
  display: flex;
  flex-direction: row;
  width:10vw;
}
.left{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-all{
  display: flex;
  align-items: center;
  margin-left: .5rem;
  font-size: .37333rem;
}
.right{
width:3.01333rem;
vertical-align: middle;
    width: 3.36rem;
    text-align: center;
    line-height: 1.28rem;
    font-size: .37333rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    overflow: hidden;
}
.m-billingFt{
  position: fixed;
  left: 0;
  bottom: 1.30667rem;
    width: 100%;
    height: 1.28rem;
    background-color: #fff;
}
.total{
  color: #b4282d;
  padding-right: .4rem;
  
}
 .checkbox {
    margin-right: .32rem;
}
.m-checkbox, .m-checkbox-1 {
    width: .50667rem;
    height: .50667rem;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-sed825af9d3-a6b8540d42.png);
    background-repeat: no-repeat;
    background-size: .50667rem 6.48rem;
    display: inline-block;
}
.m-checkbox.checked {
    background-position: 0 -2.56rem;
}
.m-checkbox {
    background-position: 0 -5.97333rem;
}
</style>
