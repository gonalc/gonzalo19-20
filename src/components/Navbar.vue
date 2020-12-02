<template>
  <div class="menu">
    <nav
      class="Navbar"
      v-bind:class="{open: open, homeDown: (afterHeader && $route.fullPath === '/') || $route.fullPath !== '/'}"
    >
      <p class="oswald" v-if='open'>Gonzalo Alcaide</p>
      <p class="oswald name" v-else ><router-link to='/'>{{ $route.fullPath !== '/' ? 'Go Home' : 'Gonzalo Alcaide' }}</router-link></p>
      <!-- <p class="oswald name" v-else ><router-link to='/'>Go Home</router-link></p> -->
      <div class="menu-btn-container" @click='toggle'>
        <div class="menu-btn" v-bind:class="{open: open}">
          <span class="bar top"></span>
          <span class="bar medium"></span>
          <span class="bar bottom"></span>
        </div>
      </div>
    </nav>
    <div
      class="mobile-menu"
      v-if='open'
      v-bind:class="{open: open, close: !open}"
    >
      <ul>
        <li @click='toggle'><router-link to='/projects'>Projects</router-link></li>
        <!-- <li @click='toggle'><router-link to='/my-people'>My People</router-link></li> -->
        <li @click='toggle'><router-link to='/about-me'>About Me</router-link></li>
        <!-- <li @click='toggle'><router-link to='/blog'>Blog</router-link></li> -->
        <li @click='toggle'><router-link to='/contact'>Contact</router-link></li>
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
  },
  data() {
    return {
      afterHeader: Boolean
    }
  },
  created() {
    if(window.innerHeight - 50 < window.scrollY) {
        this.afterHeader = true;
      } else {
        this.afterHeader = false;
      }
    window.addEventListener('scroll', () => {
      if(window.innerHeight - 50 < window.scrollY) {
        this.afterHeader = true;
      } else {
        this.afterHeader = false;
      }
    })
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
    .name {
      opacity: 0;
      transition: opacity .3s ease-in-out;
    }
    &.open {
      background-color: black;
      color: white;
    }
    &.homeDown {
      .name {
        opacity: 1;
      }
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
      cursor: pointer;
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
    height: 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4900;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: opacity .3s ease-in-out;
    ul {
      li {
        font-family: $oswald;
        font-size: $text-xxlarge;
        text-align: center;
        margin: 20px 0;
        opacity: 0;
        animation: fadeIn .3s ease-in-out forwards;
        &:nth-of-type(1) {
          animation-delay: .3s;
        }
        &:nth-of-type(2) {
          animation-delay: .6s;
        }
        &:nth-of-type(3) {
          animation-delay: .9s;
        }
        &:nth-of-type(4) {
          animation-delay: 1.2s;
        }
      }
    }
    &.open {
      opacity: 1;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
