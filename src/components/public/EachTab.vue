<template>
  <div>
      <div class="slideWarp">
        <img :src="desc.adpic" alt="" class="advertisement">
  </div>
  <goods-grid :data="desc.data"></goods-grid>
  </div>
</template>

<script>
import goodsGrid from '@/components/public/GoodsGrid'

export default {
  props: ['desc'],
  data () {
    return {
    }
  },
  components: {
    goodsGrid
  }
}
</script>

<style>
.slideWarp{
  margin-bottom: .26667rem;
}
</style>
