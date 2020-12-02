<template>
  <div id="app">
    <Navbar :open="openMenu" :toggle='toggleMenu' />
    <router-view :slugify='string_to_slug' />
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
      openMenu: false,
      // people: [
      //     {
      //       name: 'Álvaro',
      //       img: require('./assets/img/people/alvaro.jpg'),
      //       desc: [
      //         'Great man. His heart is full of goodness and is awesome to spend time with him.', 
      //         'Hardworker and able to do many different things.', 
      //         'I love to annoy him by telling him he messed up anything.'
      //         ]
      //     },
      //   ]
    }
  },
  created() {
    console.log('%cGonzalo Alcaide', 'padding: 5px; background-color: #EDD32B; font-size: 20px; color: black;');
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    string_to_slug: function (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }
  }
}
</script>

<style lang='scss'>
  @import 'assets/styles/gonzalo.scss';
</style>
