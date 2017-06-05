<template>
  <div class="goods-details">
      <header-bar ></header-bar>
      <router-view ></router-view>
      <cart-footer v-show="!isSelectPage"></cart-footer>
  </div>
</template>
<script>
import headerBar from '@/components/public/HeaderBar'
import goodsDetails from './goodsDetails'
import cartFooter from './cartFooter'
export default {
  name: 'GoodsDetails',
  data () {
    return {
    }
  },
  components: {
    headerBar,
    goodsDetails,
    cartFooter
  },
  computed: {
    isSelectPage () {
      return this.$route.path.indexOf('select') >= 0
    }
  }
}
</script>
<style scoped>
.details-container{
  margin-bottom: 1.38667rem;
}
</style>
