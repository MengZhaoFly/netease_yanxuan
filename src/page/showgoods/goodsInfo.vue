<template>
  <div class="info-wrap">
        <div class="info">
          <h3 class="name">{{info.name}}</h3>
          <div class="line1">
            <p class="simpleDesc">{{info.simpleDesc}}</p>
          </div>
          <div class="line2">
            <span class="priceArea">
                  <span class="currentPrice" >
                    <span data-reactid=".0.0.1.0.2.0.0.0.2.0.0.0">¥</span>
            <span data-reactid=".0.0.1.0.2.0.0.0.2.0.0.1">{{info.price}}</span>
            </span>
            </span>
          </div>
          <div class="tagList">
            <span></span>
            <div class="wrap">
              <li class="item">
                <a class="tag" href="/item/manufacturer?tagId=1001000&amp;page=1&amp;size=100">
                  <span>MUJI制造商</span>
                  <i class="u-icon u-icon-detailTagArrow"></i></a>
                </span>
              </li>
            </div>
          </div>
        </div>
        <div class="specSelect">
          <router-link :to="{ name: 'GoodsSelect', params: { type: type, id: id }}">
          <div class="m-listItem undefined">
            <div class="inner">
              <span class="it">请选择规格数量</span>
            </div>
            <i class="icon u-icon u-address-right"></i>
          </div>
          </router-link>
        </div>
      </div>
</template>
<script>
export default {
  props: ['info'],
  data () {
    return {
      type: null,
      id: null
    }
  },
  created () {
    console.log('goods info is created')
  },
  mounted () {
    this.type = this.$route.path.split('/')[2]
    this.id = this.$route.path.split('/')[4]
  }
}
</script>
<style scoped>
/*info*/
  .info-wrap{
    background-color: #fff;
  }
  .m-detailBaseInfo {
    background-color: #fff;
  }
  
  .m-detailBaseInfo .info-wrap {
    padding-left: .4rem;
  }
  
  .m-detailBaseInfo .info-wrap .info {
    padding-right: .4rem;
    padding-top: .82667rem;
    padding-bottom: .49333rem;
    border-bottom: 1px solid #d9d9d9;
    background-color: #fff;
    text-align: center;
  }
  
  .m-detailBaseInfo .info-wrap .info .name {
    margin-bottom: .13333rem;
    line-height: 1;
    font-size: .45333rem;
    color: #333;
    text-align: center;
  }
  
  .m-detailBaseInfo .info-wrap .info .line1 {
    padding: 0 .4rem;
  }
  
  .m-detailBaseInfo .info-wrap .info .line1 .simpleDesc {
    font-size: .37333rem;
    color: #999;
    line-height: 1.3;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .m-detailBaseInfo .info-wrap .info .line2 {
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    height: 1.06667rem;
  }
  
  .m-detailBaseInfo .info-wrap .info .line2 .priceArea {
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
  }
  
  .m-detailBaseInfo .info-wrap .info .line2 .currentPrice {
    font-size: .64rem;
    color: #b4282d;
    vertical-align: middle;
    line-height: .64rem;
  }
  
  .m-detailBaseInfo .info-wrap .info .tagList .wrap {
    margin-top: .26667rem;
    margin-left: .21333rem;
    display: inline-block;
    height: .48rem;
  }
  
  .m-detailBaseInfo .info-wrap .info .tagList .wrap .item {
    /*line-height: .48rem;*/
    height: .48rem;
    padding: 0 .13333rem;
    font-size: .32rem;
    text-align: center;
    border: 1px solid #f48f18;
    border-radius: 4px;
  }
  
  .m-detailBaseInfo .info-wrap .info .tagList .wrap .tag {
    color: #f48f18;
  }
  
  .m-detailBaseInfo .info-wrap .info .tagList .wrap .tag span {
    display: inline-block;
    vertical-align: middle;
  }
  
  .m-detailBaseInfo .specSelect .m-listItem,
  .m-hdrkDetail {
    border-bottom: 1px solid #d9d9d9;
  }
  
  .m-listItem {
    display: -webkit-box;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
    color: #333333;
  }
  
  .m-detailBaseInfo .specSelect .inner {
    font-size: .37333rem;
    line-height: .4rem;
  }
  
  .m-listItem .inner {
    width: 100%;
    zoom: 1;
  }
  
  .m-listItem>.icon {
    position: absolute;
    right: .21333rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  .u-address-right {
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-596d39df1e.png) no-repeat;
    background-size: 100%;
  }
  
  .u-icon {
    display: inline-block;
    background-size: 100%;
    background-repeat: no-repeat;
    vertical-align: middle;
    width: .66667rem;
    height: .66667rem;
  }
  
  .u-icon-detailTagArrow {
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detailTagArrow-18bee52dab.png);
    width: .13333rem;
    height: .24rem;
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
