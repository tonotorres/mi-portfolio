<template>
    <section class="container-fluid pt-4 introduccion">
      <div class="row pt-4">
          <div class="col-1"></div>
          <div class="col-3 fondo-imagen">
            <img class="responsive-image" src="@/assets/images/mi_foto.webp" alt="Este soy yo!">
          </div>
          <div class="col-7" style="padding-left: 3vw;">
              <div class="row pt-0">
                <div class="col pl-4">
                    <div class="row pb-1"><div class="col"><h2 class="introduction_title_programacion" v-html="scrambledTitle"></h2></div></div>
                    <div class="row pb-1"><div class="col"><h4 class="introduction_sub-title_programacion" v-html="scrambledSubTitle"></h4></div></div>
                    <div class="row"><div class="col"><p class="normal-text">{{$t("introduccion_texto")}}{{$t("introduccion_texto_2")}}</p></div></div>
                    <div class="row">
                      <div class="col col_links">
                        <div class="flex-container">
                          <div class="flex-slide home background_programacion_gris">
                            <div class="flex-title"><img src="../../assets/images/logos/linkedin.svg" alt="LinkedIn" class="img-link"><p class="flex-about pt-1">{{$t("introduccion_linkedin")}}</p></div>
                          </div>
                          <div class="flex-slide about background_programacion_gris">
                            <div class="flex-title"><img src="../../assets/images/logos/github.svg" alt="GitHub" class="img-link"><p class="flex-about pt-1">{{$t("introduccion_github")}}</p></div>

                          </div>
                          <div class="flex-slide-cv work background_programacion_gris">
                            <div class="flex-title"><img src="../../assets/images/logos/descargar_cv.svg" alt="Descargar CV" class="img-link"><p class="flex-about pt-1">{{$t("introduccion_cv")}}</p></div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-1"></div>
      </div>
    </section>
  </template>
  
  <script setup>
      import { ref, onMounted } from 'vue';
      import { useI18n } from 'vue-i18n'

      // Variables
      const { t } = useI18n()
      const scrambledTitle = ref('');
      const scrambledSubTitle = ref('');
      const targetTitle = t("introduccion_titulo");
      const targetSubTitle = t("introduccion_subtitulo");
      const scrambleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

      // Movimiento de texto

      const scramble = (text, duration, scrambledRef) => {
        const startTime = new Date().getTime();
        const scrambleText = () => {
          let result = "";
          for (let i = 0; i < text.length; i++) {
            result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
          scrambledRef.value = result;
      };
  
        const update = () => {
          const currentTime = new Date().getTime();
          if (currentTime - startTime < duration) {
            scrambleText();
            requestAnimationFrame(update);
          } else {
            scrambledRef.value = text;
          }
        };
  
        update();
      };

      onMounted(() => { 
        scramble(targetTitle, 1200, scrambledTitle);
        scramble(targetSubTitle, 1500, scrambledSubTitle);
      });

  </script>

<style scoped>

  
  .introduccion {
    position: relative;
    z-index: 10;
    background-image:  radial-gradient(hsla(0,0%,58%,.3) 1px,transparent 0);
    background-size: 20px 20px;
  }


  .responsive-image {
    max-width: 100%;
    width: 100%;
    height: auto;
    border-radius: 9px;
    position: absolute;
    bottom: 0%;
    left: 0%;
  }
  .fondo-imagen {
    background-image: linear-gradient(to left, #c244d6c9, #a85ae7, #8a6bf3, #6679fb, #3284ffcb);
  -webkit-animation: AnimateBG 5s ease infinite;
          animation: AnimateBG 5s ease infinite;
    border-radius: 9px;
    position: relative;
    outline: 1px solid white;

}

@-webkit-keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
  


  /* Nuevos estilos links*/
  .col_links {
    position: relative;
  }
  
      
  .flex-container {
    position: relative;
    height: 70px;
    width: 95%;
    display: flex;
    overflow: hidden;
    border-radius: 9px;
    border: 1px solid white;
    display: -webkit-flex; /* Safari */
  }
  .flex-title {
    position: relative;
    height: 100%;
    margin: auto;
    text-align: center;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    
  }
  .flex-about {
    opacity: 0;
    color: #f1f1f1;
    font-family: "Mona Sans SemiBold";
    position: absolute;
    width: 100%;
    border-radius: 10px;
    line-height: 1.3;
    margin: auto;
    text-align: center;
    -webkit-transition: opacity 1s ease;
    -moz-transition: opacity 1s ease;
    -ms-transition: opacity 1s ease;
    -o-transition: opacity 1s ease;
    transition: opacity 1s ease;
  }


  .flex-slide, .flex-slide-cv {
    -webkit-flex: 1;  /* Safari 6.1+ */
    -ms-flex: 1;  /* IE 10 */    
    flex: 1;
    border: 1px solid white;
    cursor: pointer;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
  }
  .flex-slide:hover {
    -webkit-flex-grow: 1.1;
    flex-grow: 1.1;
    background-image: linear-gradient(to right, #c244d6ec, #a85ae7, #8a6bf3, #6679fb, #3284ffef);

  }
  .flex-slide-cv:hover {
    -webkit-flex-grow: 1.5;
    flex-grow: 1.5;
    background-image: linear-gradient(to right, #c244d6ec, #a85ae7, #8a6bf3, #6679fb, #3284ffef);

  }


  .img-link {
    height: 100%;
    width: auto;
    position: absolute;
    left: 45%;
    padding: 5px;
  }
  .img-link {
    left: 37%;
    transition: left 0.6s;
  }

  .flex-title:hover .img-link {
    left: 3%;
  }
  .flex-title:hover .flex-about {
    -webkit-transition: opacity 3s ease;
    -moz-transition: opacity 3s ease;
    -ms-transition: opacity 3s ease;
    -o-transition: opacity 3s ease;
    transition: opacity 2s ease;
    opacity: 1;
  }
  @media screen and (min-width: 1901px) {
    .flex-about {
      font-size: 1.9vw;
      top: 10%;
    }
    .flex-slide-cv .flex-title .flex-about {
      left: 10%;
    }
  }
  @media screen and (min-width: 1701px) and (max-width: 1900px) {
    .flex-about {
      font-size: 1.9vw;
      top: 11%;
    }
    .flex-slide-cv .flex-title .flex-about {
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1551px) and (max-width: 1700px) {
    .flex-about {
      font-size: 1.9vw;
      top: 17%;
    }
    .flex-slide-cv .flex-title .flex-about {
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1480px) and (max-width: 1550px) {
    .flex-about {
      font-size: 1.8vw;
      top: 19%;
    }
    .flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .flex-title .flex-about {
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1365px) and (max-width: 1479px) {
    .flex-about {
      font-size: 1.8vw;
      top: 21%;
    }
    .flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .flex-title .flex-about {
      font-size: 1.7vw;
      left: 10%;
    }
    .img-link {
      left: 40%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1220px) and (max-width: 1364px) {
    .flex-about {
      font-size: 1.8vw;
      top: 24%;
    }
    .flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .flex-title .flex-about {
      font-size: 1.7vw;
      left: 10%;
    }
    .img-link {
      left: 37%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 1091px) and (max-width: 1219px) {
    .flex-about {
      font-size: 1.7vw;
      top: 26%;
    }
    .flex-title .flex-about { 
      left: 10%;
    }
    .flex-slide-cv .flex-title .flex-about {
      font-size: 1.6vw;
      left: 12%;
    }
    .img-link {
      left: 36%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 950px) and (max-width: 1090px) {
    .flex-about {
      font-size: 2vw;
      top: 26%;
    }
    .flex-title .flex-about { 
      left: 16%;
    }
    .flex-slide-cv .flex-title .flex-about {
      font-size: 1.6vw;
      top: 30%;
      left: 15%;
    }
    .img-link {
      left: 33%;
      transition: left 1s;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 949px) {
    .flex-about {
      display: none;
    }
    .img-link {
      left: 33%;
    }
    .flex-title:hover .img-link {
      left: 33%;
    }
    .flex-container {
      height: 60px;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 809px) {
    .img-link {
      left: 31%;
    }
    .flex-title:hover .img-link {
      left: 31%;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 720px) {
    .img-link {
      left: 29%;
    }
    .flex-title:hover .img-link {
      left: 29%;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 620px) {
    .img-link {
      left: 27%;
    }
    .flex-title:hover .img-link {
      left: 27%;
    }
    .flex-container {
      height: 50px;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 520px) {
    .img-link {
      left: 23%;
    }
    .flex-title:hover .img-link {
      left: 23%;
    }
    .flex-container {
      height: 50px;
      border: 0px;
    }
  }
  @media screen and (min-width: 100px) and (max-width: 390px) {
    .img-link {
      left: 19%;
    }
    .flex-title:hover .img-link {
      left: 19%;
    }
    .flex-container {
      height: 50px;
      border: 0px;
    }
    .flex-slide {
      border: 0px;
    }
  }

  
</style>