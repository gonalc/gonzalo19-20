<template>
  <div class="Twitter">
      <h1 class="space-title1 text-center">Twitter</h1>
      <ul class="twitter-list page-width">
          <li v-for='tweet in tweets' :key='tweet.id' class="tweet">
                <p class="twitter-date">{{new Date(tweet.created_at).toLocaleDateString()}}</p>
                <p class='space-text'>{{tweet.full_text}}</p>
                <div v-if='tweet.entities.media' class="media-container">
                    <div v-for='img in tweet.entities.media' :key='img.id' class="media">
                        <img v-if='img.type === "photo"' :src='img.media_url' alt="">
                    </div>
                </div>
          </li>
      </ul>
  </div>
</template>

<script>
import {tweets} from '../twitter';
export default {
    name: 'twitter',
    data() {
        return {
            tweets: null
        }
    },
    created() {
        let provTweets = tweets.sort((a, b) => {
            if(new Date(a.created_at) > new Date(b.created_at)) return 1;
            if(new Date(a.created_at) < new Date(b.created_at)) return -1;
            return 0;
        })
        this.tweets = provTweets;
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.Twitter {
    color: white;
    padding-top: 80px;
    .twitter-list {
        li {
            margin: 20px 0 50px;
            border-bottom: 1px solid $yellow;
        }
    }
}
</style>