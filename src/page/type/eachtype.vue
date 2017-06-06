<template>
  <div>
    <div class="banner">
      <img  v-lazy="recommend.ad" alt="">
        <div class="cnt">热卖好物，诚意推荐。</div>
    </div>
    <div class="cateList">
      <div class="hd" >
          <span class="text">
            <span >{{recommend.name}}</span>
            <span >分类</span>
          </span>
      </div>
      <ul class="list">
        <li class="cateItem" v-for="item in recommend.contents">
              <router-link to="/">
              <div class="cateImgWrapper">
                <img v-lazy="item.url"  alt="" class="cateImg" >
              </div>
              <div class="name" data-reactid=".0.2.1.1.$subCate_0.0.1">{{item.name}}</div>
           </router-link>
        </li>
 
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['recommend'],
  mounted () {
    console.log(this.recommend)
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
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -25%;
    margin-right: -25%;
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
