<template>
  <div class="service-wraper dt-section">
        <div>
          <div class="m-serviceEntry">
            <div class="left">服务</div>
            <div class="right">
              <div class="right-item-wraper">
                <div class="right-item">30天无忧退货</div>
                <div class="right-item">48小时快速退款</div>
              </div>
              <div class="right-item-wraper">
                <div class="right-item">满88元免邮费</div>
                <div class="right-item">网易自营品牌</div>
              </div>
            </div>
            <i class="icon u-icon u-address-right"></i>
          </div>
        </div>
      </div>
</template>
<script>

</script>
<style scoped>
  /*服务*/
  
  .service-wraper {
    padding: .32rem 0;
    background-color: #fff;
  }
  
  .dt-section {
    background: #fff;
    border-bottom: .26667rem solid #f4f4f4;
  }
  
  .m-serviceEntry {
    padding-left: .4rem;
    font-size: .37333rem;
    min-height: .96rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    position: relative;
  }
  
  .m-serviceEntry .left {
    -webkit-align-self: flex-start;
    -moz-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    line-height: 1;
    color: #333;
    margin-right: .26667rem;
  }
  
  .m-serviceEntry .right {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  
  .m-serviceEntry .right .right-item {
    position: relative;
    padding-left: .21333rem;
    margin-right: .53333rem;
    float: left;
    line-height: 1;
    margin-bottom: .21333rem;
    color: #7f7f7f;
  }
  
  .m-serviceEntry .right .right-item:after {
    content: "";
    position: absolute;
    width: .10667rem;
    height: .10667rem;
    background: #b4282d;
    border-radius: 100%;
    left: 0;
    top: .13333rem;
  }
  
  .m-serviceEntry .u-address-right {
    margin-right: .24rem;
  }
    .u-icon {
    display: inline-block;
    background-size: 100%;
    background-repeat: no-repeat;
    vertical-align: middle;
    width: .66667rem;
    height: .66667rem;
  }
  .u-address-right {
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-596d39df1e.png) no-repeat;
    background-size: 100%;
}
</style>
