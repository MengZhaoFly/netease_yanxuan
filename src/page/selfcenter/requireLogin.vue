<template>
    <div class="self-container">
      <div class="input-groups">
        <form action="" v-on:submit.prevent="onSubmit">
            <div class="email"><input type="text" placeholder="邮箱帐号" v-model="email" ></div>
            <div class="password"><input type="password" placeholder="密码" v-model="password" class=""></div>
            <div class="submit"><input type="submit" value="登录" :class="{disabled:isDisabled}" :disabled='isDisabled'></div>
        </form>
      </div>
    </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('表单提交了')
      // console.log(this.$store)
      this.$store.dispatch('setUserInfo', {email: this.email, password: this.password, loginStatus: true})
    }
  },
  computed: {
    isDisabled: function () {
      return this.email.length <= 0 || this.password.length <= 0
    }
  }
}
</script>
<style scoped>

.self-container{
  padding: 0 0.555556rem;
  background-color: #fff;
  margin-top: 3rem;
  height: calc(100vh - 1.17333rem - 1.30667rem - 3rem);
}
.input-groups input{
  width: 100%;
    height: 0.6rem;
    font-size: 0.4rem;
    line-height: 0.6rem;
    margin: 0.39rem 0;
    padding-left: 0;
    -webkit-tap-highlight-color: transparent;
    letter-spacing: normal;
    font-weight: normal;
  background-color: #fff;
  height: 1.28rem;
    
   
}
.email::after, .password::after{
  position: absolute;
  left: -50%;
  bottom: 0;
  content: '';
    width: 200%;
    height: 1px;
    background: #d9d9d9;
    transform: scale(0.5);
    display: block;
}

.email, .password{
  background-color: #fff;
  position: relative;
}
.input-groups input[type="submit"]{
  margin: 0.8rem 0 0.53333rem;
  height: 1.28rem;
  display: block;
    width: 100%;
    cursor: pointer;
    text-align: center;
    background-color: #b4282d;
    color: #fff;
    border-radius: 3px;
}
input[type="submit"].disabled{
  background-color: #cb7a7a;
}
</style>
