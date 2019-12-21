<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navbar :open="openMenu" :toggle='toggleMenu' />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      openMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    }
  }
}
</script>

<style lang='scss'>
  @import 'assets/styles/gonzalo.scss';
</style>
