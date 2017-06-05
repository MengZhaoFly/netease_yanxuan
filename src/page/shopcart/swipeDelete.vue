<template>
  <div>
    <ul class="list">
      <transition-group name="fadeLeft" >
      <li class="item" v-for="(item, index) in cartsList" ref="temp" :key="index">
          <div class="item-container" id="getSize" @touchstart="startDrag($event, index)" @touchmove="onDrag($event, index)" ref="itemContainer" @click="hideDel">
            <div class="checkbox">
              <input type="checkbox" :id="index" :value="index" v-model="checkedNames" style="visibility: hidden;">
              <label :for="index" class="m-checkbox " :class="{checked:item.ischecked}" @click="changeChecked(index)"></label>
            </div>
            <div class="right-wrap">
              <div class="img-wrap">
                <img :src="item.url" alt="">
              </div>
              <div class="desc-wrap">
                <p class="line1">{{item.line1}}
                </p>
                <p class="line2">{{item.line2}}</p>
                <p class="line3">{{item.line3}}</p>
              </div>
              <div class="total-num">
                <span>x{{item.num}} </span>
              </div>
            </div>
            <div class="del-box">
              <i class="u-icon u-icon-trash" @click="delThis(item)"></i>
          </div>
        </div>
      </li>
      </transition-group>
    </ul>
    <span></span>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#b4282d;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>删除该商品,将无法恢复</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" style="background-color: #b4282d" long :loading="modal_loading" @click="sureToDel">删除</Button>
        </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkedNames: [],
      start: {
        x: 0, y: 0
      },
      modal2: false,
      offsetLeft: 0,
      Width: 0,
      hasShow: false,
      nowItemContainer: null,
      cartContent: this.$store.getters.cartList
    }
  },
  created () {
    this.$store.dispatch('query', this.cartContent)
  },
  mounted () {
  },
  computed: {
    cartsList () {
      // console.log(this.$store.getters.queryCartLists)
      // console.log('why run this many times')
      return this.$store.getters.queryCartLists
    }
  },
  methods: {
    // data part
    changeChecked (index) {
      this.$store.dispatch('changeChecked', index)
    },
    delThis (item) {
      this.modal2 = true
      this.tempArr = []
      this.tempArr.push(item)
    },
    sureToDel () {
      // 同时还要删除购物车
      this.$store.dispatch('delCart', this.tempArr)
      // 删除查询到的购物车订单
      this.$store.dispatch('delQueryList', this.tempArr)
      this.modal2 = false
    },
    // swipe part
    translate3d (offset) {
      return `translate3d(${offset}px, 0, 0)`
    },
    swipeMove (offset = 0) {
      this.nowItemContainer.style.transform = this.translate3d(offset)
      if (offset === 0) this.hasShow = false
      if (offset > 0) this.hasShow = true
    },
    startDrag (evt, index) {
      // console.log(evt)
      // 当前滑动的是哪一个块 index
      // now item
      this.nowItemContainer = this.$refs.itemContainer[index]
      this.Width = this.nowItemContainer.getBoundingClientRect().width
      this.Height = this.nowItemContainer.getBoundingClientRect().height
      evt = evt.changedTouches ? evt.changedTouches[0] : evt
      this.dragging = true
      this.start.x = evt.pageX
      this.start.y = evt.pageY
      // console.log('in', this.itemContainers)
    },
    onDrag (evt) {
      if (!this.dragging) return false
      let swiping
      const e = evt.changedTouches ? evt.changedTouches[0] : evt
      const offsetTop = e.pageY - this.start.y
      let offsetLeft = this.offsetLeft = e.pageX - this.start.x
      if (this.hasShow) {
        // console.log(1)
        this.swipeMove(0)
      }
      if ((offsetLeft < 0 && -offsetLeft > this.Width) ||
        (offsetLeft > 0 && !this.Width)) {
        return false
      }
      // 还没有滑出来右滑无效
      if (!this.hasShow && offsetLeft > 0) {
        return false
      }
      // 超过
      if (-offsetLeft > 10) offsetLeft = -70.03
      const y = Math.abs(offsetTop)
      const x = Math.abs(offsetLeft)
      swiping = !(x < 5 || (x >= 5 && y >= x * 1.73))
      if (!swiping) return false
      // console.log('offsetLeft', offsetLeft)
      evt.preventDefault()
      this.swipeMove(offsetLeft)
    },
    hideDel () {
      this.swipeMove(0)
    }
  }
}
</script>
<style scoped>
.item{
  height: 2.45333rem;
  position: relative;
  overflow: hidden;
  
}
.item-container{
  display: flex;
  align-items: center;
  height: 100%;transition: all .2s ease-in;
}
.right-wrap{
  display: flex;
  align-items: center;
  flex: 1;
}
.desc-wrap{
  flex: 1;
}
.line1 {
    line-height: .42667rem;
    font-size: .37333rem;
    margin-bottom: .13333rem;}
 .line2 {
    font-size: .32rem;
    line-height: .37333rem;
    margin-bottom: .10667rem;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.line3 {
    font-size: .37333rem;
    line-height: .42667rem;
}
.checkbox{
  padding: 0 .2846rem;
}
.img-wrap {
  margin-right: .26667rem;
    border-radius: 4px;
    background-color: #f4f4f4;
}
.img-wrap img{
  width: 1.86667rem;
    height: 1.86667rem;
}
.total-num{
  align-items: flex-start;
  font-size: 16px;margin-right: 8px;
  
}
/*check*/
.m-checkbox, .m-checkbox-1 {
    width: .50667rem;
    height: .50667rem;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-sed825af9d3-a6b8540d42.png);
    background-repeat: no-repeat;
    background-size: .50667rem 6.48rem;
    display: block;
}
.m-checkbox {
    background-position: 0 -5.97333rem;
}
/*选中的时候*/
.m-checkbox.checked {
    background-position: 0 -2.56rem;
}
/*del*/
.del-box{
  position: absolute;
  top: 0;
  left: 100%;
    width: 1.86667rem;
    background-color: #e83a3a;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.u-icon-trash {
  display: block;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/trash-e0e4f39c2b.png);
    width: .54667rem;
    height: .56rem;
    background-size: cover;
}
</style>
