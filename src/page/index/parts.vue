<template>
  <div>
     <each-tab></each-tab>
  </div>
</template>
<script>
import eachTab from '@/components/public/EachTab'
export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('changeHeadertabActive', 3)
  },
  components: {
    eachTab
  }
}
</script>

<style>
.slideWarp{
  margin-bottom: .26667rem;
}
</style>
