<template>
  <div>
  <div class="slideWarp">
  <swiper :options="swiperOption">
      <swiper-slide v-for="slide in bannerList" :key="slide.id">
        <img :src="slide.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
      <!--promise-->
  <deal-promise></deal-promise>

  <div class="m-indexFloor">
   <header class="hd">
     <router-link to="/" class="more">
       <span>品牌制造商直供</span><i class="u-icon u-icon-go2 icon"></i>
     </router-link>
    </header>
     <div class="m-indexManufacturersSupplying">
       <ul class="list">
         <li class="item">
           <router-link to="/detail/indexPage/id/0">
             <div class="cnt" >
               <h4 class="title">MUJI制造商</h4>
                <span class="price" >
                  <span >12.9</span>
                  <span >元起</span>
               </span>
              </div>
              <img src="http://yanxuan.nosdn.127.net/e649b15c56d200bd1764c68d74fe85ff.png"  style="opacity: 1;">
           </router-link >
         </li>
         <li class="item">
           <router-link to="/detail/indexPage/id/1">
           <div class="cnt" >
               <h4 class="title">CK制造商</h4>
                <span class="price" >
                  <span >39</span>
                  <span >元起</span>
               </span>
              </div>
              <img src="http://yanxuan.nosdn.127.net/3fa19797fff2a356ee54926fb98648cc.jpg"  style="opacity: 1;">
           </router-link>
         </li>
         <li class="item">
           <router-link to="/detail/indexPage/id/2">
           <div class="cnt" >
               <h4 class="title">MUJI制造商</h4>
                <span class="price" >
                  <span >12.9</span>
                  <span >元起</span>
               </span>
              </div>
              <img src="http://yanxuan.nosdn.127.net/b8c3342e90c0c297e1a172cdff68b0d8.jpg"  style="opacity: 1;">
           </router-link>
         </li>
       </ul>
     </div>
 </div>
 <!--周一 周四 新品首发-->
 <div class="new-fast">
   <header class="hd">
     <router-link to="newfast" class="more">
       <span>周一周四 · 新品首发</span>
       <div class="all" >
         <span >查看全部</span>
         <i class="arrow-right" ></i>
        </div>
     </router-link>

   </header>
   <ul>
  <no-loop-swiper :Items="newItems" class="recommend-no-loop"></no-loop-swiper>
   </ul>
 </div>
 <!--人气推荐-->
 <div class="peoplehot">
   <div class="hottitle">
     <div>
      人气推荐<i data-v-1bc3f80e="" class="arrow-right"></i>
     </div>
   </div>
   <cell></cell>
   <cell></cell>
   
 </div>
 <goods-grid>

 </goods-grid>
 <div>
 </div>
</div>
</template>

<script>
// import { Indicator } from 'mint-ui'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import goodsGrid from '../../components/public/GoodsGrid'
import noLoopSwiper from '@/components/public/NoLoopSwiper'
import dealPromise from '@/components/public/DealPromise'
import cell from '@/components/public/cell'
export default {
  data () {
    return {
      bannerList: [
        {id: 0, url: 'http://yanxuan.nosdn.127.net/19a8e27a69e35fdbb738546802c73e25.jpg'},
        {id: 1, url: 'http://yanxuan.nosdn.127.net/1b98903a6d44de0a4e25967b097b6228.jpg'},
        {id: 2, url: 'http://yanxuan.nosdn.127.net/78215f711eed5dc350630cec2d38e8be.jpg'},
        {id: 3, url: 'http://yanxuan.nosdn.127.net/63c7db53d955c280c66789971933a3e6.jpg'},
        {id: 4, url: 'http://yanxuan.nosdn.127.net/d344d7013cfb740e1aed822b981aae13.jpg'}
      ],
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true
      },
      newItems: [
        {id: 0, name: '男式飞织运动休闲鞋', desc: '“赤足”的轻松与透气', price: 199, src: 'http://yanxuan.nosdn.127.net/872b0a5df602e9b12e5ac14da518b079.png?imageView&quality=85&thumbnail=330x330'},
        {id: 1, name: '微电流滚轮身体按摩仪', desc: '瘦脸瘦身 提拉紧致', price: 189, src: 'http://yanxuan.nosdn.127.net/9aa07a291c8e2c6f97e2f9d0ce2ba7c5.png?imageView&quality=85&thumbnail=330x330'},
        {id: 2, name: '空蓝经典飞行员墨镜', desc: '经典飞行员款式，偏光镜片', price: 109, src: 'http://yanxuan.nosdn.127.net/8957b56358c3f21dbbf6cb42004ae006.png?imageView&quality=85&thumbnail=330x330'},
        {id: 3, name: '光面羊皮蛋卷鞋', desc: '头层羊皮，优雅芭蕾舞鞋', price: 109, src: 'http://yanxuan.nosdn.127.net/45526f7ceba0c8e228b4713b3c8257a1.png?imageView&quality=85&thumbnail=330x330'},
        {id: 4, name: '小龙虾 4-6钱/只 净虾850克', desc: '好水好虾，鲜香弹润', price: 109, src: 'http://yanxuan.nosdn.127.net/a2cf3b86ecfd35b2d270cd17ff264cbd.png?imageView&quality=85&thumbnail=330x330'},
        {id: 5, name: '日系拉菲草女式草帽', desc: 'Gucci制造商，纯天然拉菲草', price: 109, src: 'http://yanxuan.nosdn.127.net/3e36a2cd8aad7f30a1f6334aaefe6808.png?imageView&quality=85&thumbnail=330x330'},
        {id: 6, name: '负离子可折叠便携吹风机', desc: '高浓度负离子，2档3温', price: 109, src: 'http://yanxuan.nosdn.127.net/6fb9df8c630938288012ffdeefdf92c9.png?imageView&quality=85&thumbnail=330x330'},
        {id: 7, name: '格纹棉质短袖衬衫（婴童）', desc: '经典格纹风 时尚又百搭', price: 109, src: 'http://yanxuan.nosdn.127.net/9c07042b213a1fa3f609a4d08ae5680d.png?imageView&quality=85&thumbnail=330x330'},
        {id: 8, name: '空蓝经典飞行员墨镜', desc: '经典飞行员款式，偏光镜片', price: 109, src: 'http://yanxuan.nosdn.127.net/8957b56358c3f21dbbf6cb42004ae006.png?imageView&quality=85&thumbnail=330x330'}
      ],
      newItemsOption: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  },
  beforeCreate () {
  },
  created () {
    this.$store.dispatch('changeHeadertabActive', 0)
  },
  mounted () {
  },
  components: {
    swiper,
    swiperSlide,
    goodsGrid,
    noLoopSwiper,
    dealPromise,
    cell
  }
}
</script>

<style lang="css" scoped>
@import '../../assets/style/home.css'


</style>
