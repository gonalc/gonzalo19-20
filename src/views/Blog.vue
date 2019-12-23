<template>
  <div class="Blog">
      <h1 class="space-title1 text-center">Blog</h1>

      <p class="space-text page-width">Here you will find some of my thoughts about different topics, including web development and personal experiences. You may find some posts I have published when I was just bored at home.</p>

      <section class='posts-container'>
          <div class="post-preview" v-for='post in posts' :key='slugify(post.title)'>
                <div class="thumbnail-container">
                    <img :src='post.thumbnail' :alt='post.title'>
                    <h2 class="post-title">{{ post.title }}</h2>
                </div>

                <ul class="tags-container">
                    <li class="tag" v-for='tag in post.categories' :key='tag'>{{ tag }}</li>
                </ul>

                <div class="short-description page-width" v-html='post.description'></div>

                <div class="date">{{ new Date(post.pubDate).toLocaleDateString() }}</div>
          </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'blog',
    props: {
        slugify: Function
    },
    data() {
        return {
            loading: false,
            posts: null,
            editedPosts: null,
            error: null
        }
    },
    created() {
        // fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gonalc', {
        //     method: 'GET',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Credentials': 'true',
        //         'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        //         'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        //     }
        // })
        //     .then(res => res.json())
        //     .then(resJson => alert(resJson))
        //     .catch(err => alert(err))
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gonalc8')
        .then(res => {
            this.posts = res.data.items;
        })
        .catch(err => alert(err))
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.Blog {
    padding-top: 80px;
    color: white;
    .posts-container {
        .post-preview {
            .thumbnail-container {
                position: relative;
                .post-title {
                    position: absolute;
                    color: black;
                    background-color: $yellow;
                    bottom: 0;
                    right: 0;
                    box-sizing: border-box;
                    padding: 5px 10px;
                }
            }
            .tags-container {
                margin: 20px 0;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
                .tag {
                    text-transform: capitalize;
                    padding: 10px 15px;
                    border: 1px solid $yellow;
                }
            }
        }
    }
}

</style>