<template>
  <div class="Footer">
      <div class="quote">
          <q class='text-center garamond'>Lorem ipsum dolor sit amet</q>
          <div class="author text-right oswald">- Mahadma Gandhi</div>
      </div>
      <hr>
      <div class="social-media">
          <p class="text-center">Catch me up on the Social Media:</p>
          <ul class='social-media-icons'>
              <li>
                  <a href='https://www.instagram.com/gonzzaloalcaide/' target='_blank' rel="nofollow noreferer">
                      <img src="@/assets/img/icons/instagram.svg" alt="">
                  </a>
              </li>
              <li>
                  <a href='https://www.linkedin.com/in/gonzalo-alcaide/' target='_blank' rel="nofollow noreferer">
                      <img src="@/assets/img/icons/linkedin.svg" alt="">
                  </a>
              </li>
              <li>
                  <a href='https://twitter.com/GonAlc8' target='_blank' rel="nofollow noreferer">
                      <img src="@/assets/img/icons/twitter.svg" alt="">
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.Footer {
    margin-top: 80px;
    border-top: 3px solid $yellow;
    padding: 50px 40px;
    box-sizing: border-box;
    color: white;
    .quote {
        q {
            font-size: $text-large;
        }
        .author {
            font-size: $text-medium;
        }
    }
    hr {
        width: 50%;
        border: none;
        background-color: $yellow;
        height: 2px;
        margin: 40px auto;
    }
    .social-media {
        .social-media-icons {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 30px 0;
        }
    }
}
</style>