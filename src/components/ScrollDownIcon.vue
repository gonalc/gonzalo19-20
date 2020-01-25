<template>
  <div class="scroll-icon-container">
      <div class="ball" />
  </div>
</template>

<script>
export default {
    name: 'scroll-down-icon'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.scroll-icon-container {
    width: 30px;
    height: 60px;
    border: 4px solid black;
    border-radius: 4000px;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 0;
    animation: fadeIn .8s 1s ease-in-out forwards;
    .ball {
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        width: 10px;
        height: 10px;
        margin: auto;
        border-radius: 4000px;
        background-color: black;
        animation: moveBall 1.5s 1s ease-in-out infinite;
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

@keyframes moveBall {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(30px);
    }
}

</style>