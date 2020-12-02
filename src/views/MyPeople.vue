<template>
  <div class="MyPeople">
    <h1 class="text-center space-title1">My People</h1>

    <p
      class="page-width space-text"
    >This is the people who have come to my house and I have taken a picture of them. Let me introduce you this awesome and random crew.</p>

    <!-- <ul class="portraits-grid">
        <router-link tag="li" :to="slugify(person.name)" append v-for="person in people" :key="person.name">
          <img :src="person.img" :alt="slugify(person.name)" />
          <p class="oswald text-center name">{{person.name}}</p>
        </router-link>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "my-people",
  props: {
    people: Array,
    slugify: Function
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/gonzalo.scss";

.MyPeople {
  padding-top: 80px;
  p {
    color: white;
  }
  .portraits-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    column-gap: 2px;
    row-gap: 2px;
    li {
      background-color: $yellow;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      .name {
        position: absolute;
        bottom: 20%;
        left: 0;
        right: 0;
        margin: auto;
        color: black;
        z-index: 30;
        font-size: $text-xlarge;
        opacity: 0;
        transform: translateY(20px);
        transition: all .3s ease-in-out;
      }
      @media screen and (min-width: $break-mobile + 1) {
        &::after {
          content: "";
          height: 100%;
          width: 100%;
          background-color: rgba($yellow, 0.6);
          pointer-events: inherit;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        &:hover {
          &::after {
            opacity: 1;
          }
          .name {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
      img {
        margin-bottom: -5px;
      }
    }
  }
}
</style>