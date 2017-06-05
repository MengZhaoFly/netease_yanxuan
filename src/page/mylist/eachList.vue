<template>
  <div class="lists">
    <div class="v-for-lists" v-for="item in mylist">
      <div class="row">
        <p class="order-no">订单编号:{{item.orderid}}</p>
        <p class="operation">取消订单</p>
      </div>
      <div class="row lists-detail">
        <div class="img">
          <img :src="item.url" alt="">
        </div>
        <div class="listdesc">
          <p class="listname">{{item.line1}}</p>
          <p class="listname">{{item.line2}}</p>
          <p>共{{item.num}}种商品</p>
        </div>
        <div class="liststatus">
          <P class="listpackage">包裹1</P>
          <P class="nopay">待付款</P>
        </div>
      </div>
      <div class="row">
          <p>实付：¥{{item.price}}</p>
          <p>付款</p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  computed: {
    mylist () {
      return this.$store.getters.mylist
    }
  }
}
</script>
<style scoped>
.v-for-lists{
margin-top: .26667rem;
}
.lists{
  padding-left: .4rem;
    padding-left: .4rem;
    background-color: #fff;
    font-size: .37333rem;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: .4rem;
}
.img{
  width: 1.86667rem;
    height: 1.86667rem;
    background-color: #f4f4f4;
}
div.row:first-child{
  height: 1.06667rem;
    line-height: 1.06667rem;
    font-size: .37333rem;
}
.lists-detail {
  padding: .33333rem 0;
}
.liststatus{
  padding-right: .4rem;
}
div.row:last-child {
  border-top: 1px solid rgba(0,0,0,.2);
  height: 1.32rem;
    line-height: 1.32rem;
}
.desc .name {
    width: 5.33333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: .56rem;
}
.listdesc{
  margin-left: -1.5rem;
}
.listpackage{
  color: black;
}
.nopay{
  font-size: .32rem;
    color: #b4282d;
}
</style>
