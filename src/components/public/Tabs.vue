<template>
  <header >
      <div class="inner" >
        <div class="list" >
          <div class="list-container">
          <div class="tab" 
            :class="{active: item.isActive}"
            v-for="item in tabs" :key="item.id">
            <router-link :to="item.linkTo">
              <span class="txt" @click="activethis(item.id)">{{item.name}}</span>
            </router-link>
          </div>
          </div>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  props: ['tabs'],
  data () {
    return {
    }
  },
  methods: {
    activethis (id) {
      // 找出当前激活的选项，当前点击的选项
      if (this.$route.path.indexOf('type') >= 0) {
        this.$store.dispatch('changeTypesabActive', id)
        return false
      }
      if (this.$route.path.indexOf('mylist') >= 0) {
        this.$store.dispatch('changeMylistActive', id)
        return false
      }
      console.log(id)
      this.$store.dispatch('changeHeadertabActive', id)
    }
  }
}
</script>

<style scoped>
header.mylist .inner .list{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    background-color: #fff;
    height: .8rem;
    position: relative;
}
 .inner {
    display: flex;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
}
.list {
    overflow: hidden;
}
.list-container{
  display: flex;
  flex-flow: row nowrap;;
  flex-shrink: 0;
  padding: 0 .4rem;
  overflow: scroll;
  
}
::-webkit-scrollbar
{
    width: 0px;
    height: 0px;
    background-color: transparent;
}
header .tab:first-of-type {
    margin-left: 0;
}
header .tab {
    display: flex;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    text-align: center;
}
header .tab {
    -webkit-flex-shrink: 0;
    -moz-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
    margin-left: .64rem;
}
.tab.active {
    color: #b4282d;
}
header .tab.active .txt {
    position: relative;
    color: #b4282d;
}
.tab .txt {
    display: inline-block;
    padding: 0 .21333rem;
    line-height: .8rem;
    font-size: .37333rem;
    color: #333;
    text-align: center;
}
 .tab.active .txt:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .05333rem;
    background-color: #b4282d;
}
header::after{
  content: '';
    position: absolute;
    background-color: #d9d9d9;
    left: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 50% 100% 0;
    transform-origin: 50% 100% 0;
    bottom: 0;
}

</style>
