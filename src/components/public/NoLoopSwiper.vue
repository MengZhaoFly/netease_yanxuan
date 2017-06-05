<template>
  <div class="special">
     <swiper :options="ItemsOption" id="newItems">
    <swiper-slide v-for="slide in Items" :key="slide.id">
      <router-link to="/">
         <img  alt="图片" v-lazy.newItems="slide.src">
         <div class="name" v-if="slide.name">{{slide.name}}</div>
         <div class="newItemDesc" v-if="slide.desc">{{slide.desc}}</div>
         <div class="price" v-if="slide.price">¥{{slide.price}}</div>
       </router-link>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  props: ['Items'],
  data () {
    return {
      ItemsOption: {
        slidesPerView: 2.5,
        spaceBetween: 8
      }
    }
  }
}
</script>

<style scoped>
.special{
  /*background-color: #fff;*/
}
.special-no-loop .swiper-slide img{
  border-radius: .10667rem;
}
</style>
