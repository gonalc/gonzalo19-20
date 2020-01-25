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
            desc: [
              'Great man. His heart is full of goodness and is awesome to spend time with him.', 
              'Hardworker and able to do many different things.', 
              'I love to annoy him by telling him he messed up anything.'
              ]
          },
          {
            name: 'Adrián',
            img: require('./assets/img/people/adrian.jpg'),
            desc: [
              'He is probably the most pacient person I know. Master in everything he does.', 
              'I owe him a lot because he tought me most of the things I use day by day in my life.', 
              'I\'m glad I could start a great project with him. Will be hard to fail with him involved.'
              ]
          },
          {
            name: 'Andrea',
            img: require('./assets/img/people/andrea.jpg'),
            desc: [
              'I love to live with her. She has always been so kind and she really makes me feel at home.', 
              'It\'s very funny her plans when she is unemployed, she looks like a 70 years old lady.', 
              'Darko is an evil cat, but it\'s impossible not to love him.'
              ]
          },
          {
            name: 'Antoine',
            img: require('./assets/img/people/antoine.jpg'),
            desc: [
              'One of the few people in the world that have listened to Adolfo without wanting to kill himself.', 
              'Kind of a flatmate too, is always nice to have him at home.',
              'The only bad thing is that supports Atleti.'
              ]
          },
          {
            name: 'Dani',
            img: require('./assets/img/people/dani.jpg'),
            desc: [
              'Happy man. Was sad when he left Poland, but he came back to sort it out.', 
              'New coder in the business, I\'m sure he will do great things.', 
              'He is like a brother to me, we have shared a lot, including a bit of Ukraine.'
              ]
          },
          {
            name: 'Inês',
            img: require('./assets/img/people/ines.jpg'),
            desc: [
              'I will always be thankful to her for taking me at her place, it\'s great to spend time with her at home.', 
              'I have learnt a lot by living together and I love her altough she hasn\'t tought me Poruguese.', 
              'She will always be trying to do her Master\'s final project.'
              ]
          },
          {
            name: 'Iñaki',
            img: require('./assets/img/people/kaki.jpg'),
            desc: [
              'One of my best friends ever. Since the first day we met we have been having fun together.', 
              'He is very special and I have to say thanks I can spend a lot of time with him.', 
              'If you ever want to buy a car, you should contact him.'
              ]
          },
          {
            name: 'Mateo',
            img: require('./assets/img/people/mat.jpg'),
            desc: [
              'I met him the very first day at University and we have been having fun together since then.', 
              'Good heart and excellent filmmaker. He has always the best ideas.', 
              'His house is my favourite house in Madrid, so I go to visit him every time I can.'
              ]
          },
          {
            name: 'Rhys',
            img: require('./assets/img/people/rhys.jpg'),
            desc: [
              'My English buddy. I have learnt a lot by living with him in Brighton and in Madrid.', 
              'I saw him eating 3 cans of cocido madrileño at once. For dinner.', 
              'One day we will get to Murcia.'
              ]
          },
          {
            name: 'Sara',
            img: require('./assets/img/people/sara.jpg'),
            desc: [
              'I am happier since I know her. Lovely person who makes me enjoy every day we spend together.', 
              'She is a good person although she neither tought me Portuguese.', 
              // 'Brave '
              ]
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
          },
          {
            name: 'Pablo (Doc)',
            img: require('./assets/img/people/doc.jpg'),
            desc: ['Primera linea', 'Algo mas que decir', 'Hola somos unos desgraciados']
          },
          {
            name: 'Bonilla',
            img: require('./assets/img/people/bonilla.jpg'),
            desc: ['Primera linea', 'Algo mas que decir', 'Hola somos unos desgraciados']
          },
          {
            name: 'Silvia E',
            img: require('./assets/img/people/silvia_espinosa.jpg'),
            desc: ['Primera linea', 'Algo mas que decir', 'Hola somos unos desgraciados']
          },
          {
            name: 'Adolfo',
            img: require('./assets/img/people/adolfo.jpg'),
            desc: ['Primera linea', 'Algo mas que decir', 'Hola somos unos desgraciados']
          },
          {
            name: 'Pedrosa',
            img: require('./assets/img/people/pedrosa.jpg'),
            desc: ['Primera linea', 'Algo mas que decir', 'Hola somos unos desgraciados']
          }
        ]
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
