<template>
  <div class="MyPeople">
      <h1 class="text-center space-title1">My People</h1>

      <p class="page-width space-text">This is the people who have come to my house and I have taken a picture of them. Let me introduce you this awesome and random crew.</p>

      <ul class="portraits-grid">
        <li v-for='person in people' :key='person.name'>
          <router-link :to='slugify(person.name)' append>
            <img :src='person.img' :alt='slugify(person.name)'>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'my-people',
    props: {
      people: Array,
      slugify: Function
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.MyPeople {
  padding-top: 80px;
  p {
    color: white;
  }
  .portraits-grid {
    width: 95%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      background-color: purple;
      width: 30vw;
      height: 30vw;
      margin: 2px;
    }
  }
}

</style>