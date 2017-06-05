<template>
  <div class="selfcenter">
    <header-bar v-if="!localUserInfo.loginStatus"></header-bar>
    <require-login v-if="!localUserInfo.loginStatus" :class="localUserInfo.loginStatus"></require-login>
    <show-info v-else></show-info>
    <router-view ></router-view>
    <v-footer class="footer"></v-footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Footer from '@/components/public/Footer'
import topBar from '@/components/public/HeaderBar'
import requireLogin from './requireLogin'
import showInfo from './showInfo'
export default {
  name: 'index',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  created () {
    this.$store.dispatch('changeActive', 4)
  },
  components: {
    'v-footer': Footer,
    'header-bar': topBar,
    'require-login': requireLogin,
    'show-info': showInfo
  },
  computed: mapGetters(['localUserInfo'])
}
</script>
<style scoped>
.selfcenter{
  background-color: #fff;
}

</style>
