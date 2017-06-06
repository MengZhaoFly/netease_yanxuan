<template>
  <div>
   <each-type :recommend="recommend"></each-type>
  </div>
</template>
<script>
import EachType from './eachtype'
export default {
  name: 'recommend',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getClasses')
  },
  computed: {
    recommend () {
      return this.$store.getters.classes.cook
    }
  },
  components: {
    'each-type': EachType
  }

}
</script>
<style scoped>
</style>
