<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/partials/Navbar.vue';
export default{
  components:{
    Navbar
  }
}
</script>

<template>
  <header>
    <Navbar/>
  <router-view>
  </router-view>
  </header>

</template>

<style lang="scss" scoped>
</style>
