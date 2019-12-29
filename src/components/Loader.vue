<template>
  <div class="loading-container">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    name: 'loader'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .loader {
        width: 150px;
        height: 150px;
        border-radius: 4000px;
        background-color: $yellow;
        animation: loading 1.5s ease-in-out infinite;
    }
}

@keyframes loading {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(.6);
    }
    100% {
        transform: scale(1);
    }
}
</style>