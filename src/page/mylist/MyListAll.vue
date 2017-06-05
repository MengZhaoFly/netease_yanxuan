<template>
  <div>
      <no-list v-show="mylistLength===0"></no-list>
      <each-list ></each-list>
  </div>
</template>
<script>
// import {mapGetters} from 'vuex'
import noList from './NoList'
import eachList from './eachList'
export default {
  name: 'mylistall',
  data () {
    return {
      mylistLength: this.$store.getters.mylistLength
    }
  },
  mounted () {
    console.log('vue', this.mylist)
  },
  components: {
    noList,
    eachList
  }
  // computed: mapGetters(['mylist', 'mylistLength'])
}
</script>
<style>

</style>
