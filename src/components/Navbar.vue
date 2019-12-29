<template>
  <div class="menu">
    <nav class="Navbar" v-bind:class="{open: open}">
      <p class="oswald" v-if='open'>Gonzalo Alcaide</p>
      <p class="oswald" v-else ><router-link to='/'>{{ $route.fullPath !== '/' ? 'Go Home' : '' }}</router-link></p>
      <div class="menu-btn-container" @click='toggle'>
        <div class="menu-btn" v-bind:class="{open: open}">
          <span class="bar top"></span>
          <span class="bar medium"></span>
          <span class="bar bottom"></span>
        </div>
      </div>
    </nav>
    <div class="mobile-menu" v-if='open'>
      <ul>
        <li @click='toggle'><router-link to='/projects'>Projects</router-link></li>
        <li @click='toggle'><router-link to='/my-people'>My People</router-link></li>
        <li @click='toggle'><router-link to='/about-me'>About Me</router-link></li>
        <li @click='toggle'><router-link to='/blog'>Blog</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    open: Boolean,
    toggle: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.menu {
  .Navbar {
    position: fixed;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 5000;
    background-color: $yellow;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color .3s ease-in-out;
    &.open {
      background-color: black;
      color: white;
    }
    p {
      font-size: $text-xlarge;
    }
    .menu-btn-container {
      height: 60px;
      width: 60px;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      .menu-btn {
        width: 50px;  
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transform: rotate(45deg);
        .bar {
          width: 25px;
          background-color: white;
          height: 2px;
          &.medium {
            width: 50px;
            transition: all .3s ease-in-out;
          }
          &.top {
            animation: topBarBack .3s ease-in forwards;
          }
          &.bottom {
              animation: bottomBarBack .3s ease-in forwards;
            }
        }
        &.open {
          // justify-content: center;
          .bar {
            &.medium {
              width: 0;
              height: 0;
            }
            &.top {
              animation: topBar .3s ease-in forwards;
            }
            &.bottom {
              animation: bottomBar .3s ease-in forwards;
            }
          }
        }
      }
    }
  }
  .mobile-menu {
    background-color: $yellow;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4900;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      li {
        font-family: $oswald;
        font-size: $text-xxlarge;
        text-align: center;
        margin: 20px 0;
      }
    }
  }
}

@keyframes topBar {
  0% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(14px) rotate(0);
  }

  100% {
    transform: translateY(14px) rotate(-90deg);
  }
}

@keyframes bottomBar {
  0% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-14px) rotate(0);
  }

  100% {
    transform: translateY(-14px) rotate(0);
  }
}

@keyframes topBarBack {
  0% {
    transform: translateY(14px) rotate(-90deg);
  }

  50% {
    transform: translateY(14px) rotate(0);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
}

@keyframes bottomBarBack {
  0% {
    transform: translateY(-14px) rotate(0);
    }

  50% {
    transform: translateY(-14px) rotate(0);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
}

</style>
