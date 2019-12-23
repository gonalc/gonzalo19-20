<template>
    <div class='Home'>
        <header>
            <h1>Gonzalo Alcaide<div class='subtitle'>Web Developer</div></h1>
        </header>

        <section class="who-am-i page-width">
            <h2 class="text-center space-title2">Who am I?</h2>
            <p class="space-text">I am a guy who became a Web Developer a few years ago. Since then, I have helped in many projects and I have done many others. Feel free to check some of them out!</p>
            <div class="btn-container center">
                <button class="btn"><a href='#'>See Projects <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span></a></button>
            </div>
        </section>

        <section class="photography">
            <h2 class="space-title2 text-center">Photography</h2>
            <p class="space-text page-width">I like to pretend I am a photographer, so when I travel I like to grab my camera and take pictures of the places I visit.</p>
            <div class="media-container">
                <img src="../assets/img/pics/londres.jpg" alt="Trip to London when I was living in Brighton">
            </div>

            <div class="btn-container center">
                <button class="btn"><a href='#'>See Pictures <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span></a></button>
            </div>
        </section>

        <section class="videography">
            <h2 class="space-title2 text-center">Video</h2>

            <p class="space-text page-width">In the University I made some projects that are not really cool but I am proud of them and I would like to share them with the world.</p>
        
            <div class="media-container">
                <iframe autoplay src="https://www.youtube-nocookie.com/embed/K8oaOV21Uc4?autoplay=1&mute=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="btn-container center">
                <button class="btn"><a href='#'>See Videos <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span></a></button>
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
        section {
            padding: 80px 0;
            p {
                color: white;
            }
            .media-container {
                overflow: hidden;
                height: 50vw;
                margin-bottom: 20px;
                img {
                    margin-top: -10%;
                }
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
