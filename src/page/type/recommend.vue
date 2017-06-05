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
      return this.$store.getters.classes.recommend
    }
  },
  components: {
    'each-type': EachType
  }

}
</script>
<style scoped>
.banner {
    position: relative;
    width: 100%;
    height: 2.56rem;
    display: table;
    background: center no-repeat #f4f4f4;
    background-size: cover;
    border-radius: 4px;
}
.banner .cnt {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
}
 .hd {
    height: 1.44rem;
    line-height: 1.44rem;
    text-align: center;
    font-size: .32rem;
    color: #333;
}
 .hd .text {
    position: relative;
}
.hd .text:after, .hd .text:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1px;
    width: .53333rem;
    background-color: #d9d9d9;
    -webkit-transform-origin: 50% 100% 0;
    transform-origin: 50% 100% 0;
}
 .hd .text:before {
    left: -.74667rem;
}
 .hd  .text:after {
    right: -.74667rem;
}
.cateItem {
    display: inline-block;
    margin-right: .45333rem;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
}
.cateItem:nth-child(3n) {
    margin-right: -.13333rem;
}
.cateImgWrapper {
    width: 1.92rem;
    height: 1.92rem;
}
 .cateItem .name {
    height: .96rem;
    font-size: .32rem;
    color: #333;
    text-align: center;
    line-height: .45333rem;
}
</style>
