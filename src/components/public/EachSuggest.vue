<template>
  <div>
  <div class="suggest" v-for="item in suggests">
    <router-link to="/">
    <div class="hd">
        <div class="avatar" >
          <img v-lazy="item.avatar" >
        </div>
        <div class="author" >{{item.user}}
        </div>
    </div>
    <div class="imgContainer">
      <img :src="item.contentPic" alt="">
      <div class="u-icon u-icon-topicReadCount" >
        <span class="eyeAndcount" >
            <span class="topicEyeContainer" >
            <i class="u-icon u-icon-topicEye" ></i>
          </span>
          <span >{{item.seen}}</span>
        </span>
      </div>
   </div>
   <div class="topicInfo" >
     <div class="line1" >
       <div class="title" >{{item.title}}</div>
       <div class="price">
         <span class="num" >{{item.price}}</span><span class="unit" v-if="item.price">元起</span>
         </div>
         </div>
         <div class="line2" >
          <div class="subTitle" >{{item.subtitle}}
          </div>
          </div>
        </div>
    </router-link>
  </div>
  </div>
</template>

<script>
export default {
  props: ['suggests']
}
</script>

<style scoped>
.imgContainer{
  background-size:cover;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
}
.suggest{
  background-color: #fff;
  margin-bottom: .26667rem;
}
.suggest .hd {
    height: 1.38667rem;
    padding: .26667rem .4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.hd .avatar {
    width: .85333rem;
    height: .85333rem;
    border-radius: 50%;
    margin-right: .21333rem;
    overflow: hidden;
    border: 1px solid #d9d9d9;
}
.avatar img{
  display: block;
    width: 100%;
    height: 100%;

}
.author {
    font-size: .37333rem;
    color: #333;
}
/*container*/
.imgContainer {
    position: relative;
    height: 5.6rem;
}
.u-icon-topicReadCount {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
}
.eyeAndcount {
    display: inline-block;
    text-align: right;
    padding-right: .4rem;
    color: #fff;
    font-size: .26667rem;
    line-height: .48rem;
    position: relative;
}
.u-icon-topicEye {
    width: .28rem;
    height: .18667rem;
    background: url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/topicEye-b71328754f.png) no-repeat;
    background-size: 100%;
}
.topicInfo {
    overflow: hidden;
    background-color: #fff;
    position: relative;
    padding: .33333rem .4rem .74667rem;
}
.topicInfo .line1 {
    margin-bottom: .17333rem;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
    align-items: center;
    line-height: 1.2;
}
 .topicInfo .line1 .title {
    margin-right: .8rem;
    font-size: .48rem;
    color: #333;
}
 .topicInfo .line2 .subTitle {
    position: relative;
    font-size: .37333rem;
    line-height: 1.1;
    color: #7f7f7f;
}
</style>
