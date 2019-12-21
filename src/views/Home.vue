<template>
    <div class='Home'>
        <header>
            <h1>Gonzalo Alcaide<div class='subtitle'>Web Developer</div></h1>
        </header>

        <section class="who-am-i page-width">
            <h2 class="text-center space-title2">Who am I?</h2>
            <p class="space-text">I am a guy who became a Web Developer a few years ago. Since then, I have helped in many projects and I have done many others. Feel free to check some of them out!</p>
            <div class="btn-container center">
                <button class="btn"><a href='#'>See Projects <span>-></span></a></button>
            </div>
        </section>

        <section class="skills page-width">
            <h2 class="text-center space-title2">What are my skills?</h2>
            <p class="space-text">First things first. I have started learning HTML, CSS and JavaScript. Then I learned how to build a server using NodeJS, Express and MongoDB.</p>
            <p class="space-text">After I improved (and I am still doing it) my skills with deeper knowledge and finally I started to create web apps using my first JavaScript framework, ReactJS.</p>
            <p class="space-text">Nowadays I can code in many ways, but my favourite is still ReactJS over Angular or even React Native.</p>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>

    @import '@/assets/styles/gonzalo.scss';
    .Home {
        header {
            height: 100vh;
            background-color: $yellow;
            display: flex;
            justify-content: center;
            align-items: center;
            h1 {
                color: black;
                line-height: 1;
                text-align: center;
                font-size: $text-xxlarge;
                .subtitle {
                    letter-spacing: 5px;
                    font-size: $text-xlarge;
                }
            }
        }
        .who-am-i,
        .skills {
            padding: 80px 0;
            p {
                color: white;
            }
        }
    }
</style>
