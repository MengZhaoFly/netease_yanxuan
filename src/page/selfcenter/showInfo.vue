<template>
  <div class="m-u">
    <div class="g-row">
      <div class="m-profile">
        <div class="g-row">
          <div class="left">
            <img class="avatar" src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png">
            <div class="info">
              <p class="nickname">{{username}}</p>
              <div class="membershipLevel"><span class="memberTitle0">普通用户</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-row">
      <div class="m-uMenu" >
        <ul class="list clearfix" >
          <li class="item" >
            <router-link class="m-uMenuItem" to="self/mylist" title="我的订单" ><i class="img u-icon u-icon-ulist" ></i><span class="txt" >我的订单</span></router-link>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/pin/item/list" title="周六一起拼" ><i class="img u-icon u-icon-upin" ></i><span class="txt" >周六一起拼</span></a>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/return/service" title="售后服务"><i class="img u-icon u-icon-uaftersale" ></i><span class="txt" >售后服务</span></a>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/coupon" title="优惠券" ><i class="img u-icon u-icon-ucoupon" ></i><span class="txt" >优惠券</span></a>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/preemption/index" title="优先购" ><i class="img u-icon u-icon-upreemption" ></i><span class="txt" >优先购</span></a>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/giftCard/list" title="礼品卡" ><i class="img u-icon u-icon-ugiftcard" ></i><span class="txt" >礼品卡</span></a>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/membership/index" title="会员福利" ><i class="img u-icon u-icon-umembershipBenefits" ></i><span class="txt" >会员福利</span></a>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/address/list" title="地址管理" ><i class="img u-icon u-icon-uaddress" ></i><span class="txt" >地址管理</span></a>
          </li>
          <li class="item" >
            <a class="m-uMenuItem" href="/user/securityCenter" title="帐号安全" ><i class="img u-icon u-icon-usecurity" ></i><span class="txt" >帐号安全</span></a>
          </li>
          <li class="item item-bottom" >
            <a class="m-uMenuItem" href="javascript:void(0);" title="联系客服" ><i class="img u-icon u-icon-ukefu" ></i><span class="txt" >联系客服</span></a>
          </li>
          <li class="item item-bottom" >
            <a class="m-uMenuItem" href="/help" title="帮助中心" ><i class="img u-icon u-icon-uhelp" ></i><span class="txt" >帮助中心</span></a>
          </li>
          <li class="item item-bottom" >
            <a class="m-uMenuItem" href="/feedback" title="意见反馈" ><i class="img u-icon u-icon-ufeedback" ></i><span class="txt" >意见反馈</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="g-row"></div>
  </div>
</template>
<script>
import Util from '../../util/common'
export default {
  computed: {
    username () {
      return Util.getLocal().email
    }
  }
}
</script>
<style scoped>
  .g-row {
    width: 10rem;
    margin-right: auto;
    margin-left: auto;
  }
  
  .m-profile {
    height: 3.6rem;
    background-image: url(http://yanxuan.nosdn.127.net/6ae93353e95b3450a2710bb43f925a63.jpg);
    background-size: 100%;
    padding: 0 .4rem;
    overflow: hidden;
  }
  
  .m-profile .g-row {
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
  }
  
  .m-profile .left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    -moz-justify-content: flex-start;
    justify-content: flex-start;
    padding: .85333rem 0;
    width: 7.2rem;
  }
  
  .m-profile .left .avatar {
    vertical-align: middle;
    width: 1.89333rem;
    height: 1.89333rem;
    border-radius: 50%;
  }
  
  .m-profile .left .info {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: .4rem;
    line-height: 1;
    overflow: hidden;
  }
  
  .m-profile .left .info .nickname {
    color: #fff;
    font-size: .48rem;
    line-height: 1.2;
    text-align: left;
    margin-bottom: .13333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .m-profile .left .info .membershipLevel span.memberTitle0 {
    color: #7f7f7f;
  }
  
  .m-profile .left .info .membershipLevel span {
    color: #b4a078;
    font-size: .37333rem;
    vertical-align: middle;
  }
  .m-uMenu {
    margin-bottom: .53333rem;
    background: #fff;
}
.m-uMenu .list {
    zoom: 1;
}
.m-uMenu .item {
    float: left;
    width: 33.33333%;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.m-uMenuItem {
    display: block;
    height: 2.4rem;
    padding-top: .6rem;
    text-align: center;
}
.m-uMenuItem .img {
    width: .66667rem;
    height: .66667rem;
    vertical-align: middle;
    margin-bottom: .21333rem;
}
.u-icon-ulist {
    background-position: 0 -6.4rem;
}
.u-icon-uaddress, .u-icon-uaftersale, .u-icon-ucoupon, .u-icon-ufeedback, .u-icon-ugiftcard, .u-icon-uhelp, .u-icon-ukefu, .u-icon-ulead, .u-icon-ulist {
    height: .66667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s75fa4432cf-c67f6f862a.png);
    background-repeat: no-repeat;
    background-size: .66667rem 10.16rem;
    width: .66667rem;
}
.m-uMenuItem .txt {
    display: block;
    font-size: .32rem;
    line-height: 1;
    color: #333;
}
.u-icon-upin {
    background-position: 0 -7.89333rem;
}
.u-icon-upin, .u-icon-upreemption, .u-icon-usecurity {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s75fa4432cf-c67f6f862a.png);
    background-repeat: no-repeat;
    background-size: .66667rem 10.16rem;
    width: .66667rem;
    height: .66667rem;
}
.u-icon-uaftersale {
    background-position: 0 -.8rem;
}
.u-icon-ucoupon {
    background-position: 0 -1.6rem;
}
.u-icon-upreemption {
    background-position: 0 -8.69333rem;
}
.u-icon-ugiftcard {
    background-position: 0 -3.2rem;
}
.u-icon-umembershipBenefits {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s75fa4432cf-c67f6f862a.png);
    background-repeat: no-repeat;
    background-size: .66667rem 10.16rem;
    width: .66667rem;
    height: .56rem;
    background-position: 0 -7.2rem;
}
.u-icon-uaddress {
    background-position: 0 0;
}
.u-icon-usecurity {
    background-position: 0 -9.49333rem;
}
.u-icon-ukefu {
    background-position: 0 -4.8rem;
}
.u-icon-uhelp {
    background-position: 0 -4rem;
}
.u-icon-ufeedback {
    background-position: 0 -2.4rem;
}
</style>
