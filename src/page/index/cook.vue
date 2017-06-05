<template>
  <div>
     <each-tab :desc="cookDesc" ></each-tab>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui'
import eachTab from '@/components/public/EachTab'
export default {
  data () {
    return {
    }
  },
  components: {
    eachTab
  },
  created () {
    this.$store.dispatch('changeHeadertabActive', 2)
    Indicator.open('加载中...')
    this.$store.dispatch('gethomeDesc', 'cook')
  },
  computed: {
    cookDesc () {
      Indicator.close()
      return this.$store.getters.cookDesc
    }
  }
}
</script>

<style>
</style>
