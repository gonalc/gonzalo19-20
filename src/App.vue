<template>
  <div id="app">
    <Navbar :open="openMenu" :toggle='toggleMenu' />
    <router-view :people='people' :slugify='string_to_slug' />
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
      people: [
          {
            name: 'Álvaro',
            img: require('./assets/img/people/alvaro.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Adrián',
            img: require('./assets/img/people/adrian.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Andrea',
            img: require('./assets/img/people/andrea.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Antoine',
            img: require('./assets/img/people/antoine.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Dani',
            img: require('./assets/img/people/dani.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Inês',
            img: require('./assets/img/people/ines.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Iñaki',
            img: require('./assets/img/people/kaki.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Mateo',
            img: require('./assets/img/people/mat.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Rhys',
            img: require('./assets/img/people/rhys.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Sara',
            img: require('./assets/img/people/sara.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Silvia',
            img: require('./assets/img/people/silvia.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          },
          {
            name: 'Yonathan',
            img: require('./assets/img/people/yonathan.jpg'),
            desc: ['Hola que tal', 'Buenos dias', 'Tercera linea']
          }
        ]
    }
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
