<template>
  <div>
  <div class="dt-paramselect">
    <div class="info-con">
      <div class="left f-fl">
        <img src="http://yanxuan.nosdn.127.net/32d0742f8273ca4705e854d32b1cb872.jpg?quality=90&amp;thumbnail=200x200&amp;imageView">
      </div>
      <div class="right f-fl">
        <div class="con">
          <p class="price"><span><span ><span >价格：¥</span><span>{{detail.price*number}}</span></span>
            </span>
          </p>
          <p class="sku"><span>已选择：</span><span class="it"><span>{{ picked }}</span></span></p>
        </div>
      </div>
    </div>
    <div  class="taste">
      <div class="tt" >选择</div>
      <div class="tab " :class="{'tab-sel' :curChoose === index}"
           v-for="(item,index) in detail.choose" :key="index"  @click="choose(index)">
          <input type="radio" :id="index" :value="item" v-model="picked" checked="true" style="display: none;">
          <label :for="index">{{item}}</label>
      </div>
    </div>
    <div class="u-format">
      <div class="tt">数量</div>
      <div class="con m-selNumRow" >
        <div class="m-selnum " :class="{dl:parseInt(this.picked)>0, dlr: this.picked.length===0, allactive:this.number>1 }" >
          <i class="less z-dis" @click="reduceNum"></i>
          <div class="textWrap" ><input type="tel" value="1" v-model="number" ></div>
          <div class="more z-dis" @click="addNum"></div>
        </div>
      </div>
    </div>
  </div>
  <!--脚步-->
   <div class="footer">
    <div class="inner">
      <button class="w-button w-button-xxl w-button-noRadius btn btn-icon w-button-ghostWhite">
        <i class="u-icon u-icon-detail-kefu"></i>
      </button>
      <button class="w-button w-button-xxl w-button-noRadius btn btn-text w-button-ghostWhite" @click="buyitnow">立即购买</button>
      <button class="w-button w-button-xxl w-button-noRadius btn btn-text" @click="addToCart">加入购物车</button>
    </div>
  </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
import cartFooter from './cartFooter'
import data from '@/fetch/api'
export default {
  name: 'select',
  data () {
    return {
      number: 1,
      curChoose: 0
    }
  },
  created () {
    this.type = this.$route.path.split('/')[2]
    this.id = parseInt(this.$route.path.split('/')[4])
    // console.log('vue', {type, id})
  },
  mounted () {
  },
  computed: {
    detail () {
      return this.$store.getters.Detail
    },
    picked () {
      console.log()
      if (this.detail.choose) {
        return this.detail.choose[this.curChoose]
      } else {
        return ''
      }
    }
  },
  methods: {
    // ++ 数量
    addNum () {
      console.log('add')
      if (this.picked === '') return false
      if (this.number >= 8) {
        Toast('超过最大数量')
        return false
      }
      this.number ++
    },
    // -- 数量
    reduceNum () {
      if (this.picked === '') return false
      if (this.number <= 1) {
        Toast('最少购买一件')
        return false
      }
      this.number --
    },
    choose (index) {
      this.curChoose = index
    },
    addToCart () {
      if (!this.$store.getters.localUserInfo.loginStatus) {
        this.$router.push({path: '/self'})
        return
      }
      let obj = {
        type: this.type,
        gid: this.id,
        picked: this.picked,
        number: this.number
      }
      // check
      this.$store.dispatch('checkIsExist', obj)
      if (this.$store.getters.isExist) return false
      this.$store.dispatch('setCartList', obj)
      this.$store.dispatch('saveCartList')
      console.log('add to cart')
      Toast('加入购物车成功')
    },
    buyitnow () {
      if (!this.$store.getters.localUserInfo.loginStatus) {
        this.$router.push({path: '/self'})
        return
      }
      let type = this.$route.path.split('/')[2]
      let id = this.$route.path.split('/')[4]
      let tempArr = []
      data.getTypeDetail(type, id).then(res => {
        let temp = {
          id: res.id,
          type: type,
          url: res.detailPic[0],
          line1: res.name,
          line2: this.picked,
          line3: `¥${res.price}`,
          ischecked: true,
          num: this.number,
          price: res.price
        }
        tempArr.push(temp)
        this.$store.dispatch('setList', tempArr)
      })
      Toast({
        message: '下单成功',
        iconClass: 'icon icon-success'
      })
      this.$router.push({name: 'Mylist'})
    }
  },
  components: {
    cartFooter
  }
}
</script>
<style scoped>
  .dt-paramselect {
    padding: .4rem .4rem 1.73333rem;
    background-color: #fff;
    height: calc(100vh - 0.72rem - 1.38667rem);
  }
  
  .dt-paramselect .info-con {
    height: 2.8rem;
    padding-bottom: .53333rem;
  }
  
  .dt-paramselect .info-con .right .price {
    font-size: .42667rem;
    padding-bottom: .13333rem;
    line-height: 1;
  }
  
  .dt-paramselect .info-con .right .sku {
    font-size: .37333rem;
    line-height: 1.4;
  }
  
  .dt-paramselect .info-con .left {
    width: 2.26667rem;
    overflow: hidden;
    border-radius: .04rem;
    margin-right: -2.26667rem;
    background-color: #f4f4f4;
  }
  
  .dt-paramselect .info-con .left,
  .dt-paramselect .info-con .right {
    height: 100%;
  }
  
  .f-fl {
    float: left;
  }
  
  .dt-paramselect .info-con .right {
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
    line-height: 1;
    margin-left: 2.58667rem;
  }
  .tab{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    border-radius: 3px;
    padding: 0 .45333rem;
    font-size: .32rem;
    line-height: .85333rem;
    margin-right: .32rem;
    margin-bottom: .21333rem;
    border: 1px solid #333;
  }
  .tab.tab-sel {
    border: 1px solid #b4282d;
    color: #b4282d;
}
   .tt {
    line-height: 1;
    font-size: .37333rem;
    padding-bottom: .32rem;
}
/*- or +*/
/*- + 不可点击*/
.m-selnum.dlr {
    background-position: 0 -2.08rem;
}
/*+ 可以点击*/
.m-selnum.dl {
    background-position: 0 -1.04rem;
}
/*- + 都可以点击*/
.m-selnum {
    background-position: 0 -8.29333rem;
    width: 4.13333rem;
    height: .93333rem;
}
.m-selnum.allactive{
    background-position: 0 -8.29333rem;  
}

