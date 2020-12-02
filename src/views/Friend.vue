<template>
  <div class="Friend">
      <div class="pic-container">
          <img :src='friend.img' :alt='friend.name'>
      </div>

      <h1 class="text-center space-title1">{{friend.name}}</h1>

      <div class="description-container">
          <p class='page-width space-text' v-for="paragraph in friend.desc" :key='paragraph'>{{ paragraph }}</p>
      </div>

      <router-link to='/my-people' tag='div' class="go-back">
          <div class="arrow-container">
            <img src="../assets/img/icons/arrow-left.svg" alt="Buenos días">
          </div>
          <p>Go back</p>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'friend',
    props: {
        people: Array,
        slugify: Function
    },
    // data() {
    //     return {
    //         friend: this.people.find(p => this.slugify(p.name) === this.$route.params.name)
    //     }
    // }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.Friend {
    padding-top: 60px;
    color: white;
    .go-back {
        display: flex; 
        align-items: center;
        cursor: pointer;
        .arrow-container {
            transition: transform .3s ease-in-out;
            width: 50px;
            margin: 0 20px;
        }
        &:hover {
            .arrow-container {
                transform: translateX(10px);
            }
        }
    }
    @media screen and (min-width: $break-mobile + 1) {
        padding-top: 100px;
        .pic-container {
            width: 50%;
            margin: auto;
        }
        .description-container,
        .go-back {
            width: 50%;
            margin: auto;
        }
    }
}
</style>