<template>
  <div class="Projects">
      <h1 class="text-center space-title1">Projects</h1>

      <p class="page-width space-text">Web projects I have been working in. I like to see how I have improved since I started to code. I hope you can see it as well.</p>

      <section class="projects-section">
          <div class="project-container mirror-studio">
              <h2 class="project-title text-center space-title2">Mirror Studio</h2>

            <router-link to='/projects/mirror-studio'>
              <div class="project-thumbnail">
                    <div class="logo-container">
                        <img src="../assets/img/projects/logo-mirror-studio.svg" alt="">
                    </div>
              </div>
            </router-link>

            <div class="btn-container center space-text">
                <button class="btn small">
                    <router-link to='/projects/mirror-studio'>
                        See Project <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span>
                    </router-link>
                </button>
            </div>

              <hr class="separator">
          </div>

          <div class="project-container ala">
              <h2 class="project-title text-center space-title2">American Language Academy</h2>

                <router-link to='/projects/american-language-academy'>
                        <div class="project-thumbnail">
                            <div class="logo-container">
                                <img src="../assets/img/projects/logo-ala.svg" alt="">
                            </div>
                        </div>
                </router-link>

            <div class="btn-container center space-text">
                <button class="btn small">
                    <router-link to='/projects/american-language-academy'>
                        See Project <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span>
                    </router-link>
                </button>
            </div>

              <hr class="separator">
          </div>
      </section>
  </div>
</template>

<script>
export default {
    name: 'projects'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/gonzalo.scss';

.Projects {
    color: white;
    padding-top: 80px;
    .projects-section {
        .project-container {
            .project-thumbnail {
                width: 100vw;
                height: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
                .logo-container {
                    max-width: 250px;
                }
            }
            &.mirror-studio {
                .project-thumbnail {
                    background-color: #85D8EE;
                }
            }
            &.ala {
                .project-thumbnail {
                    background-color: #0188E6;
                    .logo-container {
                        max-width: 30vw;
                    }
                }
            }
        }
    }
}
</style>