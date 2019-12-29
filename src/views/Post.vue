<template>
  <div class="post-mega-container" :class="{loading: loading}">
      <Loader v-if='loading' />
    <article v-else class="Post">
        <h1 class="text-center space-title1 page-width" :post='post'>{{ post.title }}</h1>
        <div class="post-content page-width" v-html='post.content'></div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../components/Loader'

export default {
    name: 'post',
    components: {
        Loader
    },
    props: {
        slugify: Function
    },
    data() {
        return {
            post: Object,
            loading: true
        }
    },
    created() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gonalc8')
        .then(res => {
            this.post = res.data.items.find(p => this.slugify(p.title) === this.$route.params.title);
            const content = this.post.content.replace('<p>', '<p class="space-text">');
            this.post = { ...this.post, editedContent: content };
            this.loading = false;
        })
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.post-mega-container {
    &.loading {
        padding-top: 100px;
    }
    .Post {
        padding-top: 80px;
        color: white;
        .post-content {
            font-size: $garamond;
        }
    }
}
</style>