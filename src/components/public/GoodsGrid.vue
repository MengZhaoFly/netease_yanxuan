<template>
  <div>
<div class="goodsgrid" v-for="eachdata in data">
 <header>
   <h3 class="title" >{{eachdata.title}} <p>{{eachdata.subtitle}}</P></h3>
   
 </header>
 <div class="m-goodGrid">
   <ul class="list clearfix" >
     <li class="item" v-for="item in eachdata.lists" :key="item.id">
       <router-link :to="{ name: 'seeDetails', params: { type: item.type, id: item.id }}">
       <img :src="item.src" alt="">
       <div class="desc">{{item.desc}}</div>
       <div class="name" >{{item.name}}</div>
       <div class="price">¥{{item.price}}</div>
       </router-link>
       
     </li>
   </ul>
 </div>
</div>
</div>
</template>
<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.goodsgrid{
  background-color: #fff;
  margin-top: 10px;
}
header{
  text-align: center;
}
header p{
  line-height: 0;
  color: #999;
  padding-bottom: .5rem;
}
header .title{
  line-height: 1.6rem;
    text-align: center;
    font-size: .37333rem;
    color: #333;
    background-color: #fff;

}
.item{
  float: left;
    position: relative;
    width: 50%;
    text-align: center;
}
.item img{
  background-color: #fff;
}
.item:nth-child(n){
    padding: 0rem 0.13333333333333333rem 0.44rem 0.26666666666666666rem;
}
.item:nth-child(2n){
    padding: 0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem;

}
.desc {
    position: absolute;
    bottom: 1.5rem;
    width: 80%;
    margin-left: 5%;
    background: #F1ECE2;
    border-radius: .05333rem;
    font-size: .32rem;
    color: #9F8A60;
    letter-spacing: 0;
    line-height: .38667rem;
    padding: .26667rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

