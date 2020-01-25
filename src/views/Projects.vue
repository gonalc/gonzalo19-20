<template>
  <div class="Projects">
      <h1 class="text-center space-title1">Projects</h1>

      <p class="page-width space-text">Web projects I have been working in. I like to see how I have improved since I started to code. I hope you can see it as well.</p>

      <section class="projects-section">
          <div class="project-container mirror-studio">
              <h2 class="project-title text-center space-title2">Mirror Studio</h2>

            <a href='https://mirror.studio/' target="_blank">
              <div class="project-thumbnail">
                    <div class="logo-container">
                        <img src="../assets/img/projects/logo-mirror-studio.svg" alt="">
                    </div>
              </div>
            </a>

            <div class="btn-container center space-text">
                <button class="btn small">
                    <a href='https://mirror.studio/' target="_blank">
                        See Project <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span>
                    </a>
                </button>
            </div>

              <hr class="separator">
          </div>

          <div class="project-container anava">
              <h2 class="project-title text-center space-title2">Anava Design</h2>

                <a href='https://anava.design/' rel="nofollow noreferer" target="_blank">
                    <div class="project-thumbnail">
                        <div class="logo-container">
                            <img src="../assets/img/projects/logo-anava.svg" alt="">
                        </div>
                        <div class="letters-container">
                            <img src="../assets/img/projects/letras-anava.svg" alt="">
                        </div>
                    </div>
                </a>

            <div class="btn-container center space-text">
                <button class="btn small">
                    <a href='https://anava.design/' rel="nofollow noreferer" target="_blank">
                        See Project <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span>
                    </a>
                </button>
            </div>

              <hr class="separator">
          </div>

          <div class="project-container movelab">
              <h2 class="project-title text-center space-title2">Movement Laboratory Fisio</h2>

                <a href='https://movelabfisio.com/' rel="nofollow noreferer" target="_blank">
                    <div class="project-thumbnail">
                        <div class="logo-container">
                            <img src="../assets/img/projects/logo-movelab.svg" alt="">
                        </div>
                    </div>
                </a>

            <div class="btn-container center space-text">
                <button class="btn small">
                    <a href='https://movelabfisio.com/' rel="nofollow noreferer" target="_blank">
                        See Project <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span>
                    </a>
                </button>
            </div>

              <hr class="separator">
          </div>

          <div class="project-container ala">
              <h2 class="project-title text-center space-title2">American Language Academy</h2>

                <a href='https://www.americanlanguage.es/' rel="nofollow noreferer" target="_blank">
                    <div class="project-thumbnail">
                        <div class="logo-container">
                            <img src="../assets/img/projects/logo-ala.svg" alt="">
                        </div>
                    </div>
                </a>

            <div class="btn-container center space-text">
                <button class="btn small">
                    <a href='https://www.americanlanguage.es/' rel="nofollow noreferer" target="_blank">
                        See Project <span class='arrow-container'><img src='../assets/img/icons/arrow-right.svg'></span>
                    </a>
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
                width: 90vw;
                height: 50vw;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
                .logo-container {
                    max-width: 250px;
                }
            }
            &.mirror-studio {
                .project-thumbnail {
                    background-color: #85D8EE;
                }
            }
            &.anava {
                .project-thumbnail {
                    background-color: #563c3c;
                    display: flex;
                    flex-direction: column;
                    .logo-container {
                        width: 70vw;
                        margin-bottom: 10px;
                    }
                    .letters-container {
                        width: 65vw;
                    }
                }
            }
            &.movelab {
                .project-thumbnail {
                    background-color: white;
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