<template>
  <div class="details">
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="pic in detail.detailPic" :key="pic.id">
          <img :src="pic" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="m-detailBaseInfo">
      <goods-info :info="detail"></goods-info>
      <!--服务-->
      <goods-service ></goods-service>
      <!--评价-->
      <goods-comment :comment="detail.comment"></goods-comment>
    </div>
     <!--商品参数-->
     <goods-attr :attr="detail.attr"></goods-attr>
    <!--图片描述-->
    <div class="dt-section dt-section-1">
      <div class="m-detailHtml">
        <p v-for="item in detail.detailHtml"><img :src="item" ></p>
      </div>
    </div>
    <go-top></go-top>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui'
import goodsComment from './goodsComment'
import goodsAttr from './goodsAttr'
import goodsService from './goodsService'
import goodsInfo from './goodsInfo'
import goTop from '@/components/public/GoTop'
export default {
  name: 'Detail',
  data () {
    return {
      swiperOption: {
        autoplay: 3500,
        loop: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  components: {
    goodsComment,
    goodsAttr,
    goodsService,
    goodsInfo,
    goTop
  },
  created () {
    Indicator.open('加载中...')
    console.log(1)
    let type = this.$route.path.split('/')[2]
    let id = this.$route.path.split('/')[4]
    console.log('detail', {type, id})
    this.$store.dispatch('getDetail', {type, id})
  },
  mounted () {
    console.log(this.$route.path)
  },
  computed: {
    detail () {
      Indicator.close()
      console.log(this.$store.getters.Detail)
      return this.$store.getters.Detail
    }
  }
}
</script>
<style scoped>
  .details {
    margin-bottom: 1.38667rem;
    background-color: #fff;
  }
  
  .swiper {
    position: relative;
    position: 1;
  }
  
  .swiper-pagination.swiper-pagination-fraction {
    position: absolute;
    left: auto;
    right: .4rem;
    width: .72rem;
    height: .37333rem;
    line-height: .37333rem;
    border: 1px solid rgba(0, 0, 0, .15);
    font-size: .26667rem;
    text-align: center;
    color: #333;
    background-color: #fff;
    transition: 0s;
    border-radius: 4px;
  }
  
/*pics*/
.dt-section-1, .dt-section-2 {
    border-bottom: none;
    background-color: #fff;
  width: 100%;
}
.m-detailHtml{
  width: 100%;
}
.m-detailHtml *{
  margin: 0;
  padding: 0;
  line-height: 0;
}
/**/


</style>