.m-selnum, .m-selnum-1 {
    display: inline-block;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/selnum-s2aa5e4fbe0-14d469f19a.png);
    background-repeat: no-repeat;
    background-size: 4.12rem 9.2rem;
    vertical-align: middle;
}
.m-selnum .less, .m-selnum .more {
    width: 1.2rem;
}
.m-selnum .less, .m-selnum .more, .m-selnum .textWrap {
    position: relative;
    float: left;
    height: .88rem;
}
.m-selnum .less, .m-selnum .more, .m-selnum .textWrap, .m-selnum input {
    border: none;
    background-color: transparent;
}
.m-selnum .textWrap {
    position: relative;
    width: 1.72rem;
    text-align: center;
    font-size: .32rem;
    line-height: .88rem;
}
.m-selnum .less, .m-selnum .more, .m-selnum .textWrap {
    position: relative;
    float: left;
    height: .88rem;
}
.m-selnum .less, .m-selnum .more, .m-selnum .textWrap, .m-selnum input {
    border: none;
    background-color: transparent;
}
.m-selnum .textWrap input {
    position: relative;
    z-index: 1;
    font-size: .32rem;
}
.m-selnum input {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    text-align: center;
    color: #333;
}
.m-selnum .less, .m-selnum .more {
    width: 1.2rem;
}
/*脚部*/
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.inner{
  display: flex;
}
.inner .btn.btn-icon {
    flex: 0 0 2.08rem
} .inner .w-button-ghostWhite {
    border-right: 0;
}.inner .btn {
    align-items: center;
    justify-content: center;
    height: 1.38667rem;
}
.u-icon-detail-kefu {
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-aaf8414a44.png);
    width: .8rem;
    height: .8rem;
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.inner .btn.btn-text {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
} .inner .w-button-ghostWhite {
    border-right: 0;
} 
.w-button, .w-button:focus, .w-button:visited {
    display: inline-block;
    vertical-align: middle;
    width: 3.36rem;
    text-align: center;
    line-height: .90667rem;
    font-size: .37333rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    overflow: hidden;
}
.w-button-xxl, .w-button-xxl:focus, .w-button-xxl:visited {
    line-height: 1.28rem;
}
.inner .btn.btn-text {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
 .inner .btn {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-grid-row-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    height: 1.38667rem;
}
.w-button-ghostWhite, .w-button-ghostWhite:focus, .w-button-ghostWhite:visited {
    border-color: #c7c7c7;
    color: #333;
    background-color: #fff;
}
</style>
